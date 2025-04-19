
import React from "react";
import Layout from "@/components/layout/Layout";
import PropertyForm from "@/components/properties/PropertyForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AddPropertyPage = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle>Post a Property</CardTitle>
          </CardHeader>
          <CardContent>
            <PropertyForm />
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default AddPropertyPage;
