
import React from "react";
import { Link } from "react-router-dom";
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader
} from "@/client/components/ui/card";
import { Badge } from "@/client/components/ui/badge";
import { Heart } from "lucide-react";
import { Button } from "@/client/components/ui/button";

export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  priceUnit: "lakh" | "crore";
  bedrooms: number;
  bathrooms: number;
  area: number;
  areaUnit: "sqft";
  type: "apartment" | "house" | "villa" | "plot";
  forRent?: boolean;
  rentAmount?: number;
  rentPeriod?: "month";
  image: string;
  isFeatured?: boolean;
  isNew?: boolean;
}

interface PropertyCardProps {
  property: Property;
  onFavoriteToggle?: (id: string) => void;
  isFavorite?: boolean;
}

const PropertyCard = ({ property, onFavoriteToggle, isFavorite = false }: PropertyCardProps) => {
  const formattedPrice = property.forRent
    ? `₹${property.rentAmount?.toLocaleString()}/${property.rentPeriod}`
    : property.priceUnit === "lakh"
      ? `₹${property.price} Lakh`
      : `₹${property.price} Cr`;
      
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative">
        <Link to={`/property/${property.id}`}>
          <img 
            src={property.image} 
            alt={property.title} 
            className="w-full h-56 object-cover"
          />
        </Link>
        
        <div className="absolute top-4 left-4 flex gap-2">
          {property.isFeatured && (
            <Badge className="bg-primary">Featured</Badge>
          )}
          {property.isNew && (
            <Badge className="bg-green-600">New</Badge>
          )}
          {property.forRent && (
            <Badge variant="outline" className="bg-white">For Rent</Badge>
          )}
          {!property.forRent && (
            <Badge variant="outline" className="bg-white">For Sale</Badge>
          )}
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          className={`absolute top-4 right-4 rounded-full bg-white/80 hover:bg-white ${
            isFavorite ? "text-red-500" : "text-gray-600"
          }`}
          onClick={() => onFavoriteToggle && onFavoriteToggle(property.id)}
        >
          <Heart className={`h-5 w-5 ${isFavorite ? "fill-current" : ""}`} />
        </Button>
      </div>
      
      <CardHeader className="py-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-xl line-clamp-1">
              <Link to={`/property/${property.id}`} className="hover:text-primary">
                {property.title}
              </Link>
            </h3>
            <p className="text-muted-foreground">{property.location}</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold text-primary">{formattedPrice}</p>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="py-2">
        <div className="flex justify-between border-t border-b py-2 text-sm text-muted-foreground">
          <div>{property.bedrooms} Beds</div>
          <div>{property.bathrooms} Baths</div>
          <div>{property.area} {property.areaUnit}</div>
          <div className="capitalize">{property.type}</div>
        </div>
      </CardContent>
      
      <CardFooter className="py-4">
        <Link to={`/property/${property.id}`} className="w-full">
          <Button variant="outline" className="w-full">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
