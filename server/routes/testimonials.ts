import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { authenticate, requireRole } from '../middleware/auth';

const router = Router();
const prisma = new PrismaClient();

// Get all testimonials (public)
router.get('/', async (req, res) => {
  try {
    const { featured, limit = 10 } = req.query;
    
    const where: any = { isActive: true };
    if (featured === 'true') where.isFeatured = true;

    const testimonials = await prisma.testimonial.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take: parseInt(limit as string),
    });

    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get testimonials' });
  }
});

// Get featured testimonials
router.get('/featured', async (req, res) => {
  try {
    const testimonials = await prisma.testimonial.findMany({
      where: { isActive: true, isFeatured: true },
      orderBy: { createdAt: 'desc' },
      take: 6,
    });

    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get featured testimonials' });
  }
});

// Create testimonial (admin only)
router.post('/', authenticate, requireRole('ADMIN'), async (req, res) => {
  try {
    const testimonial = await prisma.testimonial.create({
      data: req.body,
    });

    res.status(201).json(testimonial);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create testimonial' });
  }
});

// Update testimonial (admin only)
router.put('/:id', authenticate, requireRole('ADMIN'), async (req, res) => {
  try {
    const { id } = req.params;
    const testimonial = await prisma.testimonial.update({
      where: { id },
      data: req.body,
    });

    res.json(testimonial);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update testimonial' });
  }
});

// Delete testimonial (admin only)
router.delete('/:id', authenticate, requireRole('ADMIN'), async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.testimonial.delete({ where: { id } });
    res.json({ message: 'Testimonial deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete testimonial' });
  }
});

export default router;
