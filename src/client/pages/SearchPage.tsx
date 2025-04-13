
import React, { useState, useEffect } from "react";
import Layout from "@/client/components/layout/Layout";
import { useSearchParams } from "react-router-dom";
import { Property } from "@/client/components/properties/PropertyCard";
import { featuredProperties, rentalProperties } from "@/client/data/mockData";
import PropertySearchFilters from "@/client/components/search/PropertySearchFilters";
import PropertySearchResults from "@/client/components/search/PropertySearchResults";
import { Button } from "@/client/components/ui/button";
import { MapPin } from "lucide-react";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [properties, setProperties] = useState<Property[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Parse search params
  const searchType = searchParams.get("type") || "buy";
  const location = searchParams.get("location") || "";
  const propertyType = searchParams.get("propertyType") || "all";
  const budgetRange = searchParams.get("budget") || "budget";
  
  // Initialize with all properties
  useEffect(() => {
    // Combine all property data and apply initial filters from URL
    const allProperties = [...featuredProperties, ...rentalProperties];
    
    // For a real app, this would be an API call with the search parameters
    setProperties(allProperties);
    setLoading(false);
  }, []);
  
  // Apply filters when properties or filter params change
  useEffect(() => {
    if (properties.length === 0) return;
    
    let result = [...properties];
    
    // Filter by search type (buy/rent)
    if (searchType === "rent") {
      result = result.filter(property => property.forRent === true);
    } else if (searchType === "buy") {
      result = result.filter(property => !property.forRent);
    }
    
    // Filter by location
    if (location) {
      result = result.filter(property => 
        property.location.toLowerCase().includes(location.toLowerCase())
      );
    }
    
    // Filter by property type
    if (propertyType && propertyType !== "all") {
      result = result.filter(property => property.type === propertyType);
    }
    
    // Filter by budget
    if (budgetRange && budgetRange !== "budget") {
      // Parse budget ranges
      if (budgetRange === "5lakh") {
        result = result.filter(p => 
          (p.priceUnit === "lakh" && p.price <= 5) || 
          (p.priceUnit === "crore" && p.price < 0.05)
        );
      } else if (budgetRange === "10lakh") {
        result = result.filter(p => 
          (p.priceUnit === "lakh" && p.price <= 10) || 
          (p.priceUnit === "crore" && p.price <= 0.1)
        );
      } else if (budgetRange === "20lakh") {
        result = result.filter(p => 
          (p.priceUnit === "lakh" && p.price <= 20) || 
          (p.priceUnit === "crore" && p.price <= 0.2)
        );
      } else if (budgetRange === "30lakh") {
        result = result.filter(p => 
          (p.priceUnit === "lakh" && p.price <= 30) || 
          (p.priceUnit === "crore" && p.price <= 0.3)
        );
      } else if (budgetRange === "50lakh") {
        result = result.filter(p => 
          (p.priceUnit === "lakh" && p.price <= 50) || 
          (p.priceUnit === "crore" && p.price <= 0.5)
        );
      } else if (budgetRange === "75lakh") {
        result = result.filter(p => 
          (p.priceUnit === "lakh" && p.price <= 75) || 
          (p.priceUnit === "crore" && p.price <= 0.75)
        );
      } else if (budgetRange === "1cr") {
        result = result.filter(p => 
          (p.priceUnit === "lakh" && p.price <= 100) || 
          (p.priceUnit === "crore" && p.price <= 1)
        );
      } else if (budgetRange === "2cr") {
        result = result.filter(p => 
          (p.priceUnit === "lakh" && p.price <= 200) || 
          (p.priceUnit === "crore" && p.price <= 2)
        );
      } else if (budgetRange === "5cr") {
        result = result.filter(p => 
          (p.priceUnit === "lakh" && p.price <= 500) || 
          (p.priceUnit === "crore" && p.price <= 5)
        );
      } else if (budgetRange === "5cr+") {
        result = result.filter(p => 
          (p.priceUnit === "crore" && p.price > 5)
        );
      }
    }
    
    setFilteredProperties(result);
  }, [properties, searchType, location, propertyType, budgetRange]);
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {location && (
          <div className="mb-6 flex items-center">
            <MapPin className="h-5 w-5 text-orange mr-2" />
            <h1 className="text-2xl font-semibold">
              Properties in <span className="text-orange">{location}</span>
            </h1>
          </div>
        )}
        
        {!location && (
          <h1 className="text-2xl font-semibold mb-6">
            {searchType === "rent" ? "Rental Properties" : "Properties for Sale"}
          </h1>
        )}
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <PropertySearchFilters 
              initialSearchType={searchType}
              initialLocation={location}
              initialPropertyType={propertyType}
              initialBudget={budgetRange}
            />
          </div>
          
          <div className="lg:col-span-3">
            <PropertySearchResults 
              properties={filteredProperties}
              loading={loading}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SearchPage;
