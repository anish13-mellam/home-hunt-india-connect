
import { Toaster } from "@/client/components/ui/toaster";
import { Toaster as Sonner } from "@/client/components/ui/sonner";
import { TooltipProvider } from "@/client/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SearchPage from "./pages/SearchPage";
import NotFound from "./pages/NotFound";
import BuyerProfile from "./pages/BuyerProfile";
import AgentProfile from "./pages/AgentProfile";
import MessagesPage from "./pages/MessagesPage";

const queryClient = new QueryClient();

const App = () => {
  // Remove database initialization from client-side
  // This avoids the "process is not defined" error

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/buy" element={<Index />} />
            <Route path="/rent" element={<Index />} />
            <Route path="/sell" element={<Index />} />
            <Route path="/agents" element={<Index />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/login" element={<Index />} />
            <Route path="/register" element={<Index />} />
            <Route path="/add-listing" element={<Index />} />
            <Route path="/messages" element={<MessagesPage />} />
            <Route path="/profile/buyer" element={<BuyerProfile />} />
            <Route path="/profile/agent" element={<AgentProfile />} />
            <Route path="/profile" element={<BuyerProfile />} /> {/* Default to buyer profile */}
            <Route path="/favorites" element={<BuyerProfile />} />
            <Route path="/property/:id" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
