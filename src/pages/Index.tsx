
import React from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import FeaturedListings from "@/components/properties/FeaturedListings";
import PopularCities from "@/components/home/PopularCities";
import HowItWorks from "@/components/home/HowItWorks";
import { featuredProperties, rentalProperties } from "@/data/mockData";

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
