
import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
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
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { 
  Card, 
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Home,
  Building,
  MapPin,
  IndianRupee,
  ChevronDown,
  ChevronUp,
  BedDouble,
  Bath,
  Maximize2,
  CalendarCheck
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

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
  initialBudget = "budget"
}: PropertySearchFiltersProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  
  // Filter states
  const [searchType, setSearchType] = useState(initialSearchType);
  const [location, setLocation] = useState(initialLocation);
  const [propertyType, setPropertyType] = useState(initialPropertyType);
  const [budget, setBudget] = useState(initialBudget);
  const [bedsMin, setBedsMin] = useState(0);
  const [bathsMin, setBathsMin] = useState(0);
  const [furnished, setFurnished] = useState(false);
  const [parking, setParking] = useState(false);
  const [moreFiltersOpen, setMoreFiltersOpen] = useState(false);

  // For mobile view
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const applyFilters = (e: React.FormEvent) => {
    e.preventDefault();
    
    const params = new URLSearchParams();
    params.set("type", searchType);
    if (location) params.set("location", location);
    if (propertyType !== "all") params.set("propertyType", propertyType);
    if (budget !== "budget") params.set("budget", budget);
    if (bedsMin > 0) params.set("beds", bedsMin.toString());
    if (bathsMin > 0) params.set("baths", bathsMin.toString());
    if (furnished) params.set("furnished", "true");
    if (parking) params.set("parking", "true");
    
    navigate(`/search?${params.toString()}`);
    
    if (isMobile) {
      setIsFilterOpen(false);
    }
  };
  
  const resetFilters = () => {
    setSearchType("buy");
    setLocation("");
    setPropertyType("all");
    setBudget("budget");
    setBedsMin(0);
    setBathsMin(0);
    setFurnished(false);
    setParking(false);
  };
  
  return (
    <Card className="sticky top-20">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle>Filters</CardTitle>
          {isMobile && (
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              {isFilterOpen ? "Hide Filters" : "Show Filters"}
            </Button>
          )}
        </div>
      </CardHeader>
      
      <CardContent className={cn(
        isMobile && !isFilterOpen ? "hidden" : "block"
      )}>
        <form onSubmit={applyFilters}>
          <div className="space-y-4">
            {/* Property Type (Buy/Rent) */}
            <div className="space-y-2">
              <Label>I want to</Label>
              <Tabs 
                defaultValue={searchType} 
                onValueChange={setSearchType} 
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="buy">Buy</TabsTrigger>
                  <TabsTrigger value="rent">Rent</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            
            {/* Location */}
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  id="location"
                  placeholder="City, Locality or Project"
                  className="pl-10"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </div>
            
            {/* Property Type */}
            <div className="space-y-2">
              <Label htmlFor="propertyType">Property Type</Label>
              <Select value={propertyType} onValueChange={setPropertyType}>
                <SelectTrigger id="propertyType">
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
            </div>
            
            {/* Budget */}
            <div className="space-y-2">
              <Label htmlFor="budget">Budget</Label>
              <Select value={budget} onValueChange={setBudget}>
                <SelectTrigger id="budget">
                  <SelectValue placeholder="Select Budget" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="budget">Any Budget</SelectItem>
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
            
            {/* More Filters */}
            <Collapsible
              open={moreFiltersOpen}
              onOpenChange={setMoreFiltersOpen}
              className="w-full space-y-2"
            >
              <div className="flex items-center justify-between">
                <Label>More Filters</Label>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="sm">
                    {moreFiltersOpen ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </Button>
                </CollapsibleTrigger>
              </div>
              
              <CollapsibleContent className="space-y-4">
                {/* Bedrooms */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Bedrooms</Label>
                    <span className="text-sm text-muted-foreground">
                      {bedsMin > 0 ? `${bedsMin}+ beds` : "Any"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {[0, 1, 2, 3, 4, 5].map((num) => (
                      <Button
                        key={num}
                        type="button"
                        variant={bedsMin === num ? "default" : "outline"}
                        size="sm"
                        className="flex-1"
                        onClick={() => setBedsMin(num)}
                      >
                        {num === 0 ? "Any" : num === 5 ? "5+" : num}
                      </Button>
                    ))}
                  </div>
                </div>
                
                {/* Bathrooms */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Bathrooms</Label>
                    <span className="text-sm text-muted-foreground">
                      {bathsMin > 0 ? `${bathsMin}+ baths` : "Any"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {[0, 1, 2, 3, 4].map((num) => (
                      <Button
                        key={num}
                        type="button"
                        variant={bathsMin === num ? "default" : "outline"}
                        size="sm"
                        className="flex-1"
                        onClick={() => setBathsMin(num)}
                      >
                        {num === 0 ? "Any" : num === 4 ? "4+" : num}
                      </Button>
                    ))}
                  </div>
                </div>
                
                {/* Amenities */}
                <div className="space-y-2">
                  <Label>Amenities</Label>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Furnished</span>
                      <Switch
                        checked={furnished}
                        onCheckedChange={setFurnished}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Parking</span>
                      <Switch
                        checked={parking}
                        onCheckedChange={setParking}
                      />
                    </div>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
            
            <div className="pt-2 space-y-2">
              <Button type="submit" className="w-full">Apply Filters</Button>
              <Button 
                type="button" 
                variant="outline" 
                className="w-full"
                onClick={resetFilters}
              >
                Reset
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default PropertySearchFilters;
