import { SearchIcon } from 'lucide-react';
import Image from 'next/image';
import LogoutButton from '../shared/logout-button';
import { Avatar, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { auth } from '@/auth';
import ChatUserList from './chat-user-list';
import heroPng from '../../public/hero.png';

async function ChatSideBar() {
  const session = await auth();

  return (
    <aside className="flex-[1_1_0%] flex flex-col bg-black text-white">
      <div className="sticky top-0 bg-black z-50">
        <div className="flex items-center justify-between p-4 border-b border-gray-800 ">
          <div className="relative">
            <Avatar className="cursor-pointer hover:bg-sigBackgroundSecondaryHover">
              {session?.user?.image ? (
                <AvatarImage src={session.user.image} />
              ) : (
                <AvatarImage src={heroPng.src} />
              )}
            </Avatar>
          </div>
          <Button className="bg-sigButton hover:bg-sigButtonHover text-white rounded-full h-8 w-8 relative p-2">
            <Image src="/chat.svg" fill alt="Chat icon" />
          </Button>
          <LogoutButton />
        </div>
        <div className="p-4 ">
          <div className=" text-gray-400 p-1  flex gap-2 rounded-full bg-sigSurface border border-sigColorBgBorder">
            <SearchIcon className="text-gray-400 w-5" />
            <input
              className="bg-transparent border-none text-white placeholder-gray-400 focus:outline-none"
              placeholder="Search"
              type="text"
            />
          </div>
        </div>
      </div>
      <ChatUserList />
    </aside>
  );
}
export default ChatSideBar;
