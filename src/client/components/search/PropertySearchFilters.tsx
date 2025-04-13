
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/client/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/client/components/ui/card";
import { Input } from "@/client/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/client/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/client/components/ui/radio-group";
import { Label } from "@/client/components/ui/label";
import { Slider } from "@/client/components/ui/slider";

interface PropertySearchFiltersProps {
  initialSearchType?: string;
  initialLocation?: string;
  initialPropertyType?: string;
  initialBudget?: string;
}

const PropertySearchFilters = ({
  initialSearchType = "buy",
  initialLocation = "",
  initialPropertyType = "all",
  initialBudget = "budget",
}: PropertySearchFiltersProps) => {
  const navigate = useNavigate();
  
  // State for form values
  const [searchType, setSearchType] = useState(initialSearchType);
  const [location, setLocation] = useState(initialLocation);
  const [propertyType, setPropertyType] = useState(initialPropertyType);
  const [budget, setBudget] = useState(initialBudget);
  const [bhk, setBhk] = useState<string[]>([]);
  const [amenities, setAmenities] = useState<string[]>([]);
  
  const handleBhkChange = (value: string) => {
    if (bhk.includes(value)) {
      setBhk(bhk.filter((item) => item !== value));
    } else {
      setBhk([...bhk, value]);
    }
  };
  
  const handleAmenityChange = (value: string) => {
    if (amenities.includes(value)) {
      setAmenities(amenities.filter((item) => item !== value));
    } else {
      setAmenities([...amenities, value]);
    }
  };
  
  const applyFilters = () => {
    const searchParams = new URLSearchParams();
    
    if (searchType) searchParams.set("type", searchType);
    if (location) searchParams.set("location", location);
    if (propertyType !== "all") searchParams.set("propertyType", propertyType);
    if (budget !== "budget") searchParams.set("budget", budget);
    if (bhk.length > 0) searchParams.set("bhk", bhk.join(","));
    if (amenities.length > 0) searchParams.set("amenities", amenities.join(","));
    
    navigate(`/search?${searchParams.toString()}`);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Property Type</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup 
            defaultValue={searchType}
            onValueChange={setSearchType}
            className="flex space-x-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="buy" id="buy" />
              <Label htmlFor="buy">Buy</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="rent" id="rent" />
              <Label htmlFor="rent">Rent</Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Location</CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            placeholder="Search by city or locality"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Property Category</CardTitle>
        </CardHeader>
        <CardContent>
          <Select
            value={propertyType}
            onValueChange={(value) => setPropertyType(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select property type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="apartment">Apartments</SelectItem>
              <SelectItem value="house">Houses</SelectItem>
              <SelectItem value="villa">Villas</SelectItem>
              <SelectItem value="plot">Plots</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Budget</CardTitle>
        </CardHeader>
        <CardContent>
          <Select
            value={budget}
            onValueChange={(value) => setBudget(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select budget range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="budget">All Budgets</SelectItem>
              <SelectItem value="5lakh">Up to 5 Lakhs</SelectItem>
              <SelectItem value="10lakh">Up to 10 Lakhs</SelectItem>
              <SelectItem value="20lakh">Up to 20 Lakhs</SelectItem>
              <SelectItem value="30lakh">Up to 30 Lakhs</SelectItem>
              <SelectItem value="50lakh">Up to 50 Lakhs</SelectItem>
              <SelectItem value="75lakh">Up to 75 Lakhs</SelectItem>
              <SelectItem value="1cr">Up to 1 Crore</SelectItem>
              <SelectItem value="2cr">Up to 2 Crores</SelectItem>
              <SelectItem value="5cr">Up to 5 Crores</SelectItem>
              <SelectItem value="5cr+">5 Crores+</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>BHK</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {["1", "2", "3", "4", "5+"].map((item) => (
              <Button
                key={item}
                variant={bhk.includes(item) ? "default" : "outline"}
                className="flex-1"
                onClick={() => handleBhkChange(item)}
              >
                {item} BHK
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <Button className="w-full" onClick={applyFilters}>
        Apply Filters
      </Button>
    </div>
  );
};

export default PropertySearchFilters;
