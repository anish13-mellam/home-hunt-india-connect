
import mongoose from 'mongoose';
import { Property } from '../../types/property';

// Define the schema for the property model
const propertySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  location: {
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: String, required: true },
    coordinates: {
      lat: { type: Number },
      lng: { type: Number }
    }
  },
  propertyType: { type: String, required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  area: { type: Number, required: true },
  isFeatured: { type: Boolean, default: false },
  isVerified: { type: Boolean, default: false },
  status: { type: String, default: 'active' },
  listingType: { type: String, required: true },
  yearBuilt: { type: Number },
  amenities: [{ type: String }],
  images: [{ type: String }],
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}, { versionKey: false });

// Create the property model if it doesn't exist
let PropertyModel: mongoose.Model<Property>;

// Function to get properties with search parameters
export const getProperties = async (
  page: number = 1,
  limit: number = 10,
  searchParams: any = {}
) => {
  try {
    const skip = (page - 1) * limit;
    
    // Build query based on search parameters
    const query: any = {};
    
    if (searchParams.propertyType) {
      query.propertyType = searchParams.propertyType;
    }
    
    if (searchParams.city) {
      query['location.city'] = new RegExp(searchParams.city, 'i');
    }
    
    if (searchParams.minPrice || searchParams.maxPrice) {
      query.price = {};
      if (searchParams.minPrice) query.price.$gte = Number(searchParams.minPrice);
      if (searchParams.maxPrice) query.price.$lte = Number(searchParams.maxPrice);
    }
    
    if (searchParams.bedrooms) {
      query.bedrooms = { $gte: Number(searchParams.bedrooms) };
    }
    
    if (searchParams.bathrooms) {
      query.bathrooms = { $gte: Number(searchParams.bathrooms) };
    }
    
    if (searchParams.listingType) {
      query.listingType = searchParams.listingType;
    }
    
    // Get property model or create it
    try {
      PropertyModel = mongoose.model('Property');
    } catch (error) {
      PropertyModel = mongoose.model<Property>('Property', propertySchema);
    }
    
    // Execute query with pagination
    const properties = await PropertyModel.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);
    
    const totalProperties = await PropertyModel.countDocuments(query);
    
    return {
      properties,
      pagination: {
        total: totalProperties,
        page,
        limit,
        pages: Math.ceil(totalProperties / limit)
      }
    };
  } catch (error) {
    console.error('Error getting properties:', error);
    throw error;
  }
};

// Function to get a single property by ID
export const getPropertyById = async (id: string) => {
  try {
    // Get property model or create it
    try {
      PropertyModel = mongoose.model('Property');
    } catch (error) {
      PropertyModel = mongoose.model<Property>('Property', propertySchema);
    }
    
    const property = await PropertyModel.findById(id);
    return property;
  } catch (error) {
    console.error(`Error getting property with ID ${id}:`, error);
    throw error;
  }
};

// Function to create a new property
export const createProperty = async (propertyData: Omit<Property, "id">) => {
  try {
    // Get property model or create it
    try {
      PropertyModel = mongoose.model('Property');
    } catch (error) {
      PropertyModel = mongoose.model<Property>('Property', propertySchema);
    }
    
    const property = new PropertyModel({
      ...propertyData,
      bedrooms: propertyData.bedrooms,
      bathrooms: propertyData.bathrooms,
      isFeatured: propertyData.isFeatured || false,
    });
    
    await property.save();
    return property;
  } catch (error) {
    console.error('Error creating property:', error);
    throw error;
  }
};

// Function to update a property
export const updateProperty = async (id: string, propertyData: Partial<Property>) => {
  try {
    // Get property model or create it
    try {
      PropertyModel = mongoose.model('Property');
    } catch (error) {
      PropertyModel = mongoose.model<Property>('Property', propertySchema);
    }
    
    const property = await PropertyModel.findByIdAndUpdate(
      id,
      { ...propertyData, updatedAt: new Date() },
      { new: true }
    );
    
    return property;
  } catch (error) {
    console.error(`Error updating property with ID ${id}:`, error);
    throw error;
  }
};

// Function to delete a property
export const deleteProperty = async (id: string) => {
  try {
    // Get property model or create it
    try {
      PropertyModel = mongoose.model('Property');
    } catch (error) {
      PropertyModel = mongoose.model<Property>('Property', propertySchema);
    }
    
    await PropertyModel.findByIdAndDelete(id);
    return { success: true };
  } catch (error) {
    console.error(`Error deleting property with ID ${id}:`, error);
    throw error;
  }
};
