import React from "react";
import UserCard from "./user-card";
import { auth } from "@/auth";
import { getUsersForSidebar } from "@/lib/data";

async function ChatUserList() {
  const session = await auth();
  const users = session?.user ? await getUsersForSidebar(session.user._id) : [];
  console.log("users", users);
  return (
    <div>
      <UserCard />
    </div>
  );
}

export default ChatUserList;
