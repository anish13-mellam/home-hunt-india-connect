
import React, { useState } from "react";
import ProfileLayout from "@/components/profile/ProfileLayout";
import { mockAgentProfile } from "@/data/mockUsers";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Check, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "@/hooks/use-toast";
import PropertyCard from "@/components/properties/PropertyCard";
import { featuredProperties } from "@/data/mockData";

const profileFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  location: z.string().min(2, {
    message: "Location must be at least 2 characters.",
  }),
  bio: z.string().min(10, {
    message: "Bio must be at least 10 characters.",
  }),
  agency: z.string().min(2, {
    message: "Agency name must be at least 2 characters.",
  }),
  experience: z.string().min(1, {
    message: "Experience is required.",
  }),
});

const AgentProfile = () => {
  const [activeTab, setActiveTab] = useState("profile");
  
  // Get agent's listings
  const agentListings = featuredProperties.filter(property => 
    mockAgentProfile.listings.includes(property.id)
  );
  
  const form = useForm<z.infer<typeof profileFormSchema>>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: mockAgentProfile.name,
      email: mockAgentProfile.email,
      phone: mockAgentProfile.phone,
      location: mockAgentProfile.location,
      bio: mockAgentProfile.bio,
      agency: mockAgentProfile.agency,
      experience: mockAgentProfile.experience.toString(),
    },
  });

  function onSubmit(values: z.infer<typeof profileFormSchema>) {
    toast({
      title: "Profile updated successfully!",
      description: "Your profile information has been updated.",
    });
    console.log(values);
  }
  
  return (
    <ProfileLayout activeTab={activeTab} role="agent" user={mockAgentProfile}>
      <Tabs defaultValue="profile" onValueChange={setActiveTab}>
        <TabsContent value="profile" className="mt-0">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold">My Profile</h1>
            <div className="flex items-center">
              {mockAgentProfile.verificationStatus === "verified" ? (
                <Badge className="flex items-center gap-1 bg-green-100 text-green-800 hover:bg-green-200">
                  <Check className="h-3 w-3" /> Verified Agent
                </Badge>
              ) : mockAgentProfile.verificationStatus === "pending" ? (
                <Badge className="flex items-center gap-1 bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
                  <Clock className="h-3 w-3" /> Verification Pending
                </Badge>
              ) : (
                <Badge className="bg-red-100 text-red-800 hover:bg-red-200">Not Verified</Badge>
              )}
            </div>
          </div>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input {...field} type="email" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input {...field} type="tel" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="agency"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Agency/Company</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="experience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Years of Experience</FormLabel>
                      <FormControl>
                        <Input {...field} type="number" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bio</FormLabel>
                    <FormControl>
                      <Textarea {...field} rows={4} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div>
                <Label>Areas Served</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {mockAgentProfile.areas.map((area) => (
                    <div key={area} className="px-3 py-1 bg-muted rounded-full text-sm">
                      {area}
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <Label>Specialties</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {mockAgentProfile.specialties.map((specialty) => (
                    <div key={specialty} className="px-3 py-1 bg-muted rounded-full text-sm">
                      {specialty}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Button type="submit">Update Profile</Button>
              </div>
            </form>
          </Form>
        </TabsContent>
        
        <TabsContent value="listings" className="mt-0">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold">My Listings</h1>
            <Button>Add New Listing</Button>
          </div>
          
          {agentListings.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <p className="text-lg text-muted-foreground">You don't have any active listings.</p>
                <Button className="mt-4">Create Your First Listing</Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {agentListings.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="leads" className="mt-0">
          <h1 className="text-2xl font-semibold mb-6">My Leads</h1>
          
          <Card>
            <CardHeader>
              <CardTitle>Customer Leads</CardTitle>
              <CardDescription>Track your potential customers and their inquiries</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="border rounded-md mb-4">
                <div className="p-4 border-b">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">Vikram Mehta</p>
                      <p className="text-sm text-muted-foreground">Interested in: 3 BHK Apartment in Powai</p>
                      <p className="text-sm text-muted-foreground">Budget: ₹1.2 - 1.8 Crore</p>
                    </div>
                    <Badge>New Lead</Badge>
                  </div>
                  <div className="mt-2 flex gap-2">
                    <Button size="sm" variant="outline">Call</Button>
                    <Button size="sm">Message</Button>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">Anjali Desai</p>
                      <p className="text-sm text-muted-foreground">Interested in: Rentals in Indiranagar</p>
                      <p className="text-sm text-muted-foreground">Budget: ₹35,000 - 50,000 per month</p>
                    </div>
                    <Badge variant="outline">Follow Up</Badge>
                  </div>
                  <div className="mt-2 flex gap-2">
                    <Button size="sm" variant="outline">Call</Button>
                    <Button size="sm">Message</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="messages" className="mt-0">
          <h1 className="text-2xl font-semibold mb-6">My Messages</h1>
          
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-lg text-muted-foreground">Coming Soon! Chat functionality will be available in the next update.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="settings" className="mt-0">
          <h1 className="text-2xl font-semibold mb-6">Account Settings</h1>
          
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Verification Status</CardTitle>
              <CardDescription>Your account verification status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 mb-4">
                <div>
                  {mockAgentProfile.verificationStatus === "verified" ? (
                    <Badge className="flex items-center gap-1 bg-green-100 text-green-800 hover:bg-green-200">
                      <Check className="h-3 w-3" /> Verified Agent
                    </Badge>
                  ) : mockAgentProfile.verificationStatus === "pending" ? (
                    <Badge className="flex items-center gap-1 bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
                      <Clock className="h-3 w-3" /> Verification Pending
                    </Badge>
                  ) : (
                    <Badge className="bg-red-100 text-red-800 hover:bg-red-200">Not Verified</Badge>
                  )}
                </div>
              </div>
              {mockAgentProfile.verificationStatus === "verified" ? (
                <p className="text-sm text-muted-foreground">Your account is verified. You can now post listings and contact clients.</p>
              ) : mockAgentProfile.verificationStatus === "pending" ? (
                <p className="text-sm text-muted-foreground">Your account verification is in progress. We will notify you once it's complete.</p>
              ) : (
                <Button>Request Verification</Button>
              )}
            </CardContent>
          </Card>
          
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>Update your account password</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div className="grid grid-cols-1 gap-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="grid grid-cols-1 gap-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
                <Button onClick={() => toast({ title: "Password updated successfully" })}>
                  Change Password
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Account Deletion</CardTitle>
              <CardDescription>Permanently delete your account and all data</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="destructive">Delete Account</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </ProfileLayout>
  );
};

export default AgentProfile;
