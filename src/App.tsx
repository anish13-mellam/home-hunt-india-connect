
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SearchPage from "./pages/SearchPage";
import PropertyDetailsPage from "./pages/PropertyDetailsPage";
import MessagesPage from "./pages/MessagesPage";
import AgentProfile from "./pages/AgentProfile";
import BuyerProfile from "./pages/BuyerProfile";
import NotFound from "./pages/NotFound";
import FavoritesPage from "./pages/FavoritesPage";
import AddPropertyPage from "./pages/AddPropertyPage";
import LoginPage from "./pages/LoginPage";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/property/:id" element={<PropertyDetailsPage />} />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/profile/agent" element={<AgentProfile />} />
        <Route path="/profile/buyer" element={<BuyerProfile />} />
        <Route path="/agent-profile" element={<AgentProfile />} />
        <Route path="/buyer-profile" element={<BuyerProfile />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/add-listing" element={<AddPropertyPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
