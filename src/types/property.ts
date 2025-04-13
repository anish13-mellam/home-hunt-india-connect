
import { Document } from 'mongoose';

export interface PropertyLocation {
  address: string;
  city: string;
  state: string;
  zipCode: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface Property extends Document {
  title: string;
  description: string;
  price: number;
  location: PropertyLocation;
  propertyType: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  isFeatured: boolean;
  isVerified: boolean;
  status: string;
  listingType: string;
  yearBuilt?: number;
  amenities: string[];
  images: string[];
  ownerId?: any;
  createdAt: Date;
  updatedAt: Date;
}
