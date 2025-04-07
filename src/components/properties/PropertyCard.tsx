
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, MapPin, Home, Maximize2, IndianRupee, BedDouble, Bath } from "lucide-react";

export type PropertyType = "apartment" | "house" | "villa" | "plot";

export interface Property {
  id: string;
  title: string;
  type: PropertyType;
  price: number;
  priceUnit: "lakh" | "crore";
  location: string;
  area: number;
  beds?: number;
  baths?: number;
  image: string;
  forRent?: boolean;
  featured?: boolean;
}

interface PropertyCardProps {
  property: Property;
}

const formatPrice = (price: number, unit: "lakh" | "crore"): string => {
  if (unit === "lakh") {
    return `${price} L`;
  } else {
    return `${price} Cr`;
  }
};

const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg property-card-shadow">
      <div className="relative">
        <Link to={`/property/${property.id}`}>
          <img 
            src={property.image} 
            alt={property.title} 
            className="h-48 w-full object-cover object-center"
          />
        </Link>
        
        <div className="absolute top-3 left-3 flex gap-2">
          {property.featured && (
            <Badge className="bg-orange text-white">Featured</Badge>
          )}
          <Badge className={property.forRent ? "bg-teal text-white" : "bg-primary text-white"}>
            {property.forRent ? "For Rent" : "For Sale"}
          </Badge>
        </div>
        
        <Button 
          variant="outline" 
          size="icon" 
          className="absolute top-3 right-3 bg-white hover:bg-white/90 rounded-full w-8 h-8"
        >
          <Heart className="h-4 w-4 text-orange" />
        </Button>
      </div>
      
      <CardContent className="p-4">
        <div className="mb-1 flex items-center gap-1 text-muted-foreground text-sm">
          <MapPin className="h-3.5 w-3.5" />
          <span className="truncate">{property.location}</span>
        </div>
        
        <Link to={`/property/${property.id}`} className="hover:underline">
          <h3 className="font-semibold text-lg mb-2 line-clamp-1">{property.title}</h3>
        </Link>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-primary font-bold text-lg">
            <IndianRupee className="h-4 w-4" />
            <span>{formatPrice(property.price, property.priceUnit)}</span>
          </div>
          
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Home className="h-3.5 w-3.5" />
            <span>{property.type}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between text-sm border-t pt-3">
          {property.beds && (
            <div className="flex items-center gap-1">
              <BedDouble className="h-4 w-4 text-gray-500" />
              <span>{property.beds} Beds</span>
            </div>
          )}
          
          {property.baths && (
            <div className="flex items-center gap-1">
              <Bath className="h-4 w-4 text-gray-500" />
              <span>{property.baths} Baths</span>
            </div>
          )}
          
          <div className="flex items-center gap-1">
            <Maximize2 className="h-4 w-4 text-gray-500" />
            <span>{property.area} sq.ft</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
