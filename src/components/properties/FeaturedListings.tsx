
import React from "react";
import PropertyCard, { Property } from "./PropertyCard";

interface FeaturedListingsProps {
  title: string;
  subtitle?: string;
  properties: Property[];
}

const FeaturedListings = ({ title, subtitle, properties }: FeaturedListingsProps) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">{title}</h2>
          {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
