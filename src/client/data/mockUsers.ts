
// Mock user profiles for buyers and agents

export interface UserPreferences {
  propertyTypes: string[];
  budget: {
    min: number;
    max: number;
  };
  locations: string[];
  bhk: number[];
}

export interface BuyerProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  avatar?: string;
  favoriteProperties: string[];
  recentSearches: string[];
  preferences?: UserPreferences;
}

export interface AgentProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  avatar?: string;
  bio: string;
  agency: string;
  experience: number;
  verificationStatus: "verified" | "pending" | "not-verified";
  rating: number;
  listings: string[];
  areas: string[];
  specialties: string[];
}

export const mockBuyerProfile: BuyerProfile = {
  id: "user-1",
  name: "Vikram Khanna",
  email: "vikram@example.com",
  phone: "9876543210",
  location: "Mumbai, Maharashtra",
  avatar: "https://randomuser.me/api/portraits/men/33.jpg",
  favoriteProperties: ["prop-1", "prop-3", "rent-3"],
  recentSearches: ["Mumbai 2 BHK", "Bandra apartments", "Sea-facing properties"],
  preferences: {
    propertyTypes: ["apartment", "villa"],
    budget: {
      min: 80,
      max: 150
    },
    locations: ["Bandra", "Worli", "Andheri"],
    bhk: [2, 3]
  }
};

export const mockAgentProfile: AgentProfile = {
  id: "agent-1",
  name: "Priya Sharma",
  email: "priya@realestateexperts.com",
  phone: "9998887776",
  location: "Mumbai, Maharashtra",
  avatar: "https://randomuser.me/api/portraits/women/23.jpg",
  bio: "Experienced real estate consultant with over 8 years in the Mumbai property market. Specializing in premium residential properties in South Mumbai and Western suburbs.",
  agency: "Real Estate Experts",
  experience: 8,
  verificationStatus: "verified",
  rating: 4.8,
  listings: ["prop-1", "prop-2", "rent-1", "rent-5"],
  areas: ["South Mumbai", "Bandra", "Worli", "Andheri"],
  specialties: ["Luxury Apartments", "Sea-facing Properties", "Investment Properties"]
};
