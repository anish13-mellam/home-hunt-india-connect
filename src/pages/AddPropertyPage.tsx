
import React from "react";
import Layout from "@/components/layout/Layout";
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
            <p className="text-center py-8 text-muted-foreground">
              Property form is available in the client version.
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default AddPropertyPage;
