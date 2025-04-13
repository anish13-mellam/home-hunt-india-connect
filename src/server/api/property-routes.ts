
import express from 'express';
import { getAllProperties, getFeaturedProperties, getRentalProperties, getPropertyById, createProperty } from '../models/property';

const router = express.Router();

// Get all properties
router.get('/properties', async (req, res) => {
  try {
    const properties = await getAllProperties();
    res.json(properties);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch properties' });
  }
});

// Get featured properties
router.get('/properties/featured', async (req, res) => {
  try {
    const properties = await getFeaturedProperties();
    res.json(properties);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch featured properties' });
  }
});

// Get rental properties
router.get('/properties/rent', async (req, res) => {
  try {
    const properties = await getRentalProperties();
    res.json(properties);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch rental properties' });
  }
});

// Get property by ID
router.get('/properties/:id', async (req, res) => {
  try {
    const property = await getPropertyById(req.params.id);
    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }
    res.json(property);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch property' });
  }
});

// Create new property
router.post('/properties', async (req, res) => {
  try {
    const newProperty = await createProperty(req.body);
    res.status(201).json(newProperty);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create property' });
  }
});

export default router;
