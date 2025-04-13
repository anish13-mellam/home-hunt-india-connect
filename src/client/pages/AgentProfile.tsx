
import React from "react";
import ProfileLayout from "@/client/components/profile/ProfileLayout";
import { mockAgentProfile } from "@/client/data/mockUsers";
import { Tabs, TabsContent } from "@/client/components/ui/tabs";
import { Card, CardContent } from "@/client/components/ui/card";
import { Button } from "@/client/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/client/components/ui/form";
import { Input } from "@/client/components/ui/input";
import { Label } from "@/client/components/ui/label";
import { Textarea } from "@/client/components/ui/textarea";
import { Badge } from "@/client/components/ui/badge";
import { Check, Clock } from "lucide-react";
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
  // In a real app, you would fetch this data from an API
  const user = mockAgentProfile;
  
  const form = useForm<z.infer<typeof profileFormSchema>>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: user.name,
      email: user.email,
      phone: user.phone,
      location: user.location,
      bio: user.bio,
      agency: user.agency,
      experience: user.experience.toString(),
    },
  });

  function onSubmit(values: z.infer<typeof profileFormSchema>) {
    toast("Profile updated successfully!");
    console.log(values);
  }
  
  return (
    <ProfileLayout userType="agent">
      <div className="space-y-6">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-2xl font-semibold">Agent Profile</h1>
          <div className="flex items-center">
            {user.verificationStatus === "verified" ? (
              <Badge className="flex items-center gap-1 bg-green-100 text-green-800 hover:bg-green-200">
                <Check className="h-3 w-3" /> Verified Agent
              </Badge>
            ) : user.verificationStatus === "pending" ? (
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
                {user.areas.map((area) => (
                  <div key={area} className="px-3 py-1 bg-muted rounded-full text-sm">
                    {area}
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <Label>Specialties</Label>
              <div className="flex flex-wrap gap-2 mt-2">
                {user.specialties.map((specialty) => (
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
        
        <Tabs defaultValue="listings">
          <TabsContent value="listings" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">My Listings</h2>
                  <Button>Add New Listing</Button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {user.listings.length > 0 ? (
                    <p>Listings will appear here</p>
                  ) : (
                    <div className="text-center p-6">
                      <p className="text-muted-foreground">You don't have any active listings.</p>
                      <Button className="mt-4">Create Your First Listing</Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </ProfileLayout>
  );
};

export default AgentProfile;
