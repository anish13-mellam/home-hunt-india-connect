
import React from "react";
import Layout from "@/client/components/layout/Layout";
import { Button } from "@/client/components/ui/button";
import { Card, CardContent } from "@/client/components/ui/card";
import { MapPin, Banknote, Users, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

const SellPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Sell Your Property with HomeHunt India</h1>
          <p className="text-lg text-muted-foreground mb-8">
            List your property and reach thousands of genuine buyers across India
          </p>
          <Button size="lg" asChild>
            <Link to="/add-listing">Post Your Property Now</Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-orange/20 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Wide Reach</h3>
                <p className="text-muted-foreground">
                  Your property listing gets maximum visibility across India
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-orange/20 flex items-center justify-center mb-4">
                  <Banknote className="h-6 w-6 text-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Best Value</h3>
                <p className="text-muted-foreground">
                  Get the best price for your property with our market insights
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-orange/20 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Verified Buyers</h3>
                <p className="text-muted-foreground">
                  Connect with genuine buyers and avoid time-wasters
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-muted/50 rounded-lg p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="h-16 w-16 rounded-full bg-orange/20 flex items-center justify-center">
              <HelpCircle className="h-8 w-8 text-orange" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Need Help Selling?</h3>
              <p className="mb-4">
                Our expert agents can help you get the best value for your property
              </p>
              <Button variant="outline" asChild>
                <Link to="/agents">Find an Agent</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SellPage;
