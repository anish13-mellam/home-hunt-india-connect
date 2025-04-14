
import React, { useState, useEffect } from "react";
import Layout from "@/client/components/layout/Layout";
import { useParams } from "react-router-dom";
import { featuredProperties, rentalProperties } from "@/client/data/mockData";
import { Badge } from "@/client/components/ui/badge";
import { Button } from "@/client/components/ui/button";
import { Separator } from "@/client/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/client/components/ui/carousel";
import { Card } from "@/client/components/ui/card";
import {
  MapPin,
  Home,
  Maximize2,
  IndianRupee,
  BedDouble,
  Bath,
  Calendar,
  User,
  Check,
  Phone,
  Mail,
  Share2,
  Heart,
  ArrowLeft,
} from "lucide-react";
import { mockAgentProfile } from "@/client/data/mockUsers";
import { Link } from "react-router-dom";
import { useToast } from "@/client/hooks/use-toast";

const PropertyDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const [isFavorite, setIsFavorite] = useState(false);
  
  // Find property from both featured and rental properties
  const property = [...featuredProperties, ...rentalProperties].find(
    (p) => p.id === id
  );

  // Load favorites from localStorage
  useEffect(() => {
    if (property) {
      const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
      setIsFavorite(favorites.includes(property.id));
    }
  }, [property]);

  if (!property) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center mb-8">
            <Link to="/" className="flex items-center text-primary hover:underline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </div>
          <div className="text-center py-20">
            <h1 className="text-3xl font-bold mb-4">Property Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The property you are looking for does not exist or has been removed.
            </p>
            <Link to="/featured-properties">
              <Button>Browse Featured Properties</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  // Format price display
  const formattedPrice = property.forRent && property.rentAmount && property.rentPeriod
    ? `₹${property.rentAmount?.toLocaleString()}/${property.rentPeriod}`
    : property.priceUnit === "lakh"
      ? `₹${property.price} Lakh`
      : `₹${property.price} Cr`;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: property.title,
        text: `Check out this property: ${property.title}`,
        url: window.location.href,
      }).catch(err => {
        toast({
          title: "Failed to share",
          description: "Could not share the property"
        });
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied",
        description: "Property link copied to clipboard"
      });
    }
  };

  const handleSaveProperty = () => {
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

  // Mock images for the property carousel
  const propertyImages = [
    property.image,
    "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
    "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg",
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs and back button */}
        <div className="flex items-center justify-between mb-8">
          <Link to="/" className="flex items-center text-primary hover:underline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <div className="flex space-x-4">
            <Button variant="outline" onClick={handleShare} className="flex items-center">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button 
              variant="outline" 
              onClick={handleSaveProperty} 
              className={`flex items-center ${isFavorite ? "text-red-500" : ""}`}
            >
              <Heart className={`h-4 w-4 mr-2 ${isFavorite ? "fill-current" : ""}`} />
              {isFavorite ? "Saved" : "Save"}
            </Button>
          </div>
        </div>

        {/* Property Title and Location */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
          <div className="flex items-center text-muted-foreground">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{property.location}</span>
          </div>
        </div>

        {/* Property Image Carousel */}
        <div className="mb-8">
          <Carousel className="w-full">
            <CarouselContent>
              {propertyImages.map((img, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <img 
                        src={img} 
                        alt={`${property.title} - view ${index+1}`} 
                        className="w-full h-[500px] object-cover rounded-md"
                      />
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>

        {/* Property Details and Pricing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="md:col-span-2">
            {/* Property Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge className={property.forRent ? "bg-teal-500" : "bg-primary"}>
                {property.forRent ? "For Rent" : "For Sale"}
              </Badge>
              {property.isFeatured && (
                <Badge variant="outline">Featured</Badge>
              )}
              {property.isNew && (
                <Badge className="bg-green-600">New</Badge>
              )}
              <Badge variant="outline" className="capitalize">{property.type}</Badge>
            </div>

            {/* Property Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="text-muted-foreground">
                This beautiful {property.bedrooms} bedroom {property.type} is located in the heart of {property.location}. 
                With a total area of {property.area} {property.areaUnit}, it offers spacious living spaces, modern amenities,
                and a prime location with excellent connectivity to major landmarks and transportation hubs.
                The property features {property.bathrooms} bathrooms, ample natural lighting, and high-quality finishes throughout.
              </p>
            </div>

            {/* Property Details */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Property Details</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="flex items-center gap-2">
                  <BedDouble className="h-5 w-5 text-muted-foreground" />
                  <span>{property.bedrooms} Bedrooms</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="h-5 w-5 text-muted-foreground" />
                  <span>{property.bathrooms} Bathrooms</span>
                </div>
                <div className="flex items-center gap-2">
                  <Maximize2 className="h-5 w-5 text-muted-foreground" />
                  <span>{property.area} {property.areaUnit}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Home className="h-5 w-5 text-muted-foreground" />
                  <span className="capitalize">{property.type}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <span>Listed on Apr 10, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5 text-muted-foreground" />
                  <span>Listed by Owner</span>
                </div>
              </div>
            </div>

            {/* Features and Amenities */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Features & Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>24/7 Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Swimming Pool</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Gym</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Visitor Parking</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Power Backup</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Club House</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing and Contact Card */}
          <div>
            <Card className="p-6">
              <h2 className="text-2xl font-bold text-primary mb-2">{formattedPrice}</h2>
              <p className="text-sm text-muted-foreground mb-6">
                {property.forRent ? "Monthly Rent" : "Sale Price"}
              </p>
              <Separator className="my-6" />

              {/* Agent Details */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <img 
                    src={mockAgentProfile.avatar} 
                    alt={mockAgentProfile.name} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium">{mockAgentProfile.name}</p>
                    <p className="text-sm text-muted-foreground">{mockAgentProfile.agency}</p>
                    <div className="flex items-center gap-1">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-xs">Verified Agent</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <span>{mockAgentProfile.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <span>{mockAgentProfile.email}</span>
                  </div>
                </div>
              </div>

              <Button className="w-full mb-3">Contact Agent</Button>
              <Button variant="outline" className="w-full">Schedule Visit</Button>
            </Card>
          </div>
        </div>

        {/* Location and Map Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Location</h2>
          <div className="bg-gray-100 h-80 rounded-md flex items-center justify-center">
            <p className="text-muted-foreground">Map view of {property.location}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PropertyDetailsPage;
