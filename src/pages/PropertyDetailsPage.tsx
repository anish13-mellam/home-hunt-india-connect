
import React, { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { useParams } from "react-router-dom";
import { featuredProperties } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Building, 
  Phone, 
  Mail, 
  MapPin, 
  Maximize2, 
  BedDouble, 
  Bath,
  Heart,
  Share2,
  Calendar
} from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const PropertyDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const [isFavorite, setIsFavorite] = useState(false);
  
  // Find property from mock data
  const property = featuredProperties.find(p => p.id === id);

  // Load favorites from localStorage
  useEffect(() => {
    if (property) {
      const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
      setIsFavorite(favorites.includes(property.id));
    }
  }, [property]);

  // Toggle favorite status
  const toggleFavorite = () => {
    if (!property) return;
    
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    let updatedFavorites;
    
    if (isFavorite) {
      updatedFavorites = favorites.filter((favId: string) => favId !== property.id);
      toast({
        title: "Removed from favorites",
        description: "Property has been removed from your favorites"
      });
    } else {
      updatedFavorites = [...favorites, property.id];
      toast({
        title: "Added to favorites",
        description: "Property has been added to your favorites"
      });
    }
    
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
  };
  
  if (!property) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-6">Property Not Found</h1>
          <p>The property you are looking for does not exist.</p>
        </div>
      </Layout>
    );
  }
  
  // Get bedrooms and bathrooms values, accounting for different property naming conventions
  const bedroomsValue = property.bedrooms || property.beds || 0;
  const bathroomsValue = property.bathrooms || property.baths || 0;
  
  // Format price based on property data - handling optional properties safely
  const formattedPrice = property.forRent && property.rentAmount && property.rentPeriod
    ? `₹${property.rentAmount}/${property.rentPeriod}`
    : property.priceUnit === "lakh"
      ? `₹${property.price} Lakh`
      : `₹${property.price} Cr`;
      
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Property Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">{property.title}</h1>
            <div className="flex items-center gap-1 mt-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{property.location}</span>
            </div>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col items-end">
            <p className="text-3xl font-bold text-primary">{formattedPrice}</p>
            <div className="flex items-center gap-4 mt-2">
              <Button 
                variant="outline"
                size="sm"
                className={`flex items-center gap-2 ${isFavorite ? 'text-red-500' : ''}`}
                onClick={toggleFavorite}
              >
                <Heart className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} />
                {isFavorite ? 'Saved' : 'Save'}
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>
          </div>
        </div>
        
        {/* Property Images Carousel */}
        <div className="mb-8">
          <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem>
                <div className="overflow-hidden rounded-md h-[400px]">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="overflow-hidden rounded-md h-[400px]">
                  <img 
                    src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070"
                    alt="Property interior"
                    className="w-full h-full object-cover"
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="overflow-hidden rounded-md h-[400px]">
                  <img 
                    src="https://images.unsplash.com/photo-1616137422495-1e9e46e2aa76?q=80&w=2071"
                    alt="Property interior"
                    className="w-full h-full object-cover"
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
        
        {/* Property Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Overview */}
            <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div>
                  <p className="text-muted-foreground text-sm">Property Type</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Building className="h-5 w-5 text-primary" />
                    <span className="font-medium capitalize">{property.type}</span>
                  </div>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Bedrooms</p>
                  <div className="flex items-center gap-2 mt-1">
                    <BedDouble className="h-5 w-5 text-primary" />
                    <span className="font-medium">{bedroomsValue}</span>
                  </div>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Bathrooms</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Bath className="h-5 w-5 text-primary" />
                    <span className="font-medium">{bathroomsValue}</span>
                  </div>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Area</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Maximize2 className="h-5 w-5 text-primary" />
                    <span className="font-medium">{property.area} {property.areaUnit}</span>
                  </div>
                </div>
              </div>
              <Separator className="my-4" />
              <h3 className="text-xl font-semibold mb-3">Description</h3>
              <p className="text-muted-foreground">
                This beautiful {bedroomsValue} bedroom {property.type} in {property.location} offers modern living with elegant finishes. 
                The property boasts spacious rooms, ample natural light, and high-quality fixtures throughout. 
                Located in a prime area with easy access to amenities, schools, and transportation.
              </p>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-3">Features & Amenities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {["Parking", "Swimming Pool", "Garden", "Security", "Gym", "Air Conditioning"].map((amenity) => (
                    <div key={amenity} className="flex items-center gap-2">
                      <Checkbox id={`amenity-${amenity}`} checked />
                      <label htmlFor={`amenity-${amenity}`}>{amenity}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Agent Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border p-6 mb-8 sticky top-20">
              <h3 className="text-xl font-semibold mb-4">Contact Agent</h3>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974" 
                  alt="Agent" 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium">Rahul Sharma</p>
                  <p className="text-sm text-muted-foreground">Premier Properties</p>
                </div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>rahul@premierproperties.com</span>
                </div>
              </div>
              <Button className="w-full mb-3">Contact Agent</Button>
              <Button variant="outline" className="w-full">Schedule Viewing</Button>
              
              <Separator className="my-6" />
              
              <div className="text-sm text-muted-foreground">
                <div className="flex items-center gap-1 mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>Listed on: April 10, 2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>Property ID: {property.id}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PropertyDetailsPage;
