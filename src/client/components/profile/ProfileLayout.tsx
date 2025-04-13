
import React from "react";
import Layout from "@/client/components/layout/Layout";
import { Tabs, TabsList, TabsTrigger } from "@/client/components/ui/tabs";
import { Avatar, AvatarImage, AvatarFallback } from "@/client/components/ui/avatar";
import { useNavigate } from "react-router-dom";

type UserType = "buyer" | "agent";

interface ProfileLayoutProps {
  children: React.ReactNode;
  activeTab?: string;
  role?: UserType;
  user?: any;
}

const ProfileLayout = ({ 
  children, 
  activeTab = "profile",
  role = "buyer",
  user
}: ProfileLayoutProps) => {
  const navigate = useNavigate();
  
  const handleTabChange = (value: string) => {
    // Add the logic to change tabs if needed
    // For now, it just renders the content
  };
  
  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Profile Sidebar */}
          <div className="w-full md:w-1/4 space-y-6">
            <div className="flex flex-col items-center text-center p-6 border rounded-lg bg-card">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src={user?.avatar || ""} alt={user?.name || "User"} />
                <AvatarFallback className="text-2xl">
                  {(user?.name?.substring(0, 1) || "U")}
                </AvatarFallback>
              </Avatar>
              <h2 className="text-xl font-semibold">{user?.name || "User Name"}</h2>
              <p className="text-muted-foreground">{user?.email || "user@example.com"}</p>
              <div className="mt-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                {role === "agent" ? "Real Estate Agent" : "Buyer"}
              </div>
            </div>
            
            <Tabs 
              defaultValue={activeTab} 
              className="w-full" 
              orientation="vertical"
              onValueChange={handleTabChange}
            >
              <TabsList className="flex flex-col h-auto bg-card rounded-md border space-y-1 p-1">
                <TabsTrigger 
                  value="profile" 
                  className="justify-start data-[state=active]:bg-accent"
                  onClick={() => navigate(`/profile/${role}`)}
                >
                  Profile Information
                </TabsTrigger>
                
                {role === "buyer" ? (
                  <TabsTrigger 
                    value="favorites" 
                    className="justify-start" 
                    onClick={() => navigate("/favorites")}
                  >
                    Saved Properties
                  </TabsTrigger>
                ) : (
                  <TabsTrigger 
                    value="listings" 
                    className="justify-start"
                  >
                    My Listings
                  </TabsTrigger>
                )}
                
                {role === "agent" && (
                  <TabsTrigger 
                    value="leads" 
                    className="justify-start"
                  >
                    Customer Leads
                  </TabsTrigger>
                )}
                
                {role === "buyer" && (
                  <TabsTrigger 
                    value="preferences" 
                    className="justify-start"
                  >
                    My Preferences
                  </TabsTrigger>
                )}
                
                <TabsTrigger 
                  value="messages" 
                  className="justify-start"
                  onClick={() => navigate("/messages")}
                >
                  Messages
                </TabsTrigger>
                
                <TabsTrigger 
                  value="settings" 
                  className="justify-start"
                >
                  Account Settings
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          
          {/* Main Content */}
          <div className="flex-1">
            <div className="p-6 border rounded-lg bg-card">
              {children}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfileLayout;
