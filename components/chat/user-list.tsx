'use client';

import React, { useCallback, useEffect, useState } from 'react';
import UserCard from './user-card';
import { IUserDocument } from '@/models/userModel';
import { useSearchParams } from 'next/navigation';
import { QueryParams } from '@/types/common';

function ChatUsersList() {
  const [userList, setUserList] = useState<IUserDocument[]>([]);
  const searchParams = useSearchParams();
  const getUsersList = useCallback(async () => {
    try {
      const res = await fetch(
        `api/users?user=${searchParams.get(QueryParams.USER) ?? ''}`
      );
      const userList = await res.json();
      setUserList(userList);
    } catch (err) {
      throw err;
    }
  }, [searchParams]);
  useEffect(() => {
    getUsersList();
  }, [getUsersList]);

  return (
    <div>
      {userList?.map((user) => {
        return <UserCard key={user._id} userDetails={user} />;
      })}
    </div>
  );
}
export default ChatUsersList;
