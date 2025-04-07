
import { Property } from "@/components/properties/PropertyCard";

export const featuredProperties: Property[] = [
  {
    id: "1",
    title: "Premium 3BHK Apartment with Sea View",
    type: "apartment",
    price: 1.8,
    priceUnit: "crore",
    location: "Bandra West, Mumbai",
    area: 1450,
    beds: 3,
    baths: 2,
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80",
    featured: true
  },
  {
    id: "2",
    title: "Modern 2BHK with Garden Access",
    type: "apartment",
    price: 85,
    priceUnit: "lakh",
    location: "Koramangala, Bangalore",
    area: 1050,
    beds: 2,
    baths: 2,
    image: "https://images.unsplash.com/photo-1622866306950-81d17097d458?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80"
  },
  {
    id: "3",
    title: "Spacious 4BHK Villa with Pool",
    type: "villa",
    price: 3.5,
    priceUnit: "crore",
    location: "Jubilee Hills, Hyderabad",
    area: 3200,
    beds: 4,
    baths: 4,
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80",
    featured: true
  },
  {
    id: "4",
    title: "Luxury 3BHK Penthouse",
    type: "apartment",
    price: 2.2,
    priceUnit: "crore",
    location: "Golf Course Road, Gurgaon",
    area: 2100,
    beds: 3,
    baths: 3,
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80"
  }
];

export const rentalProperties: Property[] = [
  {
    id: "5",
    title: "Furnished 2BHK Apartment",
    type: "apartment",
    price: 35000,
    priceUnit: "lakh", // We'll handle this differently in the UI
    location: "Indiranagar, Bangalore",
    area: 1120,
    beds: 2,
    baths: 2,
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80",
    forRent: true
  },
  {
    id: "6",
    title: "Modern 1BHK Studio Apartment",
    type: "apartment",
    price: 18000,
    priceUnit: "lakh", // We'll handle this differently in the UI
    location: "Andheri East, Mumbai",
    area: 650,
    beds: 1,
    baths: 1,
    image: "https://images.unsplash.com/photo-1594484208280-efa00f96fc21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80",
    forRent: true
  },
  {
    id: "7",
    title: "Luxury 3BHK with Terrace",
    type: "apartment",
    price: 65000,
    priceUnit: "lakh", // We'll handle this differently in the UI
    location: "Vasant Vihar, Delhi",
    area: 1800,
    beds: 3,
    baths: 3,
    image: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80",
    forRent: true,
    featured: true
  },
  {
    id: "8",
    title: "Semi-Furnished 2BHK House",
    type: "house",
    price: 42000,
    priceUnit: "lakh", // We'll handle this differently in the UI
    location: "Adyar, Chennai",
    area: 1400,
    beds: 2,
    baths: 2,
    image: "https://images.unsplash.com/photo-1605146768851-eda79da39897?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80",
    forRent: true
  }
];

export const popularCities = [
  { name: "Mumbai", properties: 5834, image: "https://images.unsplash.com/photo-1562979314-bee7453e911c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80" },
  { name: "Delhi", properties: 4278, image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80" },
  { name: "Bangalore", properties: 6103, image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80" },
  { name: "Chennai", properties: 3189, image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80" },
  { name: "Hyderabad", properties: 4560, image: "https://images.unsplash.com/photo-1575010655566-b3713ebd4243?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80" },
  { name: "Pune", properties: 3876, image: "https://images.unsplash.com/photo-1624562563808-168480421459?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80" }
];

export const propertyTypes = [
  { name: "Apartments", count: 12543, icon: "apartment" },
  { name: "Houses", count: 8765, icon: "house" },
  { name: "Villas", count: 3241, icon: "villa" },
  { name: "Plots", count: 5632, icon: "plot" }
];

export const agents = [
  {
    id: "1",
    name: "Priya Sharma",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80",
    rating: 4.8,
    reviews: 42,
    properties: 24,
    location: "Mumbai, Maharashtra",
    specialization: "Luxury Apartments"
  },
  {
    id: "2",
    name: "Rajiv Malhotra",
    photo: "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80",
    rating: 4.6,
    reviews: 35,
    properties: 31,
    location: "Bangalore, Karnataka",
    specialization: "Residential Properties"
  },
  {
    id: "3",
    name: "Ananya Patel",
    photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80",
    rating: 4.9,
    reviews: 56,
    properties: 19,
    location: "Delhi NCR",
    specialization: "Premium Properties"
  }
];
