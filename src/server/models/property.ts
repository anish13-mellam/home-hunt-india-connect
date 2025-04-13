
import { Property as PropertyType } from "@/client/components/properties/PropertyCard";
import { Property } from "@/server/lib/db";

// Function to get all properties
export const getAllProperties = async (): Promise<PropertyType[]> => {
  try {
    // Fix TypeScript error by using find().lean() without directly chaining exec()
    const result = await Property.find().lean();
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
    // Fix TypeScript error by using find().lean() without directly chaining exec()
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
    // Fix TypeScript error by using find().lean() without directly chaining exec()
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
    // Fix TypeScript error by using findById().lean() without directly chaining exec()
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
      beds: doc.beds || undefined, // Fix property not existing error
      baths: doc.baths || undefined, // Fix property not existing error
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
    const newProperty = new Property({
      title: propertyData.title,
      type: propertyData.type,
      price: propertyData.price,
      priceUnit: propertyData.priceUnit,
      location: propertyData.location,
      area: propertyData.area,
      beds: propertyData.beds, // This is now valid since we defined it in the schema
      baths: propertyData.baths, // This is now valid since we defined it in the schema
      image: propertyData.image,
      forRent: propertyData.forRent,
      featured: propertyData.featured
    });
    
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
