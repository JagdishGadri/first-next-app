import { auth } from '@/auth';
import { IMessageDocument } from '@/models/messageModel';
import React from 'react';

type Props = { message: IMessageDocument };

async function Message({ message }: Props) {
  const session = await auth();
  return (
    <>
      <div
        className={`flex ${message.sender === session?.user._id && 'mb - 3'} items-end `}
      >
        <div
          className={` ml-2 h-[50px] w-[10px]  ${message.sender === session?.user._id ? 'bg-pink-400' : 'bg-blue-400'} `}
        ></div>
        <span className="ml-1 text-md">{message.content}</span>
      </div>
    </>
  );
}

export default Message;
