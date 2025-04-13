
import React from "react";
import Layout from "@/client/components/layout/Layout";
import HeroSection from "@/client/components/home/HeroSection";
import FeaturedListings from "@/client/components/properties/FeaturedListings";
import PopularCities from "@/client/components/home/PopularCities";
import HowItWorks from "@/client/components/home/HowItWorks";
import { featuredProperties, rentalProperties } from "@/client/data/mockData";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      
      <FeaturedListings 
        title="Featured Properties for Sale"
        subtitle="Handpicked premium properties across India"
        properties={featuredProperties}
      />
      
      <PopularCities />
      
      <FeaturedListings 
        title="Top Rental Properties"
        subtitle="Quality homes available for rent in prime locations"
        properties={rentalProperties}
      />
      
      <HowItWorks />
    </Layout>
  );
};

export default Index;
