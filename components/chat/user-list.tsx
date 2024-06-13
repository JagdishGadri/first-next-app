// 'use client';
import React, { Suspense } from 'react';
import UserCard from './user-card';
import { auth } from '@/auth';
import { getUsersForSidebar } from '@/lib/data';
import { ChatsSkeleton } from '../skeletons/chat-skeleton';
import UserSearch from './user-search';

// const sleep = (wait: number) =>
//   new Promise((resolve) => setTimeout(() => resolve(''), wait));

async function ChatUsers() {
  const session = await auth();
  const users = session?.user ? await getUsersForSidebar(session.user._id) : [];
  return (
    <div>
      {users?.map((user) => {
        return <UserCard key={user._id} userDetails={user} />;
      })}
    </div>
  );
}

async function ChatUserList() {
  return (
    <>
      <UserSearch />
      <Suspense fallback={<ChatsSkeleton />}>
        <ChatUsers />
      </Suspense>
    </>
  );
}

export default ChatUserList;
