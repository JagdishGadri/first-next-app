import React from 'react';
import Input from '@/components/chat/message-input';
import Message from '@/components/chat/message';
import { getChatTimeLineData } from '@/lib/data';
import Header from '@/components/chat/header';

async function ChatPage({ params }: { params: { recipientUserId: string } }) {
  const currentChatDetails = await getChatTimeLineData(params.recipientUserId);

  return (
    currentChatDetails?.recipientUserDetails && (
      <main className="min-w-[70%] flex-grow items-center flex-row p-2 ">
        <header className="flex items-center justify-between">
          <Header userDetails={currentChatDetails?.recipientUserDetails} />
        </header>
        <section className="h-[90%]">
          {currentChatDetails?.messages?.length ? (
            currentChatDetails?.messages.map((message) => {
              return <Message key={message._id.toString()} message={message} />;
            })
          ) : (
            <h2>No chat</h2>
          )}
        </section>
        <footer className="flex items-center justify-center">
          <Input params={params} />
        </footer>
      </main>
    )
  );
}

export default ChatPage;
