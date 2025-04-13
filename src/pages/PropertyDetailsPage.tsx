
import React from "react";
import Layout from "@/components/layout/Layout";
import { useParams } from "react-router-dom";

const PropertyDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Property Details</h1>
        <p>Viewing property with ID: {id}</p>
      </div>
    </Layout>
  );
};

export default PropertyDetailsPage;
