
import React, { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import PropertyCard from "@/components/properties/PropertyCard";
import { featuredProperties, rentalProperties } from "@/data/mockData";
import { Property } from "@/components/properties/PropertyCard";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FavoritesPage = () => {
  const [favoriteProperties, setFavoriteProperties] = useState<Property[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load favorites from localStorage
  useEffect(() => {
    const loadFavorites = () => {
      try {
        const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
        // Check both featuredProperties and rentalProperties
        const allProperties = [...featuredProperties, ...rentalProperties];
        const properties = allProperties.filter(property => 
          favorites.includes(property.id)
        );
        setFavoriteProperties(properties);
      } catch (error) {
        console.error("Error loading favorites:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadFavorites();
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">My Favorite Properties</h1>
        
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <p>Loading favorites...</p>
          </div>
        ) : favoriteProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {favoriteProperties.map((property) => (
              <PropertyCard 
                key={property.id} 
                property={property}
                isFavorite={true}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold mb-4">No Favorite Properties</h2>
            <p className="text-muted-foreground mb-8">
              You haven't saved any properties to your favorites list yet.
            </p>
            <Link to="/featured-properties">
              <Button>Browse Properties</Button>
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default FavoritesPage;
