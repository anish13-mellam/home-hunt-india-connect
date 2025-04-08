
export type UserRole = "buyer" | "agent" | "admin";

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
  role: UserRole;
  createdAt: Date;
}

export interface BuyerProfile extends User {
  role: "buyer";
  location: string;
  interestedIn: ("buy" | "rent")[];
  favoriteProperties: string[];
  preferences?: {
    propertyTypes: string[];
    budget: {
      min: number;
      max: number;
    };
    locations: string[];
    bhk: number[];
  };
}

export interface AgentProfile extends User {
  role: "agent";
  agency: string;
  experience: number;
  location: string;
  areas: string[];
  listings: string[];
  specialties: string[];
  bio: string;
  ratings: number;
  verificationStatus: "pending" | "verified" | "rejected";
}
