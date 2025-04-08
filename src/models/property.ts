
import { Property as PropertyType } from "@/components/properties/PropertyCard";
import { Property } from "@/lib/db";

// Function to get all properties
export const getAllProperties = async (): Promise<PropertyType[]> => {
  try {
    const result = await Property.find({}).lean();
    return result.map((doc: any) => ({
      id: doc._id.toString(),
      title: doc.title,
      type: doc.type,
      price: doc.price,
      priceUnit: doc.priceUnit,
      location: doc.location,
      area: doc.area,
      beds: doc.beds,
      baths: doc.baths,
      image: doc.image,
      forRent: doc.forRent,
      featured: doc.featured
    }));
  } catch (error) {
    console.error("Error fetching properties:", error);
    throw error;
  }
};

// Function to get featured properties
export const getFeaturedProperties = async (): Promise<PropertyType[]> => {
  try {
    const result = await Property.find({ featured: true }).lean();
    return result.map((doc: any) => ({
      id: doc._id.toString(),
      title: doc.title,
      type: doc.type,
      price: doc.price,
      priceUnit: doc.priceUnit,
      location: doc.location,
      area: doc.area,
      beds: doc.beds,
      baths: doc.baths,
      image: doc.image,
      forRent: doc.forRent,
      featured: doc.featured
    }));
  } catch (error) {
    console.error("Error fetching featured properties:", error);
    throw error;
  }
};

// Function to get rental properties
export const getRentalProperties = async (): Promise<PropertyType[]> => {
  try {
    const result = await Property.find({ forRent: true }).lean();
    return result.map((doc: any) => ({
      id: doc._id.toString(),
      title: doc.title,
      type: doc.type,
      price: doc.price,
      priceUnit: doc.priceUnit,
      location: doc.location,
      area: doc.area,
      beds: doc.beds,
      baths: doc.baths,
      image: doc.image,
      forRent: doc.forRent,
      featured: doc.featured
    }));
  } catch (error) {
    console.error("Error fetching rental properties:", error);
    throw error;
  }
};

// Function to get property by ID
export const getPropertyById = async (id: string): Promise<PropertyType | null> => {
  try {
    const doc = await Property.findById(id).lean();
    if (!doc) return null;
    
    return {
      id: doc._id.toString(),
      title: doc.title,
      type: doc.type,
      price: doc.price,
      priceUnit: doc.priceUnit,
      location: doc.location,
      area: doc.area,
      beds: doc.beds,
      baths: doc.baths,
      image: doc.image,
      forRent: doc.forRent,
      featured: doc.featured
    };
  } catch (error) {
    console.error(`Error fetching property ${id}:`, error);
    throw error;
  }
};

// Function to create a new property
export const createProperty = async (propertyData: Omit<PropertyType, "id">): Promise<PropertyType> => {
  try {
    const newProperty = new Property(propertyData);
    const saved = await newProperty.save();
    
    return {
      id: saved._id.toString(),
      title: saved.title,
      type: saved.type,
      price: saved.price,
      priceUnit: saved.priceUnit,
      location: saved.location,
      area: saved.area,
      beds: saved.beds,
      baths: saved.baths,
      image: saved.image,
      forRent: saved.forRent,
      featured: saved.featured
    };
  } catch (error) {
    console.error("Error creating property:", error);
    throw error;
  }
};
