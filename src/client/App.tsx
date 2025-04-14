
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "@/client/pages/Index";
import SearchPage from "@/client/pages/SearchPage";
import PropertyDetailsPage from "@/client/pages/PropertyDetailsPage";
import MessagesPage from "@/client/pages/MessagesPage";
import AgentProfile from "@/client/pages/AgentProfile";
import BuyerProfile from "@/client/pages/BuyerProfile";
import NotFound from "@/client/pages/NotFound";
import LoginPage from "@/client/pages/LoginPage";
import FeaturedPropertiesPage from "@/client/pages/FeaturedPropertiesPage";
import FavoritesPage from "@/client/pages/FavoritesPage";
import { Toaster } from "@/client/components/ui/toaster";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/property/:id" element={<PropertyDetailsPage />} />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/agent-profile" element={<AgentProfile />} />
        <Route path="/buyer-profile" element={<BuyerProfile />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/featured-properties" element={<FeaturedPropertiesPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
