
import { BuyerProfile, AgentProfile } from "@/types/user";

export const mockBuyerProfile: BuyerProfile = {
  id: "b1",
  name: "Rahul Sharma",
  email: "rahul.sharma@gmail.com",
  phone: "+91 98765 43210",
  avatar: "/assets/users/buyer-1.jpg",
  role: "buyer",
  createdAt: new Date("2023-06-15"),
  location: "Mumbai, Maharashtra",
  interestedIn: ["buy", "rent"],
  favoriteProperties: ["p1", "p3", "p7"],
  preferences: {
    propertyTypes: ["apartment", "villa"],
    budget: {
      min: 50,
      max: 120
    },
    locations: ["Andheri", "Bandra", "Powai"],
    bhk: [2, 3]
  }
};

export const mockAgentProfile: AgentProfile = {
  id: "a1",
  name: "Priya Patel",
  email: "priya.patel@realtyone.in",
  phone: "+91 87654 32109",
  avatar: "/assets/users/agent-1.jpg",
  role: "agent",
  createdAt: new Date("2022-09-10"),
  agency: "RealtyOne India",
  experience: 7,
  location: "Bangalore, Karnataka",
  areas: ["Whitefield", "Indiranagar", "Koramangala", "Electronic City"],
  listings: ["p2", "p4", "p6", "p8"],
  specialties: ["Luxury Apartments", "Commercial Properties", "NRI Investments"],
  bio: "With over 7 years of experience in Bangalore real estate market, I specialize in helping clients find their dream homes in the city's most sought-after neighborhoods. My expertise lies in luxury apartments and commercial properties, with a focus on delivering exceptional service.",
  ratings: 4.8,
  verificationStatus: "verified"
};

// Helper function to get user based on role
export function getProfileByRole(role: "buyer" | "agent") {
  return role === "buyer" ? mockBuyerProfile : mockAgentProfile;
}
