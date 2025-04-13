
import React, { useState } from "react";
import ProfileLayout from "@/client/components/profile/ProfileLayout";
import { mockBuyerProfile } from "@/client/data/mockUsers";
import { Tabs, TabsContent } from "@/client/components/ui/tabs";
import { Card, CardContent } from "@/client/components/ui/card";
import { Button } from "@/client/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/client/components/ui/form";
import { Input } from "@/client/components/ui/input";
import { Label } from "@/client/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

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
  // In a real app, you would fetch this data from an API
  const user = mockBuyerProfile;
  
  const form = useForm<z.infer<typeof profileFormSchema>>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: user.name,
      email: user.email,
      phone: user.phone,
      location: user.location,
    },
  });

  function onSubmit(values: z.infer<typeof profileFormSchema>) {
    toast("Profile updated successfully!");
    console.log(values);
  }
  
  return (
    <ProfileLayout userType="buyer">
      <div className="space-y-6">
        <h1 className="text-2xl font-semibold">My Profile</h1>
        
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
        
        <Tabs defaultValue="saved">
          <TabsContent value="saved" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">Saved Properties</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {user.favoriteProperties.length > 0 ? (
                    <p>Properties will appear here</p>
                  ) : (
                    <div className="text-center p-6">
                      <p className="text-muted-foreground">You haven't saved any properties yet.</p>
                      <Button variant="outline" className="mt-4">Browse Properties</Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4">Preferences</h2>
            <div className="space-y-4">
              {user.preferences ? (
                <>
                  <div>
                    <Label>Property Type</Label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {user.preferences.propertyTypes.map((type) => (
                        <div key={type} className="px-3 py-1 bg-muted rounded-full text-sm capitalize">
                          {type}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Label>Budget Range</Label>
                    <div className="px-3 py-1 bg-muted rounded-full text-sm inline-block mt-2">
                      ₹{user.preferences.budget.min} Lakh - ₹{user.preferences.budget.max} Lakh
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center p-4">
                  <p className="text-muted-foreground">No preferences set yet.</p>
                  <Button variant="outline" className="mt-4">Set Preferences</Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </ProfileLayout>
  );
};

export default BuyerProfile;
