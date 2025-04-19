
import React from "react";
import Layout from "@/components/layout/Layout";
import { Property } from "@/components/properties/PropertyCard";
import { featuredProperties } from "@/data/mockData";
import PropertySearchResults from "@/components/search/PropertySearchResults";
import { Star } from "lucide-react";

const FeaturedPropertiesPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-2 mb-6">
          <Star className="h-6 w-6 text-orange" />
          <h1 className="text-2xl md:text-3xl font-bold">Featured Properties</h1>
        </div>
        
        <p className="text-lg text-muted-foreground mb-8">
          Discover our handpicked selection of premium properties from across India
        </p>
        
        <PropertySearchResults 
          properties={featuredProperties}
          loading={false}
        />
      </div>
    </Layout>
  );
};

export default FeaturedPropertiesPage;
