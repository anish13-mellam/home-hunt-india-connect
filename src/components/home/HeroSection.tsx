
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Building, IndianRupee } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const HeroSection = () => {
  const [searchType, setSearchType] = useState("buy");
  const navigate = useNavigate();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/${searchType}`);
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-dark/30 to-orange/30 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80')",
          filter: "brightness(0.9)"
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 text-shadow">
            Find Your Dream Home in India
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8 text-shadow-sm">
            Search from over 2 lakh+ properties across 100+ cities
          </p>
          
          <div className="bg-white rounded-xl p-4 shadow-lg">
            <Tabs defaultValue="buy" className="w-full" onValueChange={setSearchType}>
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="buy">Buy</TabsTrigger>
                <TabsTrigger value="rent">Rent</TabsTrigger>
              </TabsList>
              
              <form onSubmit={handleSearch}>
                <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                  <div className="flex-grow relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input 
                      placeholder="Enter city, locality or project" 
                      className="pl-10"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 md:w-1/2">
                    <Select defaultValue="all">
                      <SelectTrigger>
                        <SelectValue placeholder="Property Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="apartment">Apartment</SelectItem>
                        <SelectItem value="house">House</SelectItem>
                        <SelectItem value="villa">Villa</SelectItem>
                        <SelectItem value="plot">Plot</SelectItem>
                      </SelectContent>
                    </Select>
                    
                    <Select defaultValue="budget">
                      <SelectTrigger>
                        <SelectValue placeholder="Budget" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="budget">Budget</SelectItem>
                        <SelectItem value="5lakh">Upto 5 Lakh</SelectItem>
                        <SelectItem value="10lakh">Upto 10 Lakh</SelectItem>
                        <SelectItem value="20lakh">Upto 20 Lakh</SelectItem>
                        <SelectItem value="30lakh">Upto 30 Lakh</SelectItem>
                        <SelectItem value="50lakh">Upto 50 Lakh</SelectItem>
                        <SelectItem value="75lakh">Upto 75 Lakh</SelectItem>
                        <SelectItem value="1cr">Upto 1 Cr</SelectItem>
                        <SelectItem value="2cr">Upto 2 Cr</SelectItem>
                        <SelectItem value="5cr">Upto 5 Cr</SelectItem>
                        <SelectItem value="5cr+">5 Cr+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button type="submit" size="lg" className="md:w-auto">
                    <Search className="mr-2 h-4 w-4" /> Search
                  </Button>
                </div>
              </form>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
