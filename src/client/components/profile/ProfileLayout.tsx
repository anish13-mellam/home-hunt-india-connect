
import React from "react";
import Layout from "@/client/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/client/components/ui/tabs";

interface ProfileLayoutProps {
  children: React.ReactNode;
  userType?: string; 
}

const ProfileLayout: React.FC<ProfileLayoutProps> = ({ children, userType = "buyer" }) => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList>
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="settings">Profile Settings</TabsTrigger>
            {userType === "buyer" && (
              <TabsTrigger value="saved">Saved Properties</TabsTrigger>
            )}
            {userType === "agent" && (
              <TabsTrigger value="listings">My Listings</TabsTrigger>
            )}
          </TabsList>
          <TabsContent value="dashboard" className="mt-6">
            {children}
          </TabsContent>
          <TabsContent value="settings" className="mt-6">
            <div className="p-6 border rounded-md bg-muted/50">
              <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
              <p className="text-muted-foreground">Profile settings content will be implemented here</p>
            </div>
          </TabsContent>
          {userType === "buyer" && (
            <TabsContent value="saved" className="mt-6">
              <div className="p-6 border rounded-md bg-muted/50">
                <h2 className="text-xl font-semibold mb-4">Saved Properties</h2>
                <p className="text-muted-foreground">Your saved properties will appear here</p>
              </div>
            </TabsContent>
          )}
          {userType === "agent" && (
            <TabsContent value="listings" className="mt-6">
              <div className="p-6 border rounded-md bg-muted/50">
                <h2 className="text-xl font-semibold mb-4">My Listings</h2>
                <p className="text-muted-foreground">Your property listings will appear here</p>
              </div>
            </TabsContent>
          )}
        </Tabs>
      </div>
    </Layout>
  );
};

export default ProfileLayout;
