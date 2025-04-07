
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  MapPin, 
  Menu, 
  X, 
  User, 
  MessageCircle,
  Home,
  Building
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 w-full bg-white z-40 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="rounded-full bg-gradient-to-r from-orange-400 to-orange p-2">
            <Home className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-orange to-teal bg-clip-text text-transparent">
            HomeHunt<span className="text-orange">India</span>
          </span>
        </Link>

        {!isMobile ? (
          <>
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/buy" className="text-gray-700 hover:text-orange">Buy</Link>
              <Link to="/rent" className="text-gray-700 hover:text-orange">Rent</Link>
              <Link to="/sell" className="text-gray-700 hover:text-orange">Sell</Link>
              <Link to="/agents" className="text-gray-700 hover:text-orange">Find Agents</Link>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/messages">
                  <MessageCircle className="h-5 w-5 mr-1" />
                  <span>Messages</span>
                </Link>
              </Button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/login">Login</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/register">Register</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/favorites">Saved Properties</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Button asChild>
                <Link to="/add-listing">Post a Property</Link>
              </Button>
            </div>
          </>
        ) : (
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(true)}>
            <Menu className="h-6 w-6" />
          </Button>
        )}

        {/* Mobile Menu */}
        {isMobile && isMenuOpen && (
          <div className="fixed inset-0 bg-background z-50 flex flex-col p-5">
            <div className="flex justify-between items-center">
              <Link to="/" className="flex items-center gap-2">
                <div className="rounded-full bg-gradient-to-r from-orange-400 to-orange p-2">
                  <Home className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-orange to-teal bg-clip-text text-transparent">
                  HomeHunt<span className="text-orange">India</span>
                </span>
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                <X className="h-6 w-6" />
              </Button>
            </div>
            
            <nav className="flex flex-col space-y-4 mt-8">
              <Link to="/buy" className="text-lg font-medium p-2 hover:bg-muted rounded-md flex items-center gap-2">
                <Building className="h-5 w-5" /> Buy
              </Link>
              <Link to="/rent" className="text-lg font-medium p-2 hover:bg-muted rounded-md flex items-center gap-2">
                <Building className="h-5 w-5" /> Rent
              </Link>
              <Link to="/sell" className="text-lg font-medium p-2 hover:bg-muted rounded-md flex items-center gap-2">
                <MapPin className="h-5 w-5" /> Sell
              </Link>
              <Link to="/agents" className="text-lg font-medium p-2 hover:bg-muted rounded-md flex items-center gap-2">
                <User className="h-5 w-5" /> Find Agents
              </Link>
              <Link to="/messages" className="text-lg font-medium p-2 hover:bg-muted rounded-md flex items-center gap-2">
                <MessageCircle className="h-5 w-5" /> Messages
              </Link>
              <Link to="/login" className="text-lg font-medium p-2 hover:bg-muted rounded-md">Login</Link>
              <Link to="/register" className="text-lg font-medium p-2 hover:bg-muted rounded-md">Register</Link>
              
              <div className="pt-4">
                <Button className="w-full" asChild>
                  <Link to="/add-listing">Post a Property</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
