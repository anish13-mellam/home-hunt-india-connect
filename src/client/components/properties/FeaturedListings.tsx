
import React from "react";
import PropertyCard, { Property } from "@/client/components/properties/PropertyCard";
import { Button } from "@/client/components/ui/button";
import { Link } from "react-router-dom";

interface FeaturedListingsProps {
  title: string;
  subtitle: string;
  properties: Property[];
  viewAllLink?: string;
}

const FeaturedListings = ({
  title,
  subtitle,
  properties,
  viewAllLink = "/search"
}: FeaturedListingsProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">{title}</h2>
            <p className="text-muted-foreground">{subtitle}</p>
          </div>
          <Link to={viewAllLink} className="mt-4 md:mt-0">
            <Button variant="outline">View All</Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.slice(0, 6).map((property) => (
            <PropertyCard 
              key={property.id} 
              property={property}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
