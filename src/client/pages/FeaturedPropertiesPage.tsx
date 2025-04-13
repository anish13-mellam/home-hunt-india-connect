
import React from "react";
import Layout from "@/client/components/layout/Layout";
import { Card, CardContent } from "@/client/components/ui/card";
import { Badge } from "@/client/components/ui/badge";
import { Button } from "@/client/components/ui/button";
import { 
  Building, 
  Phone, 
  Mail, 
  MapPin, 
  Maximize2, 
  BedDouble, 
  Bath, 
  Calendar,
  Check,
  User
} from "lucide-react";
import { featuredProperties } from "@/client/data/mockData";
import { mockAgentProfile } from "@/client/data/mockUsers";
import { Separator } from "@/client/components/ui/separator";
import { Link } from "react-router-dom";

const FeaturedPropertiesPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h1 className="text-4xl font-bold mb-2">Featured Properties for Sale</h1>
            <p className="text-muted-foreground">
              Explore our handpicked premium properties across India
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-10">
          {featuredProperties.filter(p => p.isFeatured).map((property) => (
            <Card key={property.id} className="overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 h-full">
                {/* Property Image */}
                <div className="relative h-64 md:h-full">
                  <Link to={`/property/${property.id}`}>
                    <img 
                      src={property.image} 
                      alt={property.title} 
                      className="h-full w-full object-cover"
                    />
                  </Link>
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className="bg-primary">Featured</Badge>
                    {property.isNew && <Badge className="bg-green-600">New</Badge>}
                    <Badge variant="outline" className="bg-white">For Sale</Badge>
                  </div>
                </div>
                
                {/* Property Details */}
                <div className="p-6 md:col-span-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-2xl font-bold hover:text-primary">
                        <Link to={`/property/${property.id}`}>{property.title}</Link>
                      </h2>
                      <div className="flex items-center gap-1 mt-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{property.location}</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-primary">
                        ₹{property.price} {property.priceUnit === "lakh" ? "Lakh" : "Cr"}
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
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
                      <Building className="h-5 w-5 text-muted-foreground" />
                      <span className="capitalize">{property.type}</span>
                    </div>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  {/* Agent Information */}
                  <div className="flex flex-col sm:flex-row justify-between gap-4">
                    <div className="flex items-center gap-3">
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
                    
                    <div className="flex flex-col sm:items-end gap-2">
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
                  
                  <div className="mt-6 flex flex-col sm:flex-row gap-4">
                    <Link to={`/property/${property.id}`} className="flex-1">
                      <Button className="w-full">View Details</Button>
                    </Link>
                    <Button variant="outline" className="flex-1">Contact Agent</Button>
                  </div>
                  
                  {/* Additional Info */}
                  <div className="mt-4 text-sm text-muted-foreground flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      <span>Listed by Owner</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>Posted on 10 Apr, 2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default FeaturedPropertiesPage;
