
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
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
          <Route path="/login" element={<Index />} />
          <Route path="/register" element={<Index />} />
          <Route path="/add-listing" element={<Index />} />
          <Route path="/messages" element={<Index />} />
          <Route path="/profile" element={<Index />} />
          <Route path="/favorites" element={<Index />} />
          <Route path="/property/:id" element={<Index />} />
          <Route path="/search" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
