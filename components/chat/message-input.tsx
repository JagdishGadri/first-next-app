'use client';
import revalidateChatTimeLine, { sendMessageAction } from '@/lib/actions';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import StickerPopover from './sticker-popover';
import { scrollToEnd } from '@/lib/utils';
import { ArrowDown } from 'lucide-react';

function Input({
  params,
  senderId
}: {
  params: { recipientUserId: string };
  senderId: string;
}) {
  const recipientId = params.recipientUserId;
  const inputRef = useRef<HTMLInputElement | null>(null);
  const ws = useRef<WebSocket | null>(null);
  const [isNewMessageReceived, setIsNewMessageReceived] = useState(false);

  const connectToWebSocket = useCallback(async () => {
    ws.current = new WebSocket(
      process.env.NEXT_PUBLIC_WS_URL ?? 'wss://know-snap-app.onrender.com'
    );

    ws.current.onopen = () => {
      if (ws.current)
        ws.current.send(
          JSON.stringify({
            type: 'connection',
            connectedUserId: senderId
          })
        );
    };

    ws.current.onmessage = async (event) => {
      const data = event.data;
      if (event.data) {
        setIsNewMessageReceived(true);
      }

      const parsedMessage = JSON.parse(data);
      await revalidateChatTimeLine(parsedMessage?.receiverId);
    };

    ws.current.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    ws.current.onclose = () => {
      console.log('Disconnected from the WebSocket server');
    };
  }, [senderId]);

  useEffect(() => {
    connectToWebSocket();
    return () => {
      if (ws.current) {
        ws.current.close();
      }
    };
  }, [connectToWebSocket]);

  const sendMessage = async () => {
    try {
      if (inputRef.current) {
        await sendMessageAction(recipientId, inputRef.current.value, 'text');
        if (ws.current) {
          ws.current.send(
            JSON.stringify({
              type: 'message',
              senderId: senderId,
              recepientId: recipientId,
              content: inputRef.current.value
            })
          );
        }
        if (inputRef.current && inputRef.current instanceof HTMLInputElement) {
          inputRef.current.value = '';
        }
        scrollToEnd('message-container');
      }
    } catch (err) {
      throw err;
    }
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = async (
    event
  ) => {
    if (event.key === 'Enter') {
      await sendMessage();
    }
  };

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
          <StickerPopover receiverId={recipientId} />
        </div>
        <input
          type="text"
          className=" text-gray-400  flex gap-2 rounded-full bg-sigSurface flex-1  focus:outline-none "
          ref={inputRef}
          onKeyDown={handleKeyDown}
        />
        {isNewMessageReceived && (
          <button
            className="border h-10 w-10 flex justify-center items-center rounded-full mt-[-150px]"
            onClick={() => {
              scrollToEnd('message-container');
              setIsNewMessageReceived(false);
            }}
          >
            <ArrowDown></ArrowDown>
          </button>
        )}
        <button
          onClick={sendMessage}
          className="rounded-full px-4 py-2 bg-gray-500 text-white font-semibold  border-b-sigColorBgBorder hover:bg-sigBackgroundFeedHover focus:outline-none focus:ring-2"
        >
          Send
        </button>
      </div>
    </>
  );
}

export default Input;
