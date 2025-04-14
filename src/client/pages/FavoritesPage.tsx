
import React, { useState, useEffect } from "react";
import Layout from "@/client/components/layout/Layout";
import { Link } from "react-router-dom";
import { featuredProperties, rentalProperties } from "@/client/data/mockData";
import PropertyCard from "@/client/components/properties/PropertyCard";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/client/components/ui/button";

const FavoritesPage = () => {
  const [favoriteProperties, setFavoriteProperties] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load favorites from localStorage
  useEffect(() => {
    const loadFavorites = () => {
      try {
        const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
        const properties = [...featuredProperties, ...rentalProperties].filter(
          property => favorites.includes(property.id)
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

  // Handle favorite toggle to update list in real-time
  const handleFavoriteToggle = (id: string) => {
    setFavoriteProperties(prev => prev.filter(property => property.id !== id));
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <Link to="/" className="flex items-center text-primary hover:underline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-6">My Favorites</h1>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <p>Loading your favorites...</p>
          </div>
        ) : favoriteProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {favoriteProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onFavoriteToggle={handleFavoriteToggle}
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
