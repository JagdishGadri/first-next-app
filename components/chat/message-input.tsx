'use client';
import { sendMessageAction } from '@/lib/actions';
import React, { useRef, useState } from 'react';
import StickerPopover from './sticker-popover';

function Input({ params }: { params: { recipientUserId: string } }) {
  const [messageContent, setMessageContent] = useState<string>('');
  const receiverId = params.recipientUserId;
  const inputRef = useRef(null);

  const openStickerPopOver = () => {};
  return (
    <>
      <div className="p-1 flex gap-2 rounded-full  border-sigColorBgBorder border-b-sigColor bg-sigSurface BgBorder flex-1   border focus:outline-none ">
        <div
          className="self-center ml-2"
          onClick={() => {
            openStickerPopOver();
          }}
        >
          <StickerPopover receiverId={receiverId} />
        </div>
        <input
          type="text"
          className=" text-gray-400  flex gap-2 rounded-full bg-sigSurface flex-1  focus:outline-none "
          onBlur={(e) => setMessageContent(e.target.value)}
          ref={inputRef}
        />
        <button
          onClick={async () => {
            try {
              await sendMessageAction(receiverId, messageContent, 'text');
              if (
                inputRef.current &&
                inputRef.current instanceof HTMLInputElement
              ) {
                inputRef.current.value = '';
              }
            } catch (err) {
              throw err;
            }
          }}
          className="rounded-full px-4 py-2 bg-gray-500 text-white font-semibold  border-b-sigColorBgBorder hover:bg-sigBackgroundFeedHover focus:outline-none focus:ring-2"
        >
          Send
        </button>
      </div>
    </>
  );
}

export default Input;
