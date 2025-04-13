
import React from "react";
import { Link } from "react-router-dom";
import { Home, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/client/components/ui/button";
import { Input } from "@/client/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Company */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="rounded-full bg-gradient-to-r from-orange-400 to-orange p-2">
                <Home className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">
                HomeHunt<span className="text-orange">India</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-4">
              Find your perfect home with HomeHunt India. We connect buyers, sellers, and renters with the best properties across India.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-gray-800 rounded-full">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-gray-800 rounded-full">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-gray-800 rounded-full">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-gray-800 rounded-full">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/buy" className="text-gray-400 hover:text-white transition-colors">Properties for Sale</Link>
              </li>
              <li>
                <Link to="/rent" className="text-gray-400 hover:text-white transition-colors">Properties for Rent</Link>
              </li>
              <li>
                <Link to="/agents" className="text-gray-400 hover:text-white transition-colors">Real Estate Agents</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Real Estate Blog</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing Plans</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-orange mr-2 mt-1" />
                <span className="text-gray-400">
                  123 MG Road, Bangalore, Karnataka 560001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-orange mr-2" />
                <span className="text-gray-400">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-orange mr-2" />
                <span className="text-gray-400">info@homehuntindia.com</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest property updates and offers.
            </p>
            <div className="flex flex-col space-y-2">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-gray-800 border-gray-700 text-white"
              />
              <Button className="w-full">Subscribe</Button>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} HomeHunt India. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
