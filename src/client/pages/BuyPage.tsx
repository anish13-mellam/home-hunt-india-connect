
import React, { useState, useEffect } from "react";
import Layout from "@/client/components/layout/Layout";
import { Property } from "@/client/components/properties/PropertyCard";
import { featuredProperties } from "@/client/data/mockData";
import PropertySearchResults from "@/client/components/search/PropertySearchResults";
import { Building } from "lucide-react";

const BuyPage = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Filter only properties for sale
    const propertiesForSale = featuredProperties.filter(property => !property.forRent);
    setProperties(propertiesForSale);
    setLoading(false);
  }, []);
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-2 mb-6">
          <Building className="h-6 w-6 text-orange" />
          <h1 className="text-2xl md:text-3xl font-bold">Properties for Sale</h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            {/* Filter sidebar can be added here in the future */}
            <div className="bg-muted/50 p-4 rounded-lg">
              <h2 className="font-semibold mb-2">Quick Filters</h2>
              <p className="text-sm text-muted-foreground">
                Filter options will be available soon.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <PropertySearchResults 
              properties={properties}
              loading={loading}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BuyPage;
