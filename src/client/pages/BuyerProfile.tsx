
import React from "react";
import ProfileLayout from "@/client/components/profile/ProfileLayout";

const BuyerProfile = () => {
  return (
    <ProfileLayout userType="buyer">
      <div className="space-y-6">
        <h1 className="text-2xl font-semibold">Buyer Profile</h1>
        <p className="text-muted-foreground">
          This is your buyer dashboard where you can manage your saved properties, inquiries, and account settings.
        </p>
        
        {/* Placeholder for real content */}
        <div className="p-6 border rounded-md bg-muted/50">
          <p>Buyer profile content will be implemented here</p>
        </div>
      </div>
    </ProfileLayout>
  );
};

export default BuyerProfile;
