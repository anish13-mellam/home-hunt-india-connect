
import React, { useState, useEffect, useRef } from "react";
import { mockConversations, mockMessages } from "@/data/mockMessages";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, Phone, Video, MoreVertical } from "lucide-react";
import { toast } from "sonner";

interface MessageChatProps {
  conversationId: string;
}

const MessageChat = ({ conversationId }: MessageChatProps) => {
  const [messages, setMessages] = useState<typeof mockMessages>([]);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const conversation = mockConversations.find((c) => c.id === conversationId);
  
  useEffect(() => {
    // Filter messages for this conversation
    const conversationMessages = mockMessages.filter(
      (msg) => msg.conversationId === conversationId
    );
    setMessages(conversationMessages);
    
    // Scroll to bottom when messages change or conversation changes
    setTimeout(() => {
      scrollToBottom();
    }, 100);
    
    // Reset typing indicator when changing conversations
    setIsTyping(false);
  }, [conversationId]);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newMessage.trim()) return;
    
    // Create a new message
    const newMsg = {
      id: `msg-${Date.now()}`,
      conversationId,
      senderId: "current-user", // Assume current user is sender
      content: newMessage,
      timestamp: new Date().toISOString(),
      isRead: true,
    };
    
    // Add to messages
    setMessages([...messages, newMsg]);
    setNewMessage("");
    
    // Scroll to bottom
    setTimeout(scrollToBottom, 100);
    
    // Show agent is typing
    setIsTyping(true);
    
    // Simulate agent response after 2 seconds
    setTimeout(() => {
      const agentResponse = {
        id: `msg-${Date.now() + 1}`,
        conversationId,
        senderId: conversation?.participant.id || "",
        content: getRandomResponse(),
        timestamp: new Date().toISOString(),
        isRead: false,
      };
      
      setMessages((prevMessages) => [...prevMessages, agentResponse]);
      setIsTyping(false);
      
      // Show notification
      toast("New message", {
        description: `${conversation?.participant.name} sent you a message`,
      });
      
      // Scroll to bottom
      setTimeout(scrollToBottom, 100);
    }, 2000);
  };
  
  const getRandomResponse = () => {
    const responses = [
      "Thanks for your message! I'll check this property for you.",
      "Yes, this property is still available. When would you like to schedule a viewing?",
      "I can show you the property this weekend if you're available.",
      "The owner is looking for a quick sale, so we have some room to negotiate the price.",
      "The neighborhood has excellent schools and amenities nearby.",
      "I'll send you more details about this property shortly.",
      "There's an open house this Sunday from 2-4pm if you'd like to attend.",
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };
  
  if (!conversation) {
    return null;
  }
  
  return (
    <div className="flex flex-col h-full">
      {/* Chat header */}
      <div className="p-4 border-b flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={conversation.participant.avatar} />
            <AvatarFallback>
              {conversation.participant.name.substring(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-medium">{conversation.participant.name}</h3>
            <p className="text-xs text-muted-foreground">
              {conversation.participant.role === "agent" ? "Real Estate Agent" : "Property Buyer"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Phone className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Video className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      {/* Messages area */}
      <div className="flex-grow p-4 overflow-y-auto">
        <div className="space-y-4">
          {messages.map((message) => {
            const isCurrentUser = message.senderId === "current-user";
            
            return (
              <div 
                key={message.id} 
                className={`flex ${isCurrentUser ? "justify-end" : "justify-start"}`}
              >
                {!isCurrentUser && (
                  <Avatar className="h-8 w-8 mr-2 mt-1">
                    <AvatarImage src={conversation.participant.avatar} />
                    <AvatarFallback>
                      {conversation.participant.name.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={`max-w-[70%] p-3 rounded-lg ${
                    isCurrentUser
                      ? "bg-orange-500 text-white rounded-tr-none"
                      : "bg-gray-100 text-gray-800 rounded-tl-none"
                  }`}
                >
                  <p>{message.content}</p>
                  <p className={`text-xs mt-1 ${isCurrentUser ? "text-orange-100" : "text-gray-500"}`}>
                    {new Date(message.timestamp).toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit'
                    })}
                  </p>
                </div>
                {isCurrentUser && (
                  <Avatar className="h-8 w-8 ml-2 mt-1">
                    <AvatarFallback>You</AvatarFallback>
                  </Avatar>
                )}
              </div>
            );
          })}
          
          {isTyping && (
            <div className="flex justify-start">
              <Avatar className="h-8 w-8 mr-2">
                <AvatarImage src={conversation.participant.avatar} />
                <AvatarFallback>
                  {conversation.participant.name.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="bg-gray-100 p-3 rounded-lg rounded-tl-none">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce" 
                       style={{ animationDelay: "0ms" }} />
                  <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce" 
                       style={{ animationDelay: "200ms" }} />
                  <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce" 
                       style={{ animationDelay: "400ms" }} />
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      {/* Message input */}
      <div className="p-4 border-t">
        <form onSubmit={handleSendMessage} className="flex gap-2">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message here..."
            className="flex-grow"
          />
          <Button type="submit" size="icon" disabled={!newMessage.trim()}>
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default MessageChat;
