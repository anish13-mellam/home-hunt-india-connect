
import React from "react";
import PropertyCard, { Property } from "@/client/components/properties/PropertyCard";
import { Button } from "@/client/components/ui/button";
import { Card, CardContent } from "@/client/components/ui/card";
import { ArrowDownAZ, ArrowUpAZ, Loader2 } from "lucide-react";

interface PropertySearchResultsProps {
  properties: Property[];
  loading?: boolean;
}

const PropertySearchResults = ({ 
  properties,
  loading = false
}: PropertySearchResultsProps) => {
  const [sortOrder, setSortOrder] = React.useState<"asc" | "desc">("asc");
  const [sortBy, setSortBy] = React.useState<"price" | "date">("price");
  
  const sortedProperties = [...properties].sort((a, b) => {
    if (sortBy === "price") {
      const priceA = a.priceUnit === "crore" ? a.price * 100 : a.price;
      const priceB = b.priceUnit === "crore" ? b.price * 100 : b.price;
      return sortOrder === "asc" ? priceA - priceB : priceB - priceA;
    } else {
      // Assuming each property has a hidden date field for this example
      return sortOrder === "asc" ? 1 : -1;
    }
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <span className="ml-2 text-lg">Loading properties...</span>
      </div>
    );
  }

  if (properties.length === 0) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center justify-center py-16">
          <h3 className="text-xl font-semibold mb-2">No properties found</h3>
          <p className="text-muted-foreground mb-6">
            Try adjusting your search criteria to find more properties
          </p>
          <Button>Reset Filters</Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <p className="text-muted-foreground">
          Showing <span className="font-medium text-foreground">{properties.length}</span> properties
        </p>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Sort by:</span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setSortBy("price");
              setSortOrder(sortOrder === "asc" ? "desc" : "asc");
            }}
            className="text-sm"
          >
            Price {sortBy === "price" && (
              sortOrder === "asc" ? <ArrowUpAZ className="ml-1 h-3 w-3" /> : <ArrowDownAZ className="ml-1 h-3 w-3" />
            )}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setSortBy("date");
              setSortOrder(sortOrder === "asc" ? "desc" : "asc");
            }}
            className="text-sm"
          >
            Date {sortBy === "date" && (
              sortOrder === "asc" ? <ArrowUpAZ className="ml-1 h-3 w-3" /> : <ArrowDownAZ className="ml-1 h-3 w-3" />
            )}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sortedProperties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
          />
        ))}
      </div>
    </div>
  );
};

export default PropertySearchResults;
