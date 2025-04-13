
import React from "react";
import Layout from "@/client/components/layout/Layout";
import { Button } from "@/client/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl font-extrabold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-md">
            The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={() => navigate(-1)}>Go Back</Button>
            <Button variant="outline" onClick={() => navigate("/")}>
              Return to Home
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
