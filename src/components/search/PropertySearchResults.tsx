
import React from "react";
import { Property } from "@/components/properties/PropertyCard";
import PropertyCard from "@/components/properties/PropertyCard";
import { 
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ArrowDownAZ, ArrowUpAZ, Settings } from "lucide-react";

interface PropertySearchResultsProps {
  properties: Property[];
  loading: boolean;
}

type SortOption = "newest" | "price_low" | "price_high";

const PropertySearchResults = ({ properties, loading }: PropertySearchResultsProps) => {
  const [sortOption, setSortOption] = React.useState<SortOption>("newest");
  
  // Apply sorting to properties
  const sortedProperties = React.useMemo(() => {
    let result = [...properties];
    
    switch (sortOption) {
      case "price_low":
        return result.sort((a, b) => {
          // Convert all to crore for consistent comparison
          const aValue = a.priceUnit === "lakh" ? a.price / 100 : a.price;
          const bValue = b.priceUnit === "lakh" ? b.price / 100 : b.price;
          return aValue - bValue;
        });
      
      case "price_high":
        return result.sort((a, b) => {
          // Convert all to crore for consistent comparison
          const aValue = a.priceUnit === "lakh" ? a.price / 100 : a.price;
          const bValue = b.priceUnit === "lakh" ? b.price / 100 : b.price;
          return bValue - aValue;
        });
      
      case "newest":
      default:
        // In a real app, this would sort by date
        return result;
    }
  }, [properties, sortOption]);
  
  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }
  
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <p className="text-muted-foreground">
          <span className="font-medium text-foreground">{properties.length}</span> properties found
        </p>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Settings className="h-4 w-4" />
              Sort By
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem 
              className={sortOption === "newest" ? "bg-muted" : ""} 
              onClick={() => setSortOption("newest")}
            >
              Newest First
            </DropdownMenuItem>
            <DropdownMenuItem 
              className={sortOption === "price_low" ? "bg-muted" : ""} 
              onClick={() => setSortOption("price_low")}
            >
              <ArrowDownAZ className="h-4 w-4 mr-2" /> Price (Low to High)
            </DropdownMenuItem>
            <DropdownMenuItem 
              className={sortOption === "price_high" ? "bg-muted" : ""} 
              onClick={() => setSortOption("price_high")}
            >
              <ArrowUpAZ className="h-4 w-4 mr-2" /> Price (High to Low)
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
      {sortedProperties.length === 0 ? (
        <div className="bg-muted rounded-lg p-8 text-center">
          <h3 className="text-xl font-medium mb-2">No properties found</h3>
          <p className="text-muted-foreground mb-4">
            Try changing your search filters to find more properties
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sortedProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PropertySearchResults;
