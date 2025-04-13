
import React from "react";
import Layout from "@/client/components/layout/Layout";
import { mockConversations } from "@/client/data/mockMessages";
import { Avatar, AvatarFallback, AvatarImage } from "@/client/components/ui/avatar";
import { cn } from "@/client/lib/utils";
import { Search } from "lucide-react";
import { Input } from "@/client/components/ui/input";

interface MessagesLayoutProps {
  children: React.ReactNode;
  selectedConversationId: string | null;
  onSelectConversation: (id: string) => void;
}

const MessagesLayout = ({ 
  children, 
  selectedConversationId,
  onSelectConversation 
}: MessagesLayoutProps) => {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-4 h-[700px]">
            {/* Sidebar with conversations */}
            <div className="col-span-1 border-r">
              <div className="p-4 border-b">
                <h2 className="font-semibold text-xl">Messages</h2>
                <div className="mt-3 relative">
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search conversations..." 
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="overflow-y-auto h-[calc(700px-72px)]">
                {mockConversations.map((conversation) => (
                  <div 
                    key={conversation.id}
                    className={cn(
                      "flex items-center gap-3 p-3 border-b cursor-pointer hover:bg-slate-50 transition-colors",
                      selectedConversationId === conversation.id && "bg-orange-50"
                    )}
                    onClick={() => onSelectConversation(conversation.id)}
                  >
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={conversation.participant.avatar} />
                      <AvatarFallback>
                        {conversation.participant.name.substring(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-baseline">
                        <h3 className="font-medium truncate">{conversation.participant.name}</h3>
                        <span className="text-xs text-muted-foreground">{conversation.lastMessageTime}</span>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">
                        {conversation.lastMessage}
                      </p>
                    </div>
                    {conversation.unreadCount > 0 && (
                      <div className="bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        {conversation.unreadCount}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Main chat area */}
            <div className="col-span-3 flex flex-col h-full">
              {children}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MessagesLayout;
