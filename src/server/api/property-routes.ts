
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
    const propertyId = req.params.id;
    // Pass the ID as a search parameter object
    const property = await getProperties(1, 10, { _id: propertyId });
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
    // Pass featured as a search parameter object
    const featuredProperties = await getProperties(1, 10, { isFeatured: true });
    res.json(featuredProperties);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch featured properties' });
  }
});

// Get properties by type (rent/sale)
router.get('/properties/type/:listingType', async (req, res) => {
  try {
    const { listingType } = req.params;
    // Pass listingType as a search parameter object
    const properties = await getProperties(1, 10, { listingType });
    res.json(properties);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch properties by type' });
  }
});

export default router;
