
import React, { useEffect, useRef, useState } from "react";
import { mockConversations, mockMessages } from "@/client/data/mockMessages";
import { Avatar, AvatarFallback, AvatarImage } from "@/client/components/ui/avatar";
import { Button } from "@/client/components/ui/button";
import { Input } from "@/client/components/ui/input";
import { Paperclip, Phone, Send, Video } from "lucide-react";

interface MessageChatProps {
  conversationId: string;
}

const MessageChat = ({ conversationId }: MessageChatProps) => {
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState(
    mockConversations.find(c => c.id === conversationId)
  );
  const [messages, setMessages] = useState(
    mockMessages.filter(m => m.conversationId === conversationId)
  );
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setConversation(mockConversations.find(c => c.id === conversationId));
    setMessages(mockMessages.filter(m => m.conversationId === conversationId));
  }, [conversationId]);
  
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    // Add new message to the list (in a real app, this would be sent to an API)
    const newMessage = {
      id: `msg-${Date.now()}`,
      conversationId,
      senderId: "current-user",
      content: message,
      timestamp: new Date().toISOString(),
      isRead: true
    };
    
    setMessages([...messages, newMessage]);
    setMessage("");
  };
  
  if (!conversation) return null;

  return (
    <div className="flex flex-col h-full">
      {/* Chat header */}
      <div className="border-b p-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Avatar>
            <AvatarImage src={conversation.participant.avatar} />
            <AvatarFallback>
              {conversation.participant.name.substring(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-medium">{conversation.participant.name}</h3>
            <p className="text-sm text-muted-foreground">
              {conversation.participant.role === 'agent' ? 'Real Estate Agent' : 'Buyer'}
            </p>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <Button variant="ghost" size="icon">
            <Phone className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Video className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      {/* Messages area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => {
          const isCurrentUser = msg.senderId === "current-user";
          return (
            <div 
              key={msg.id}
              className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'}`}
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
                className={`p-3 rounded-lg max-w-[80%] ${
                  isCurrentUser 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted'
                }`}
              >
                <p>{msg.content}</p>
                <p className={`text-xs mt-1 ${isCurrentUser ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                  {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>
      
      {/* Message input */}
      <div className="border-t p-4">
        <form onSubmit={handleSendMessage} className="flex space-x-2">
          <Button type="button" variant="ghost" size="icon" className="shrink-0">
            <Paperclip className="h-5 w-5" />
          </Button>
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1"
          />
          <Button type="submit" className="shrink-0">
            <Send className="h-4 w-4 mr-2" />
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default MessageChat;
