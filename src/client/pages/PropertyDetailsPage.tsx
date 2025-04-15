import React, { useState, useEffect } from "react";
import Layout from "@/client/components/layout/Layout";
import { useParams } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/client/components/ui/carousel";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/client/components/ui/tabs";
import { Button } from "@/client/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/client/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/client/components/ui/card";
import { Bed, Bath, Square, Heart, Share2, MapPin, Phone, Mail, CheckCircle2 } from "lucide-react";
import { featuredProperties, rentalProperties } from "@/client/data/mockData";

const PropertyDetailsPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Simulate API call to fetch property details
    const fetchProperty = () => {
      setLoading(true);
      setTimeout(() => {
        // Find property in either featured or rental properties
        const foundProperty = 
          [...featuredProperties, ...rentalProperties].find(p => p.id === id);
        
        if (foundProperty) {
          setProperty(foundProperty);
          // For demo purposes, randomly determine if property is in favorites
          setIsFavorite(Math.random() > 0.5);
        }
        setLoading(false);
      }, 500);
    };

    fetchProperty();
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8 flex justify-center items-center h-96">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </Layout>
    );
  }

  if (!property) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-4">Property Not Found</h1>
          <p>The property you are looking for might have been removed or doesn't exist.</p>
        </div>
      </Layout>
    );
  }

  // Features list
  const features = [
    { icon: <CheckCircle2 className="h-5 w-5" />, text: "Air Conditioning" },
    { icon: <CheckCircle2 className="h-5 w-5" />, text: "Balcony" },
    { icon: <CheckCircle2 className="h-5 w-5" />, text: "Modular Kitchen" },
    { icon: <CheckCircle2 className="h-5 w-5" />, text: "24x7 Security" },
    { icon: <CheckCircle2 className="h-5 w-5" />, text: "Swimming Pool" },
    { icon: <CheckCircle2 className="h-5 w-5" />, text: "Garden" },
    { icon: <CheckCircle2 className="h-5 w-5" />, text: "Reserved Parking" },
    { icon: <CheckCircle2 className="h-5 w-5" />, text: "Power Backup" },
  ];

  // Sample property images
  const propertyImages = [
    property.image,
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  ];

  // Nearby properties - for demo, just using other properties
  const nearbyProperties = 
    [...featuredProperties, ...rentalProperties]
      .filter(p => p.id !== property.id)
      .slice(0, 3);

  // Access bedrooms and bathrooms safely, using either property naming convention
  const bedroomsValue = property.bedrooms || (property as any).beds || 0;
  const bathroomsValue = property.bathrooms || (property as any).baths || 0;
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Remove breadcrumb section and continue with rest of the component */}
        
        {/* Header Section */}
        <div className="flex justify-between items-start mb-6 flex-wrap gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
            <div className="flex items-center text-gray-600">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{property.location}</span>
            </div>
          </div>
          
          <div className="flex flex-col items-end">
            <div className="text-3xl font-bold text-primary mb-1">
              ₹{property.price} {property.priceUnit}
              {property.forRent && <span className="text-base font-normal text-gray-600">/month</span>}
            </div>
            <div className="text-sm text-gray-600">
              {property.area} {property.areaUnit} | ₹{Math.round(property.price * 100000 / property.area)} per {property.areaUnit}
            </div>
          </div>
        </div>
        
        {/* Property Images Carousel */}
        <div className="mb-8">
          <Carousel className="w-full">
            <CarouselContent>
              {propertyImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <div className="overflow-hidden rounded-xl">
                      <AspectRatio ratio={16 / 9}>
                        <img
                          src={image}
                          alt={`Property view ${index + 1}`}
                          className="w-full object-cover"
                        />
                      </AspectRatio>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        
        {/* Property Overview & Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            {/* Quick Info */}
            <div className="flex flex-wrap gap-6 mb-8 p-4 bg-muted rounded-lg">
              <div className="flex items-center">
                <Bed className="text-primary mr-2 h-5 w-5" />
                <div>
                  <div className="text-sm text-gray-600">Bedrooms</div>
                  <div className="font-semibold">{bedroomsValue}</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <Bath className="text-primary mr-2 h-5 w-5" />
                <div>
                  <div className="text-sm text-gray-600">Bathrooms</div>
                  <div className="font-semibold">{bathroomsValue}</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <Square className="text-primary mr-2 h-5 w-5" />
                <div>
                  <div className="text-sm text-gray-600">Area</div>
                  <div className="font-semibold">{property.area} {property.areaUnit}</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="rounded-full bg-primary/10 p-1 mr-2">
                  <CheckCircle2 className="text-primary h-4 w-4" />
                </div>
                <div>
                  <div className="text-sm text-gray-600">Type</div>
                  <div className="font-semibold capitalize">{property.type}</div>
                </div>
              </div>
            </div>
            
            {/* Tabs for Description, Features, etc. */}
            <Tabs defaultValue="description">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="location">Location</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="mb-6">
                <h3 className="text-xl font-semibold mb-4">About this property</h3>
                <p className="text-gray-600 mb-4">
                  This stunning {property.type} is located in the heart of {property.location}, offering comfortable living spaces with modern amenities. With {bedroomsValue} bedrooms and {bathroomsValue} bathrooms, this {property.area} {property.areaUnit} property is perfect for families looking for a spacious home in a prime location.
                </p>
                <p className="text-gray-600">
                  The property features large windows allowing ample natural light, a modern kitchen with high-end appliances, and a spacious living room perfect for entertaining. The master bedroom includes an en-suite bathroom and walk-in closet. Additional features include central air conditioning, high-speed internet connectivity, and 24/7 security.
                </p>
              </TabsContent>
              
              <TabsContent value="features" className="mb-6">
                <h3 className="text-xl font-semibold mb-4">Property Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="text-primary mr-2">{feature.icon}</div>
                      <span>{feature.text}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="location" className="mb-6">
                <h3 className="text-xl font-semibold mb-4">Location</h3>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                  <p className="text-muted-foreground">Map View (Integration needed)</p>
                </div>
                <p className="text-gray-600 mb-4">
                  Located in {property.location}, this property offers excellent connectivity and is close to various amenities:
                </p>
                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                  <li>5 mins to nearest metro station</li>
                  <li>10 mins to shopping mall</li>
                  <li>15 mins to airport</li>
                  <li>Walking distance to schools and hospitals</li>
                </ul>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Sidebar: Contact Agent & Actions */}
          <div>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Contact Agent</CardTitle>
                <CardDescription>Get in touch with our property expert</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 mr-3">
                    <AvatarImage src="https://github.com/shadcn.png" alt="Agent" />
                    <AvatarFallback>AG</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">Rahul Sharma</h4>
                    <p className="text-sm text-gray-600">Property Specialist</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <Button variant="default" className="w-full">
                    <Phone className="h-4 w-4 mr-2" /> Call Agent
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Mail className="h-4 w-4 mr-2" /> Email Agent
                  </Button>
                  <Button 
                    variant={isFavorite ? "default" : "outline"} 
                    className={`w-full ${isFavorite ? 'bg-primary/10 text-primary' : ''}`}
                    onClick={() => setIsFavorite(!isFavorite)}
                  >
                    <Heart className={`h-4 w-4 mr-2 ${isFavorite ? 'fill-primary' : ''}`} /> 
                    {isFavorite ? 'Saved to Favorites' : 'Save to Favorites'}
                  </Button>
                  <Button variant="ghost" className="w-full">
                    <Share2 className="h-4 w-4 mr-2" /> Share
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Property Details Card */}
            <Card>
              <CardHeader>
                <CardTitle>Property Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Property ID</span>
                  <span className="font-medium">{property.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Property Type</span>
                  <span className="font-medium capitalize">{property.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status</span>
                  <span className="font-medium">{property.forRent ? 'For Rent' : 'For Sale'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Year Built</span>
                  <span className="font-medium">2020</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Similar Properties */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Nearby Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {nearbyProperties.map((nearbyProperty) => (
              <Card key={nearbyProperty.id} className="overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src={nearbyProperty.image} 
                    alt={nearbyProperty.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold truncate">{nearbyProperty.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{nearbyProperty.location}</p>
                  <div className="flex justify-between items-end">
                    <div className="text-primary font-semibold">
                      ₹{nearbyProperty.price} {nearbyProperty.priceUnit}
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <a href={`/property/${nearbyProperty.id}`}>View</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PropertyDetailsPage;
