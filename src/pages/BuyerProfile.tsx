
import React, { useState } from "react";
import ProfileLayout from "@/components/profile/ProfileLayout";
import { mockBuyerProfile } from "@/data/mockUsers";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
  })
});

const BuyerProfile = () => {
  const [activeTab, setActiveTab] = useState("profile");
  
  // Get favorite properties
  const favoriteProperties = featuredProperties.filter(property => 
    mockBuyerProfile.favoriteProperties.includes(property.id)
  );
  
  const form = useForm<z.infer<typeof profileFormSchema>>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: mockBuyerProfile.name,
      email: mockBuyerProfile.email,
      phone: mockBuyerProfile.phone,
      location: mockBuyerProfile.location,
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
    <ProfileLayout activeTab={activeTab} role="buyer" user={mockBuyerProfile}>
      <Tabs defaultValue="profile" onValueChange={setActiveTab}>
        <TabsContent value="profile" className="mt-0">
          <h1 className="text-2xl font-semibold mb-6">My Profile</h1>
          
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
              </div>

              <div>
                <Button type="submit">Update Profile</Button>
              </div>
            </form>
          </Form>
        </TabsContent>
        
        <TabsContent value="favorites" className="mt-0">
          <h1 className="text-2xl font-semibold mb-6">Saved Properties</h1>
          
          {favoriteProperties.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <p className="text-lg text-muted-foreground">You haven't saved any properties yet.</p>
                <Button variant="outline" className="mt-4">Browse Properties</Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {favoriteProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="preferences" className="mt-0">
          <h1 className="text-2xl font-semibold mb-6">My Preferences</h1>
          
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Property Preferences</CardTitle>
              <CardDescription>Set your preferences to receive personalized property recommendations.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label>Property Type</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {mockBuyerProfile.preferences?.propertyTypes.map((type) => (
                      <div key={type} className="px-3 py-1 bg-muted rounded-full text-sm capitalize">
                        {type}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <Label>Budget Range</Label>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="px-3 py-1 bg-muted rounded-full text-sm">
                      ₹{mockBuyerProfile.preferences?.budget.min} Lakh - 
                      ₹{mockBuyerProfile.preferences?.budget.max} Lakh
                    </span>
                  </div>
                </div>
                
                <div>
                  <Label>Preferred Locations</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {mockBuyerProfile.preferences?.locations.map((location) => (
                      <div key={location} className="px-3 py-1 bg-muted rounded-full text-sm">
                        {location}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <Label>BHK</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {mockBuyerProfile.preferences?.bhk.map((bhk) => (
                      <div key={bhk} className="px-3 py-1 bg-muted rounded-full text-sm">
                        {bhk} BHK
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="mt-6">Edit Preferences</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Edit Preferences</DialogTitle>
                    <DialogDescription>
                      Update your property preferences to receive tailored recommendations.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-1 gap-2">
                      <Label htmlFor="propertyTypes">Property Types</Label>
                      <Input id="propertyTypes" defaultValue={mockBuyerProfile.preferences?.propertyTypes.join(", ")} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid grid-cols-1 gap-2">
                        <Label htmlFor="minBudget">Min Budget (Lakh)</Label>
                        <Input id="minBudget" type="number" defaultValue={mockBuyerProfile.preferences?.budget.min} />
                      </div>
                      <div className="grid grid-cols-1 gap-2">
                        <Label htmlFor="maxBudget">Max Budget (Lakh)</Label>
                        <Input id="maxBudget" type="number" defaultValue={mockBuyerProfile.preferences?.budget.max} />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      <Label htmlFor="locations">Preferred Locations</Label>
                      <Input id="locations" defaultValue={mockBuyerProfile.preferences?.locations.join(", ")} />
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      <Label htmlFor="bhk">BHK Requirements</Label>
                      <Input id="bhk" defaultValue={mockBuyerProfile.preferences?.bhk.join(", ")} />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button onClick={() => toast({ title: "Preferences updated" })}>Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
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

export default BuyerProfile;
