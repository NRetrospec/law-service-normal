import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { authenticate, optionalAuth, requireRole } from '../middleware/auth';

const router = Router();
const prisma = new PrismaClient();

// Get all blog posts (public)
router.get('/', optionalAuth, async (req, res) => {
  try {
    const { 
      category, 
      tag, 
      search, 
      page = 1, 
      limit = 10,
      status = 'PUBLISHED' 
    } = req.query;

    const where: any = {};
    
    if (status === 'PUBLISHED') {
      where.status = 'PUBLISHED';
      where.publishedAt = { lte: new Date() };
    } else if (req.user?.role === 'ADMIN') {
      where.status = status;
    }

    if (category) where.category = category;
    if (tag) where.tags = { has: tag as string };
    if (search) {
      where.OR = [
        { title: { contains: search as string, mode: 'insensitive' } },
        { content: { contains: search as string, mode: 'insensitive' } },
        { excerpt: { contains: search as string, mode: 'insensitive' } },
      ];
    }

    const [posts, total, categories] = await Promise.all([
      prisma.blogPost.findMany({
        where,
        include: {
          author: {
            select: {
              firstName: true,
              lastName: true,
              avatar: true,
            },
          },
        },
        orderBy: { publishedAt: 'desc' },
        skip: (parseInt(page as string) - 1) * parseInt(limit as string),
        take: parseInt(limit as string),
      }),
      prisma.blogPost.count({ where }),
      prisma.blogPost.groupBy({
        by: ['category'],
        _count: { category: true },
        where: { status: 'PUBLISHED' },
      }),
    ]);

    res.json({
      posts: posts.map(post => ({
        ...post,
        content: undefined, // Don't send full content in list view
      })),
      categories: categories.map(c => ({
        name: c.category,
        count: c._count.category,
      })),
      pagination: {
        page: parseInt(page as string),
        limit: parseInt(limit as string),
        total,
        pages: Math.ceil(total / parseInt(limit as string)),
      },
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to get blog posts' });
  }
});

// Get single blog post
router.get('/:slug', optionalAuth, async (req, res) => {
  try {
    const { slug } = req.params;

    const post = await prisma.blogPost.findUnique({
      where: { slug },
      include: {
        author: {
          select: {
            firstName: true,
            lastName: true,
            avatar: true,
            adminProfile: {
              select: { bio: true },
            },
          },
        },
      },
    });

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    // Check if post is published or user is admin
    if (post.status !== 'PUBLISHED' && req.user?.role !== 'ADMIN') {
      return res.status(404).json({ error: 'Post not found' });
    }

    // Increment view count
    await prisma.blogPost.update({
      where: { id: post.id },
      data: { views: { increment: 1 } },
    });

    // Get related posts
    const relatedPosts = await prisma.blogPost.findMany({
      where: {
        id: { not: post.id },
        status: 'PUBLISHED',
        OR: [
          { category: post.category },
          { tags: { hasSome: post.tags } },
        ],
      },
      select: {
        id: true,
        slug: true,
        title: true,
        excerpt: true,
        featuredImage: true,
        publishedAt: true,
      },
      take: 3,
    });

    res.json({ post, relatedPosts });
  } catch (error) {
    res.status(500).json({ error: 'Failed to get blog post' });
  }
});

// Create blog post (admin only)
router.post('/', authenticate, requireRole('ADMIN'), async (req, res) => {
  try {
    const {
      title,
      slug,
      excerpt,
      content,
      featuredImage,
      category,
      tags,
      status,
      publishedAt,
      metaTitle,
      metaDesc,
    } = req.body;

    const post = await prisma.blogPost.create({
      data: {
        title,
        slug,
        excerpt,
        content,
        featuredImage,
        category,
        tags: tags || [],
        status,
        publishedAt: publishedAt ? new Date(publishedAt) : null,
        metaTitle,
        metaDesc,
        authorId: req.user!.id,
      },
    });

    res.status(201).json(post);
  } catch (error) {
    console.error('Blog creation error:', error);
    res.status(500).json({ error: 'Failed to create blog post' });
  }
});

// Update blog post (admin only)
router.put('/:id', authenticate, requireRole('ADMIN'), async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    if (updateData.publishedAt) {
      updateData.publishedAt = new Date(updateData.publishedAt);
    }

    const post = await prisma.blogPost.update({
      where: { id },
      data: updateData,
    });

    res.json(post);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update blog post' });
  }
});

// Delete blog post (admin only)
router.delete('/:id', authenticate, requireRole('ADMIN'), async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.blogPost.delete({ where: { id } });
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete blog post' });
  }
});

export default router;
