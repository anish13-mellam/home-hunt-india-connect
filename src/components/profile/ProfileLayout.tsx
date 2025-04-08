
import React from "react";
import Layout from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserRole } from "@/types/user";

interface ProfileLayoutProps {
  children: React.ReactNode;
  activeTab: string;
  role: UserRole;
  user: {
    name: string;
    email: string;
    avatar?: string;
  };
}

const ProfileLayout = ({ children, activeTab, role, user }: ProfileLayoutProps) => {
  // Create initials from name for avatar fallback
  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .substring(0, 2);

  return (
    <Layout>
      <div className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Profile Sidebar */}
          <div className="w-full md:w-1/4">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex flex-col items-center mb-6">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="text-xl">{initials}</AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-semibold">{user.name}</h2>
                <p className="text-muted-foreground">{user.email}</p>
                <div className="mt-2 px-3 py-1 bg-orange-100 text-orange rounded-full text-sm capitalize">
                  {role}
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <nav className="space-y-2">
                <Tabs value={activeTab} className="w-full">
                  <TabsList className="flex flex-col w-full h-auto gap-2">
                    <TabsTrigger 
                      value="profile" 
                      className={`w-full justify-start py-2 ${activeTab === 'profile' ? 'bg-orange-50 text-orange' : ''}`}
                    >
                      Profile
                    </TabsTrigger>
                    
                    {role === 'buyer' && (
                      <>
                        <TabsTrigger 
                          value="favorites" 
                          className={`w-full justify-start py-2 ${activeTab === 'favorites' ? 'bg-orange-50 text-orange' : ''}`}
                        >
                          Saved Properties
                        </TabsTrigger>
                        <TabsTrigger 
                          value="preferences" 
                          className={`w-full justify-start py-2 ${activeTab === 'preferences' ? 'bg-orange-50 text-orange' : ''}`}
                        >
                          Preferences
                        </TabsTrigger>
                      </>
                    )}
                    
                    {role === 'agent' && (
                      <>
                        <TabsTrigger 
                          value="listings" 
                          className={`w-full justify-start py-2 ${activeTab === 'listings' ? 'bg-orange-50 text-orange' : ''}`}
                        >
                          My Listings
                        </TabsTrigger>
                        <TabsTrigger 
                          value="leads" 
                          className={`w-full justify-start py-2 ${activeTab === 'leads' ? 'bg-orange-50 text-orange' : ''}`}
                        >
                          Leads
                        </TabsTrigger>
                      </>
                    )}
                    
                    <TabsTrigger 
                      value="messages" 
                      className={`w-full justify-start py-2 ${activeTab === 'messages' ? 'bg-orange-50 text-orange' : ''}`}
                    >
                      Messages
                    </TabsTrigger>
                    
                    <TabsTrigger 
                      value="settings" 
                      className={`w-full justify-start py-2 ${activeTab === 'settings' ? 'bg-orange-50 text-orange' : ''}`}
                    >
                      Account Settings
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </nav>
            </div>
          </div>
          
          {/* Main Content Area */}
          <div className="w-full md:w-3/4">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <Tabs value={activeTab} className="w-full">
                <TabsContent value={activeTab} className="mt-0">
                  {children}
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfileLayout;
