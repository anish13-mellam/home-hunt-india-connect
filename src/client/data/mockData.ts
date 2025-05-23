
// Mock data for properties, cities, and other content

export interface City {
  name: string;
  properties: number;
  image: string;
}

export const featuredProperties = [
  {
    id: "prop-1",
    title: "Luxury 3 BHK Apartment",
    location: "Bandra West, Mumbai",
    price: 2.5,
    priceUnit: "crore" as const,
    bedrooms: 3,
    bathrooms: 2,
    area: 1850,
    areaUnit: "sqft" as const,
    type: "apartment" as const,
    forRent: false,
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    isFeatured: true
  },
  {
    id: "prop-2",
    title: "Modern 2 BHK with Sea View",
    location: "Worli, Mumbai",
    price: 1.8,
    priceUnit: "crore" as const,
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    areaUnit: "sqft" as const,
    type: "apartment" as const,
    forRent: false,
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    isFeatured: true,
    isNew: true
  },
  {
    id: "prop-3",
    title: "Spacious 4 BHK Villa",
    location: "Koramangala, Bangalore",
    price: 3.2,
    priceUnit: "crore" as const,
    bedrooms: 4,
    bathrooms: 4,
    area: 3200,
    areaUnit: "sqft" as const,
    type: "villa" as const,
    forRent: false,
    image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    isFeatured: true
  },
  {
    id: "prop-4",
    title: "Elegant 3 BHK House",
    location: "HSR Layout, Bangalore",
    price: 95,
    priceUnit: "lakh" as const,
    bedrooms: 3,
    bathrooms: 3,
    area: 1800,
    areaUnit: "sqft" as const,
    type: "house" as const,
    forRent: false,
    image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "prop-5",
    title: "Prime Commercial Plot",
    location: "Whitefield, Bangalore",
    price: 1.5,
    priceUnit: "crore" as const,
    bedrooms: 0,
    bathrooms: 0,
    area: 5000,
    areaUnit: "sqft" as const,
    type: "plot" as const,
    forRent: false,
    image: "https://images.pexels.com/photos/7031406/pexels-photo-7031406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    isFeatured: true
  },
  {
    id: "prop-6",
    title: "Designer 2 BHK Flat",
    location: "Indira Nagar, Bangalore",
    price: 85,
    priceUnit: "lakh" as const,
    bedrooms: 2,
    bathrooms: 2,
    area: 1100,
    areaUnit: "sqft" as const,
    type: "apartment" as const,
    forRent: false,
    image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    isNew: true
  },
  {
    id: "prop-7",
    title: "Premium 3 BHK Apartment",
    location: "Golf Course Road, Gurgaon",
    price: 1.8,
    priceUnit: "crore" as const,
    bedrooms: 3,
    bathrooms: 3,
    area: 2100,
    areaUnit: "sqft" as const,
    type: "apartment" as const,
    forRent: false,
    image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "prop-8",
    title: "Garden View 3 BHK House",
    location: "Aundh, Pune",
    price: 1.2,
    priceUnit: "crore" as const,
    bedrooms: 3,
    bathrooms: 3,
    area: 1750,
    areaUnit: "sqft" as const,
    type: "house" as const,
    forRent: false,
    image: "https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "prop-9",
    title: "Luxury Villa in Banjara Hills",
    location: "Banjara Hills, Hyderabad",
    price: 4.5,
    priceUnit: "crore" as const,
    bedrooms: 5,
    bathrooms: 5,
    area: 4500,
    areaUnit: "sqft" as const,
    type: "villa" as const,
    forRent: false,
    image: "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    isFeatured: true
  },
  {
    id: "prop-10",
    title: "Modern Apartment in Gachibowli",
    location: "Gachibowli, Hyderabad",
    price: 1.8,
    priceUnit: "crore" as const,
    bedrooms: 3,
    bathrooms: 3,
    area: 2200,
    areaUnit: "sqft" as const,
    type: "apartment" as const,
    forRent: false,
    image: "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "prop-11",
    title: "Premium 4 BHK Villa",
    location: "Jubilee Hills, Hyderabad",
    price: 5.2,
    priceUnit: "crore" as const,
    bedrooms: 4,
    bathrooms: 4,
    area: 3800,
    areaUnit: "sqft" as const,
    type: "villa" as const,
    forRent: false,
    image: "https://images.pexels.com/photos/532016/pexels-photo-532016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "prop-12",
    title: "Sea View Apartment",
    location: "Adyar, Chennai",
    price: 1.7,
    priceUnit: "crore" as const,
    bedrooms: 3,
    bathrooms: 3,
    area: 1850,
    areaUnit: "sqft" as const,
    type: "apartment" as const,
    forRent: false,
    image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    isFeatured: true
  },
  {
    id: "prop-13",
    title: "Luxury Villa in ECR",
    location: "ECR, Chennai",
    price: 3.9,
    priceUnit: "crore" as const,
    bedrooms: 4,
    bathrooms: 4,
    area: 3200,
    areaUnit: "sqft" as const,
    type: "villa" as const,
    forRent: false,
    image: "https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

export const rentalProperties = [
  {
    id: "rent-1",
    title: "Furnished 2 BHK Apartment",
    location: "Powai, Mumbai",
    price: 45,
    priceUnit: "lakh" as const,
    rentAmount: 55000,
    rentPeriod: "month" as const,
    bedrooms: 2,
    bathrooms: 2,
    area: 1050,
    areaUnit: "sqft" as const,
    type: "apartment" as const,
    forRent: true,
    image: "https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    isFeatured: true
  },
  {
    id: "rent-2",
    title: "Spacious 3 BHK for Rent",
    location: "Koramangala, Bangalore",
    price: 75,
    priceUnit: "lakh" as const,
    rentAmount: 45000,
    rentPeriod: "month" as const,
    bedrooms: 3,
    bathrooms: 2,
    area: 1650,
    areaUnit: "sqft" as const,
    type: "apartment" as const,
    forRent: true,
    image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "rent-3",
    title: "Modern 4 BHK Villa",
    location: "Whitefield, Bangalore",
    price: 3.5,
    priceUnit: "crore" as const,
    rentAmount: 85000,
    rentPeriod: "month" as const,
    bedrooms: 4,
    bathrooms: 4,
    area: 3500,
    areaUnit: "sqft" as const,
    type: "villa" as const,
    forRent: true,
    image: "https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    isFeatured: true,
    isNew: true
  },
  {
    id: "rent-4",
    title: "Cozy 1 BHK Apartment",
    location: "Andheri East, Mumbai",
    price: 35,
    priceUnit: "lakh" as const,
    rentAmount: 25000,
    rentPeriod: "month" as const,
    bedrooms: 1,
    bathrooms: 1,
    area: 650,
    areaUnit: "sqft" as const,
    type: "apartment" as const,
    forRent: true,
    image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "rent-5",
    title: "Luxury 3 BHK Apartment",
    location: "DLF Phase 5, Gurgaon",
    price: 1.5,
    priceUnit: "crore" as const,
    rentAmount: 65000,
    rentPeriod: "month" as const,
    bedrooms: 3,
    bathrooms: 3,
    area: 2200,
    areaUnit: "sqft" as const,
    type: "apartment" as const,
    forRent: true,
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    isFeatured: true
  },
  {
    id: "rent-6",
    title: "Semi-Furnished 2 BHK",
    location: "Electronic City, Bangalore",
    price: 55,
    priceUnit: "lakh" as const,
    rentAmount: 22000,
    rentPeriod: "month" as const,
    bedrooms: 2,
    bathrooms: 2,
    area: 1100,
    areaUnit: "sqft" as const,
    type: "apartment" as const,
    forRent: true,
    image: "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "rent-7",
    title: "Luxury Apartment in Hitec City",
    location: "Hitec City, Hyderabad",
    price: 1.2,
    priceUnit: "crore" as const,
    rentAmount: 48000,
    rentPeriod: "month" as const,
    bedrooms: 3,
    bathrooms: 3,
    area: 1750,
    areaUnit: "sqft" as const,
    type: "apartment" as const,
    forRent: true,
    image: "https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    isFeatured: true
  },
  {
    id: "rent-8",
    title: "Modern Villa in Banjara Hills",
    location: "Banjara Hills, Hyderabad",
    price: 2.5,
    priceUnit: "crore" as const,
    rentAmount: 95000,
    rentPeriod: "month" as const,
    bedrooms: 4,
    bathrooms: 4,
    area: 3000,
    areaUnit: "sqft" as const,
    type: "villa" as const,
    forRent: true,
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "rent-9",
    title: "Sea-facing Apartment",
    location: "Besant Nagar, Chennai",
    price: 1.1,
    priceUnit: "crore" as const,
    rentAmount: 52000,
    rentPeriod: "month" as const,
    bedrooms: 3,
    bathrooms: 2,
    area: 1600,
    areaUnit: "sqft" as const,
    type: "apartment" as const,
    forRent: true,
    image: "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    isFeatured: true
  },
  {
    id: "rent-10",
    title: "Premium Villa in ECR",
    location: "ECR, Chennai",
    price: 2.7,
    priceUnit: "crore" as const,
    rentAmount: 78000,
    rentPeriod: "month" as const,
    bedrooms: 4,
    bathrooms: 4,
    area: 2800,
    areaUnit: "sqft" as const,
    type: "villa" as const,
    forRent: true,
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

export const popularCities: City[] = [
  {
    name: "Mumbai",
    properties: 1245,
    image: "https://images.pexels.com/photos/2846217/pexels-photo-2846217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Delhi",
    properties: 980,
    image: "https://images.pexels.com/photos/1485894/pexels-photo-1485894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Bangalore",
    properties: 1395,
    image: "https://images.pexels.com/photos/14024561/pexels-photo-14024561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Hyderabad",
    properties: 865,
    image: "https://images.pexels.com/photos/11797117/pexels-photo-11797117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Chennai",
    properties: 742,
    image: "https://images.pexels.com/photos/10143953/pexels-photo-10143953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Pune",
    properties: 689,
    image: "https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];
