
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/client/components/ui/button";
import { Input } from "@/client/components/ui/input";
import { Search } from "lucide-react";

const HeroSection = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = React.useState("");
  const [searchType, setSearchType] = React.useState("buy");
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search?type=${searchType}&location=${encodeURIComponent(searchQuery)}`);
  };
  
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
      <div 
        className="h-[600px] bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')"
        }}
      >
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4">
            Find Your Dream Home in India
          </h1>
          <p className="text-xl text-white text-center mb-8 max-w-2xl">
            Discover the perfect property with India's trusted real estate marketplace
          </p>
          
          <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-1">
            <div className="flex flex-wrap">
              <div className="flex border-b md:border-b-0 w-full md:w-auto">
                <button
                  className={`flex-1 md:flex-none px-6 py-3 font-medium text-sm rounded-md ${
                    searchType === "buy" 
                      ? "text-white bg-primary" 
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setSearchType("buy")}
                >
                  Buy
                </button>
                <button
                  className={`flex-1 md:flex-none px-6 py-3 font-medium text-sm rounded-md ${
                    searchType === "rent" 
                      ? "text-white bg-primary" 
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setSearchType("rent")}
                >
                  Rent
                </button>
              </div>
              
              <form onSubmit={handleSearch} className="flex-1 flex items-center p-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search by city, locality, or landmark"
                    className="w-full pl-10 pr-4 py-3 rounded-md border-0 focus:ring-2 focus:ring-primary/20"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button type="submit" className="ml-2 whitespace-nowrap">
                  Search
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
