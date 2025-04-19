
import React from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, MapPin, Phone, Mail } from "lucide-react";

// Mock agent data
const agents = [
  {
    id: 1,
    name: "Rajesh Kumar",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    location: "Mumbai, Maharashtra",
    specialties: ["Residential", "Commercial"],
    experience: 8,
    properties: 24,
    verified: true,
    phone: "+91 98765 43210",
    email: "rajesh@example.com"
  },
  {
    id: 2,
    name: "Priya Sharma",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    location: "Bangalore, Karnataka",
    specialties: ["Luxury Homes", "Apartments"],
    experience: 6,
    properties: 18,
    verified: true,
    phone: "+91 87654 32109",
    email: "priya@example.com"
  },
  {
    id: 3,
    name: "Amit Patel",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    location: "Delhi NCR",
    specialties: ["Plots", "Builder Floor"],
    experience: 10,
    properties: 32,
    verified: true,
    phone: "+91 76543 21098",
    email: "amit@example.com"
  },
  {
    id: 4,
    name: "Divya Singh",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    location: "Pune, Maharashtra",
    specialties: ["Villas", "Apartments"],
    experience: 5,
    properties: 15,
    verified: true,
    phone: "+91 65432 10987",
    email: "divya@example.com"
  },
];

const AgentsPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Find Real Estate Agents</h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
          Connect with experienced and verified real estate professionals who can help you 
          buy, sell, or rent properties across India
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {agents.map((agent) => (
            <Card key={agent.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <img 
                      src={agent.image} 
                      alt={agent.name} 
                      className="w-full h-full object-cover aspect-square"
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold">{agent.name}</h3>
                      {agent.verified && (
                        <Badge className="flex items-center gap-1 bg-green-100 text-green-800">
                          <Check className="h-3 w-3" /> Verified
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center text-muted-foreground mb-3">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{agent.location}</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Experience</p>
                        <p className="font-medium">{agent.experience} years</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Properties</p>
                        <p className="font-medium">{agent.properties}+ listings</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-sm text-muted-foreground mb-1">Specialties</p>
                      <div className="flex flex-wrap gap-2">
                        {agent.specialties.map((specialty, index) => (
                          <span 
                            key={index}
                            className="text-xs px-2 py-1 bg-muted rounded-full"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button size="sm" className="flex-1" asChild>
                        <a href={`tel:${agent.phone}`}>
                          <Phone className="h-4 w-4 mr-1" /> Contact
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1" asChild>
                        <a href={`mailto:${agent.email}`}>
                          <Mail className="h-4 w-4 mr-1" /> Email
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/agent-profile">Become a Listed Agent</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default AgentsPage;
