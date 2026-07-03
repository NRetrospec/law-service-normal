import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { authenticate, requireRole } from '../middleware/auth';

const router = Router();
const prisma = new PrismaClient();

// Get all practice areas (public)
router.get('/', async (req, res) => {
  try {
    const practiceAreas = await prisma.practiceArea.findMany({
      where: { isActive: true },
      orderBy: { sortOrder: 'asc' },
      select: {
        id: true,
        slug: true,
        title: true,
        description: true,
        icon: true,
        image: true,
      },
    });

    res.json(practiceAreas);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get practice areas' });
  }
});

// Get single practice area
router.get('/:slug', async (req, res) => {
  try {
    const { slug } = req.params;

    const practiceArea = await prisma.practiceArea.findUnique({
      where: { slug },
    });

    if (!practiceArea || !practiceArea.isActive) {
      return res.status(404).json({ error: 'Practice area not found' });
    }

    // Get related testimonials
    const testimonials = await prisma.testimonial.findMany({
      where: {
        isActive: true,
        caseType: practiceArea.title,
      },
      take: 3,
    });

    res.json({ practiceArea, testimonials });
  } catch (error) {
    res.status(500).json({ error: 'Failed to get practice area' });
  }
});

// Create practice area (admin only)
router.post('/', authenticate, requireRole('ADMIN'), async (req, res) => {
  try {
    const {
      slug,
      title,
      description,
      content,
      icon,
      image,
      metaTitle,
      metaDesc,
      faqs,
      sortOrder,
    } = req.body;

    const practiceArea = await prisma.practiceArea.create({
      data: {
        slug,
        title,
        description,
        content,
        icon,
        image,
        metaTitle,
        metaDesc,
        faqs: faqs || [],
        sortOrder: sortOrder || 0,
      },
    });

    res.status(201).json(practiceArea);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create practice area' });
  }
});

// Update practice area (admin only)
router.put('/:id', authenticate, requireRole('ADMIN'), async (req, res) => {
  try {
    const { id } = req.params;
    const practiceArea = await prisma.practiceArea.update({
      where: { id },
      data: req.body,
    });

    res.json(practiceArea);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update practice area' });
  }
});

// Delete practice area (admin only)
router.delete('/:id', authenticate, requireRole('ADMIN'), async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.practiceArea.delete({ where: { id } });
    res.json({ message: 'Practice area deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete practice area' });
  }
});

export default router;
