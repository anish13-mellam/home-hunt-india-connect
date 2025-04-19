
import React, { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Property } from "@/components/properties/PropertyCard";
import { rentalProperties } from "@/data/mockData";
import PropertySearchResults from "@/components/search/PropertySearchResults";
import { Home } from "lucide-react";

const RentPage = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Use rental properties
    setProperties(rentalProperties);
    setLoading(false);
  }, []);
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-2 mb-6">
          <Home className="h-6 w-6 text-orange" />
          <h1 className="text-2xl md:text-3xl font-bold">Rental Properties</h1>
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

export default RentPage;
