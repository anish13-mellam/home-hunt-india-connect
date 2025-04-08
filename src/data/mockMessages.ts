
// Mock conversation and message data

export interface Participant {
  id: string;
  name: string;
  avatar?: string;
  role: "buyer" | "agent";
}

export interface Conversation {
  id: string;
  participant: Participant; // The other participant (not current user)
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
}

export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  content: string;
  timestamp: string;
  isRead: boolean;
}

// Mock conversations
export const mockConversations: Conversation[] = [
  {
    id: "conv-1",
    participant: {
      id: "user-2",
      name: "Priya Sharma",
      avatar: "https://randomuser.me/api/portraits/women/23.jpg",
      role: "agent"
    },
    lastMessage: "I can show you the apartment on Saturday at 2 PM",
    lastMessageTime: "10:23 AM",
    unreadCount: 2,
  },
  {
    id: "conv-2",
    participant: {
      id: "user-3",
      name: "Rahul Mehta",
      avatar: "https://randomuser.me/api/portraits/men/44.jpg",
      role: "agent"
    },
    lastMessage: "The owner is asking for 95 lakhs, but there's room for negotiation",
    lastMessageTime: "Yesterday",
    unreadCount: 0,
  },
  {
    id: "conv-3",
    participant: {
      id: "user-4",
      name: "Sunita Patel",
      avatar: "https://randomuser.me/api/portraits/women/67.jpg",
      role: "agent"
    },
    lastMessage: "Yes, this property has 24-hour water supply and power backup",
    lastMessageTime: "Monday",
    unreadCount: 0,
  },
  {
    id: "conv-4",
    participant: {
      id: "user-5",
      name: "Arjun Singh",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      role: "buyer"
    },
    lastMessage: "I'm interested in your listing in Koramangala",
    lastMessageTime: "Apr 15",
    unreadCount: 1,
  },
  {
    id: "conv-5",
    participant: {
      id: "user-6",
      name: "Meera Reddy",
      avatar: "https://randomuser.me/api/portraits/women/91.jpg",
      role: "buyer"
    },
    lastMessage: "What are the maintenance charges for this property?",
    lastMessageTime: "Apr 12",
    unreadCount: 0,
  }
];

// Mock messages
export const mockMessages: Message[] = [
  // Conversation 1
  {
    id: "msg-1",
    conversationId: "conv-1",
    senderId: "current-user",
    content: "Hi Priya, I'm interested in the 2BHK apartment in Indiranagar you listed.",
    timestamp: "2025-04-07T09:20:00",
    isRead: true
  },
  {
    id: "msg-2",
    conversationId: "conv-1",
    senderId: "user-2",
    content: "Hello! Thanks for your interest. It's a great property with modern amenities.",
    timestamp: "2025-04-07T09:25:00",
    isRead: true
  },
  {
    id: "msg-3",
    conversationId: "conv-1",
    senderId: "current-user",
    content: "Can I schedule a viewing this weekend?",
    timestamp: "2025-04-07T09:30:00",
    isRead: true
  },
  {
    id: "msg-4",
    conversationId: "conv-1",
    senderId: "user-2",
    content: "Absolutely! I have slots available on Saturday. Would morning or afternoon work better for you?",
    timestamp: "2025-04-07T09:40:00",
    isRead: true
  },
  {
    id: "msg-5",
    conversationId: "conv-1",
    senderId: "current-user",
    content: "Afternoon would be perfect. Around 2 PM?",
    timestamp: "2025-04-07T10:15:00",
    isRead: true
  },
  {
    id: "msg-6",
    conversationId: "conv-1",
    senderId: "user-2",
    content: "I can show you the apartment on Saturday at 2 PM",
    timestamp: "2025-04-07T10:23:00",
    isRead: false
  },
  
  // Conversation 2
  {
    id: "msg-7",
    conversationId: "conv-2",
    senderId: "current-user",
    content: "Hi Rahul, what's the best price you can offer for the villa in Whitefield?",
    timestamp: "2025-04-06T14:10:00",
    isRead: true
  },
  {
    id: "msg-8",
    conversationId: "conv-2",
    senderId: "user-3",
    content: "Hello! The owner is asking for 95 lakhs, but there's room for negotiation.",
    timestamp: "2025-04-06T14:30:00",
    isRead: true
  },
  
  // Conversation 3
  {
    id: "msg-9",
    conversationId: "conv-3",
    senderId: "current-user",
    content: "Hello Sunita, does the apartment in HSR Layout have power backup?",
    timestamp: "2025-04-04T11:05:00",
    isRead: true
  },
  {
    id: "msg-10",
    conversationId: "conv-3",
    senderId: "user-4",
    content: "Yes, this property has 24-hour water supply and power backup",
    timestamp: "2025-04-04T11:20:00",
    isRead: true
  },
  
  // Conversation 4
  {
    id: "msg-11",
    conversationId: "conv-4",
    senderId: "user-5",
    content: "I'm interested in your listing in Koramangala",
    timestamp: "2025-04-15T16:45:00",
    isRead: false
  },
  
  // Conversation 5
  {
    id: "msg-12",
    conversationId: "conv-5",
    senderId: "user-6",
    content: "What are the maintenance charges for this property?",
    timestamp: "2025-04-12T13:15:00",
    isRead: true
  },
  {
    id: "msg-13",
    conversationId: "conv-5",
    senderId: "current-user",
    content: "The maintenance is approximately Rs. 3500 per month which includes security, common area maintenance, and water charges.",
    timestamp: "2025-04-12T13:30:00",
    isRead: true
  }
];
