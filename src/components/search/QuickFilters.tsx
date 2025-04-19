
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { SlidersHorizontal } from "lucide-react";

interface QuickFiltersProps {
  filters: {
    priceRange: string;
    propertyType: string;
    bedrooms: string;
  };
  setFilters: React.Dispatch<React.SetStateAction<{
    priceRange: string;
    propertyType: string;
    bedrooms: string;
  }>>;
  forRent: boolean;
}

const QuickFilters = ({ filters, setFilters, forRent }: QuickFiltersProps) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="h-5 w-5" />
          <CardTitle>Quick Filters</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>{forRent ? "Monthly Rent" : "Price Range"}</Label>
          <Select
            value={filters.priceRange}
            onValueChange={(value) =>
              setFilters((prev) => ({ ...prev, priceRange: value }))
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select price range" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="0-25">Below 25 Lakhs</SelectItem>
                <SelectItem value="25-50">25-50 Lakhs</SelectItem>
                <SelectItem value="50-75">50-75 Lakhs</SelectItem>
                <SelectItem value="75+">Above 75 Lakhs</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Property Type</Label>
          <Select
            value={filters.propertyType}
            onValueChange={(value) =>
              setFilters((prev) => ({ ...prev, propertyType: value }))
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select property type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="house">House</SelectItem>
                <SelectItem value="villa">Villa</SelectItem>
                <SelectItem value="plot">Plot</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Bedrooms</Label>
          <Select
            value={filters.bedrooms}
            onValueChange={(value) =>
              setFilters((prev) => ({ ...prev, bedrooms: value }))
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select bedrooms" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">Any</SelectItem>
                <SelectItem value="1">1 BHK</SelectItem>
                <SelectItem value="2">2 BHK</SelectItem>
                <SelectItem value="3">3 BHK</SelectItem>
                <SelectItem value="4">4+ BHK</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickFilters;
