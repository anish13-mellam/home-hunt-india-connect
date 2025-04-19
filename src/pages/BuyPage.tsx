
import React, { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Property } from "@/components/properties/PropertyCard";
import { featuredProperties } from "@/data/mockData";
import PropertySearchResults from "@/components/search/PropertySearchResults";
import { Building } from "lucide-react";
import QuickFilters from "@/components/search/QuickFilters";

const BuyPage = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    priceRange: "all",
    propertyType: "all",
    bedrooms: "all"
  });
  
  useEffect(() => {
    // Filter only properties for sale
    const propertiesForSale = featuredProperties.filter(property => !property.forRent);
    setProperties(propertiesForSale);
    setLoading(false);
  }, []);

  const filteredProperties = properties.filter(property => {
    if (filters.propertyType !== "all" && property.type !== filters.propertyType) return false;
    if (filters.bedrooms !== "all" && property.beds !== parseInt(filters.bedrooms)) return false;
    if (filters.priceRange !== "all") {
      const price = property.priceUnit === "crore" ? property.price * 100 : property.price;
      switch (filters.priceRange) {
        case "0-25":
          return price <= 25;
        case "25-50":
          return price > 25 && price <= 50;
        case "50-75":
          return price > 50 && price <= 75;
        case "75+":
          return price > 75;
        default:
          return true;
      }
    }
    return true;
  });
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-2 mb-6">
          <Building className="h-6 w-6 text-orange" />
          <h1 className="text-2xl md:text-3xl font-bold">Properties for Sale</h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <QuickFilters 
              filters={filters}
              setFilters={setFilters}
              forRent={false}
            />
          </div>
          
          <div className="lg:col-span-3">
            <PropertySearchResults 
              properties={filteredProperties}
              loading={loading}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BuyPage;
