import User from '@/models/userModel';
import { connectToMongoDB } from './db';
import Chat from '@/models/chatModel';
import { auth } from '@/auth';

export const getChatTimeLineData = async (recipientUserId: string) => {
  try {
    await connectToMongoDB();
    const session = await auth();
    const chats = await Chat.findOne({
      participants: [session?.user._id, recipientUserId]
    })
      .populate({
        path: 'messages'
      })
      .sort({ createdAt: 'descending' });

    const recipientUser = await User.findOne({
      _id: recipientUserId
    });
    return { messages: chats?.messages, recipientUserDetails: recipientUser };
  } catch (err) {
    throw err;
  }
};
