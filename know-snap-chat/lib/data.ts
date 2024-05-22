import User from "@/models/userModel";

export const getUsersForSidebar = async (authUserId: string) => {
  try {
    const users = await User.findOne({ _id: { $ne: authUserId } });
    console.log("users", users);
  } catch (err) {}
};
