
import React from "react";
import ProfileLayout from "@/client/components/profile/ProfileLayout";

const AgentProfile = () => {
  return (
    <ProfileLayout userType="agent">
      <div className="space-y-6">
        <h1 className="text-2xl font-semibold">Agent Profile</h1>
        <p className="text-muted-foreground">
          This is your agent dashboard where you can manage your property listings, client inquiries, and account settings.
        </p>
        
        {/* Placeholder for real content */}
        <div className="p-6 border rounded-md bg-muted/50">
          <p>Agent profile content will be implemented here</p>
        </div>
      </div>
    </ProfileLayout>
  );
};

export default AgentProfile;
