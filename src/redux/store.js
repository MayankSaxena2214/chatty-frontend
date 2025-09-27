import { configureStore } from '@reduxjs/toolkit'
import chatReducer from "@/redux/slice/chat.slice"
import messageReducer from "@/redux/slice/message.slice"

export const store = configureStore({
  reducer: {
    chats:chatReducer,
    messages:messageReducer
  },
});