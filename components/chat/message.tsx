import { auth } from '@/auth';
import { IMessageDocument } from '@/models/messageModel';
import React from 'react';
import Sticker from './sticker';
import { getTimeString } from '@/lib/utils';

type Props = { message: IMessageDocument; recipientUserName: string };

async function Message({ message, recipientUserName }: Props) {
  const session = await auth();
  return (
    <>
      <div className=" flex text-xl mb-1 mt-2 gap-2 items-center">
        {message?.sender?.toString() === session?.user._id
          ? session?.user?.name
          : recipientUserName}
        <div className="text-sm">
          {message?.createdAt ? getTimeString(message.createdAt) : '-'}
        </div>
      </div>
      <div
        className={`flex ${message.sender === session?.user._id && 'mb-3'}  `}
      >
        <div
          className={`rounded-full ml-2  w-[5px]  ${message.sender.toString() === session?.user._id ? 'bg-blue-400' : 'bg-pink-400'} `}
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
