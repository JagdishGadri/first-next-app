'use client';
import { sendMessageAction } from '@/lib/actions';
import React, { useState } from 'react';

type Props = { params: { recipientUserId: string } };

function Input({ params }: Props) {
  const [messageContent, setMessageContent] = useState<string>('');
  const receiverId = params.recipientUserId;
  return (
    <>
      <input
        type="text"
        className="border-b-sigColorBgBorder p-1 flex-1 px-4 py-2 border rounded focus:outline-none"
        onBlur={(e) => setMessageContent(e.target.value)}
      />
      <button
        onClick={async () => {
          console.log({ messageContent });
          await sendMessageAction(receiverId, messageContent, 'text');
        }}
        className="px-4 py-2 bg-gray-500 text-white font-semibold rounded border-b-sigColorBgBorder p-1 hover:bg-sigBackgroundFeedHover focus:outline-none focus:ring-2"
      >
        Send
      </button>
    </>
  );
}

export default Input;
