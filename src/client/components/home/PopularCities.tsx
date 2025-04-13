
import React from "react";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { popularCities } from "@/client/data/mockData";

const PopularCities = () => {
  return (
    <section className="py-16 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Explore Properties by City</h2>
          <p className="text-muted-foreground">Find your perfect home in India's top cities</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {popularCities.map((city) => (
            <Link 
              key={city.name}
              to={`/search?city=${city.name}`}
              className="group relative h-64 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <img 
                src={city.image} 
                alt={city.name} 
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 w-full p-4 z-20">
                <h3 className="text-white text-xl font-semibold">{city.name}</h3>
                <div className="flex items-center mt-1 text-white/90">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{city.properties} Properties</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCities;
