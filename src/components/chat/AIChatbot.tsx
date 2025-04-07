
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Send, User, Bot, X, Minimize2, Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const AI_RESPONSES = [
  "Properties in Koramangala, Bangalore start from ₹80 lakhs for a 1BHK and can go up to ₹5 crore for premium apartments.",
  "Rental properties in Whitefield typically range from ₹15,000 to ₹50,000 per month depending on the size and amenities.",
  "The home loan interest rates currently start from 8.50% p.a. with major banks like SBI and HDFC.",
  "Popular areas for investment in Mumbai include Powai, Andheri West, and Bandra, with expected appreciation of 8-12% annually.",
  "The registration process in Tamil Nadu includes stamp duty (7% of property value) and registration fee (4% of property value).",
  "For NRI buyers, you'll need PAN card, passport, visa/OCI card, and overseas bank account statements for the last 6 months.",
  "RERA certification ensures that the property is legally verified and safe to purchase. Always check for RERA registration number.",
  "Plots in Hyderabad's peripheral areas like Shamshabad and Adibatla are seeing good appreciation with infrastructure developments.",
  "Rental yield in major Indian cities averages between 2-3.5% annually, with commercial properties offering higher returns of 6-8%."
];

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm HomeHunt Assistant. How can I help you find your perfect property today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      isUser: true,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    
    // Simulate AI response after a short delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: AI_RESPONSES[Math.floor(Math.random() * AI_RESPONSES.length)],
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };
  
  const toggleChatbot = () => {
    if (isMinimized) {
      setIsMinimized(false);
    } else {
      setIsOpen(!isOpen);
    }
  };
  
  const minimizeChatbot = () => {
    setIsMinimized(true);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
      {/* Chat button */}
      <Button 
        onClick={toggleChatbot}
        className={cn(
          "rounded-full h-14 w-14 shadow-lg flex items-center justify-center",
          !isOpen && !isMinimized ? "animate-pulse-gentle" : ""
        )}
      >
        <MessageCircle size={24} />
      </Button>
      
      {/* Chat window */}
      {isOpen && (
        <Card className={cn(
          "mt-4 w-80 sm:w-96 overflow-hidden transition-all duration-300",
          isMinimized ? "h-14" : "h-[500px] max-h-[80vh]"
        )}>
          {/* Chat header */}
          <div className="bg-primary text-white p-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot size={18} />
              <h3 className="font-medium">HomeHunt Assistant</h3>
            </div>
            <div className="flex items-center gap-1">
              {!isMinimized ? (
                <>
                  <Button variant="ghost" size="icon" className="h-6 w-6 text-white hover:bg-primary-foreground/20" onClick={minimizeChatbot}>
                    <Minimize2 size={14} />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-6 w-6 text-white hover:bg-primary-foreground/20" onClick={() => setIsOpen(false)}>
                    <X size={14} />
                  </Button>
                </>
              ) : (
                <Button variant="ghost" size="icon" className="h-6 w-6 text-white hover:bg-primary-foreground/20" onClick={() => setIsMinimized(false)}>
                  <Maximize2 size={14} />
                </Button>
              )}
            </div>
          </div>
          
          {!isMinimized && (
            <>
              {/* Chat messages */}
              <CardContent className="p-0 flex flex-col h-[calc(500px-106px)]">
                <div className="flex-grow overflow-y-auto p-3">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={cn(
                        "mb-3 max-w-[85%] rounded-lg p-3",
                        message.isUser 
                          ? "ml-auto bg-primary text-primary-foreground" 
                          : "bg-muted"
                      )}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        {message.isUser ? (
                          <User size={14} className="text-primary-foreground" />
                        ) : (
                          <Bot size={14} />
                        )}
                        <span className="text-xs opacity-70">
                          {message.isUser ? "You" : "Assistant"}
                        </span>
                      </div>
                      <p className="text-sm">{message.text}</p>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </CardContent>
              
              {/* Chat input */}
              <div className="border-t p-3">
                <form onSubmit={handleSendMessage} className="flex gap-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-grow"
                  />
                  <Button type="submit" size="icon" disabled={!input.trim()}>
                    <Send size={18} />
                  </Button>
                </form>
              </div>
            </>
          )}
        </Card>
      )}
    </div>
  );
};

export default AIChatbot;
