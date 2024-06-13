import { auth } from '@/auth';
import { IMessageDocument } from '@/models/messageModel';
import React from 'react';
import Sticker from './sticker';

type Props = { message: IMessageDocument; recipientUserName: string };

async function Message({ message, recipientUserName }: Props) {
  const session = await auth();
  return (
    <>
      <div className="text-xl mb-1 mt-2">
        {message.sender.toString() === session?.user._id
          ? session?.user?.name
          : recipientUserName}
      </div>
      <div
        className={`flex ${message.sender === session?.user._id && 'mb-3'}  `}
      >
        <div
          className={`rounded-full ml-2 h-[50px] w-[10px]  ${message.sender === session?.user._id ? 'bg-pink-400' : 'bg-blue-400'} `}
        ></div>
        <span className="ml-1 text-md">
          {message.messageType === 'text' ? (
            message.content
          ) : (
            <Sticker src={message.content} alt="sticker"></Sticker>
          )}
        </span>
      </div>
    </>
  );
}

export default Message;
