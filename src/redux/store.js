import { configureStore } from '@reduxjs/toolkit';
import chatReducer from "@/redux/slice/chat.slice";
import messageReducer from "@/redux/slice/message.slice";
import userReducer from "@/redux/slice/user.slice";

export const store = configureStore({
  reducer: {
    chats:chatReducer,
    messages:messageReducer,
    users:userReducer
  },
});