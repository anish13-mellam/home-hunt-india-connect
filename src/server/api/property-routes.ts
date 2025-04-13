
import express from 'express';
import { getProperties } from '../models/property';

const router = express.Router();

// Get all properties
router.get('/properties', async (req, res) => {
  try {
    const properties = await getProperties();
    res.json(properties);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch properties' });
  }
});

// Get a single property by ID
router.get('/properties/:id', async (req, res) => {
  try {
    // Changed from { _id: req.params.id } to just req.params.id
    const property = await getProperties(req.params.id);
    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }
    res.json(property);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch property' });
  }
});

// Get featured properties
router.get('/properties/featured', async (req, res) => {
  try {
    // Changed from { isFeatured: true } to just "featured"
    const featuredProperties = await getProperties("featured");
    res.json(featuredProperties);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch featured properties' });
  }
});

// Get properties by type (rent/sale)
router.get('/properties/type/:listingType', async (req, res) => {
  try {
    const { listingType } = req.params;
    // Changed from { listingType } to just listingType
    const properties = await getProperties(listingType);
    res.json(properties);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch properties by type' });
  }
});

export default router;
