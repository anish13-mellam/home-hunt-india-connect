
import React, { useState } from 'react';
import { Button } from "@/client/components/ui/button";
import { Input } from "@/client/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/client/components/ui/sheet";
import { MessageCircle, Send } from "lucide-react";

const AIChatbot = () => {
  const [messages, setMessages] = useState<{text: string, isUser: boolean}[]>([
    { text: "Hello! I'm your HomeHunt assistant. How can I help you today?", isUser: false }
  ]);
  
  const [input, setInput] = useState("");
  
  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { text: input, isUser: true }]);
    setInput("");
    
    // Simulate AI response (in a real app, this would be an API call)
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: "Thanks for your message. I can help you with property searches, pricing details, and mortgage calculations. What specifically are you looking for?", 
        isUser: false 
      }]);
    }, 1000);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className="fixed right-4 bottom-4 h-14 w-14 rounded-full shadow-lg"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent className="h-[80vh] sm:max-w-[400px] flex flex-col p-0">
        <SheetHeader className="p-4 border-b">
          <SheetTitle>HomeHunt Assistant</SheetTitle>
        </SheetHeader>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`p-3 rounded-lg max-w-[80%] ${
                  message.isUser 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>
        
        <div className="p-4 border-t">
          <form 
            className="flex gap-2" 
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
          >
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1"
            />
            <Button type="submit" size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default AIChatbot;
