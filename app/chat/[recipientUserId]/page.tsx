import React from 'react';
import Input from '@/components/chat/message-input';
import Message from '@/components/chat/message';
import { getChatTimeLineData } from '@/lib/data';
import ChatHeader from '@/components/chat/header';
import { auth } from '@/auth';

async function ChatPage({ params }: { params: { recipientUserId: string } }) {
  const currentChatDetails = await getChatTimeLineData(params.recipientUserId);
  const session = await auth();
  return (
    currentChatDetails?.recipientUserDetails && (
      <main className="min-w-[70%] flex-grow items-center flex-row p-2 bg-black text-white dark:bg-slate ">
        <header className="flex items-center justify-between">
          <ChatHeader userDetails={currentChatDetails?.recipientUserDetails} />
        </header>
        <section
          id="message-container"
          className=" min-h-[88%] max-h-[88%] overflow-scroll  text-gray-400 p-1 mb-2 gap-2 rounded-lg bg-sigMain border border-sigColorBgBorder"
        >
          {currentChatDetails?.messages?.length ? (
            currentChatDetails?.messages.map((message) => {
              return (
                <Message
                  key={message._id.toString()}
                  message={message}
                  recipientUserName={
                    currentChatDetails?.recipientUserDetails?.fullName ?? ''
                  }
                />
              );
            })
          ) : (
            <h2>No chat</h2>
          )}
        </section>
        <footer className="flex items-center justify-center">
          <Input params={params} senderId={session?.user?._id ?? ''} />
        </footer>
      </main>
    )
  );
}

export default ChatPage;
