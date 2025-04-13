
import React, { useState } from "react";
import MessagesLayout from "@/client/components/messages/MessagesLayout";
import MessageChat from "@/client/components/messages/MessageChat";
import { mockConversations } from "@/client/data/mockMessages";

const MessagesPage = () => {
  const [selectedConversation, setSelectedConversation] = useState(mockConversations[0]?.id || null);

  return (
    <MessagesLayout 
      selectedConversationId={selectedConversation} 
      onSelectConversation={setSelectedConversation}
    >
      {selectedConversation ? (
        <MessageChat conversationId={selectedConversation} />
      ) : (
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <h3 className="text-lg font-medium text-gray-700">Select a conversation</h3>
            <p className="text-muted-foreground">Choose a conversation to start messaging</p>
          </div>
        </div>
      )}
    </MessagesLayout>
  );
};

export default MessagesPage;
