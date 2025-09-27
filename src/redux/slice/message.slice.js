import { createSlice } from "@reduxjs/toolkit";

export const sampleMessages = [
  {
    _id: "66ff2c123af0c4a8a1c00001",
    chatId: {
      _id: "66fe2b134af0c4a8a1c12345",
      name: null,
      isGroupChat: false,
      participants: [
        { _id: "66fe2b134af0c4a8a1c11111", name: "Mayank" },
        { _id: "66fe2b134af0c4a8a1c22222", name: "John Doe" },
      ],
    },
    sender: { _id: "66fe2b134af0c4a8a1c11111", name: "Mayank" },
    text: "Hey John, did you check the latest report?",
    image: null,
    seenBy: [{ _id: "66fe2b134af0c4a8a1c11111", name: "Mayank" }],
    createdAt: "2025-09-27T09:00:00.000Z",
    updatedAt: "2025-09-27T09:00:00.000Z",
  },
  {
    _id: "66ff2c123af0c4a8a1c00002",
    chatId: {
      _id: "66fe2b134af0c4a8a1c12345",
      name: null,
      isGroupChat: false,
      participants: [
        { _id: "66fe2b134af0c4a8a1c11111", name: "Mayank" },
        { _id: "66fe2b134af0c4a8a1c22222", name: "John Doe" },
      ],
    },
    sender: { _id: "66fe2b134af0c4a8a1c22222", name: "John Doe" },
    text: "Yes, I’ll send you feedback soon!",
    image: null,
    seenBy: [
      { _id: "66fe2b134af0c4a8a1c11111", name: "Mayank" },
      { _id: "66fe2b134af0c4a8a1c22222", name: "John Doe" },
    ],
    createdAt: "2025-09-27T09:02:00.000Z",
    updatedAt: "2025-09-27T09:03:00.000Z",
  },
  {
    _id: "66ff2c123af0c4a8a1c00003",
    chatId: {
      _id: "66fe2b134af0c4a8a1c12345",
      name: null,
      isGroupChat: false,
      participants: [
        { _id: "66fe2b134af0c4a8a1c11111", name: "Mayank" },
        { _id: "66fe2b134af0c4a8a1c22222", name: "John Doe" },
      ],
    },
    sender: { _id: "66fe2b134af0c4a8a1c11111", name: "Mayank" },
    text: "",
    image: "https://placehold.co/300x200?text=Report+Preview",
    seenBy: [{ _id: "66fe2b134af0c4a8a1c22222", name: "John Doe" }],
    createdAt: "2025-09-27T09:05:00.000Z",
    updatedAt: "2025-09-27T09:06:00.000Z",
  },
  {
    _id: "66ff2c123af0c4a8a1c00004",
    chatId: {
      _id: "66fe2b134af0c4a8a1c33333",
      name: "Project Alpha Team",
      isGroupChat: true,
      participants: [
        { _id: "66fe2b134af0c4a8a1c11111", name: "Mayank" },
        { _id: "66fe2b134af0c4a8a1c33333", name: "Priya" },
        { _id: "66fe2b134af0c4a8a1c44444", name: "Alex" },
      ],
    },
    sender: { _id: "66fe2b134af0c4a8a1c33333", name: "Priya" },
    text: "Morning team! We have a standup at 10:30.",
    image: null,
    seenBy: [
      { _id: "66fe2b134af0c4a8a1c33333", name: "Priya" },
      { _id: "66fe2b134af0c4a8a1c11111", name: "Mayank" },
    ],
    createdAt: "2025-09-27T09:10:00.000Z",
    updatedAt: "2025-09-27T09:10:00.000Z",
  },
  {
    _id: "66ff2c123af0c4a8a1c00005",
    chatId: {
      _id: "66fe2b134af0c4a8a1c33333",
      name: "Project Alpha Team",
      isGroupChat: true,
      participants: [
        { _id: "66fe2b134af0c4a8a1c11111", name: "Mayank" },
        { _id: "66fe2b134af0c4a8a1c33333", name: "Priya" },
        { _id: "66fe2b134af0c4a8a1c44444", name: "Alex" },
      ],
    },
    sender: { _id: "66fe2b134af0c4a8a1c44444", name: "Alex" },
    text: "Got it! I’ll join on time.",
    image: null,
    seenBy: [
      { _id: "66fe2b134af0c4a8a1c44444", name: "Alex" },
      { _id: "66fe2b134af0c4a8a1c11111", name: "Mayank" },
    ],
    createdAt: "2025-09-27T09:12:00.000Z",
    updatedAt: "2025-09-27T09:13:00.000Z",
  },
  {
    _id: "66ff2c123af0c4a8a1c00006",
    chatId: {
      _id: "66fe2b134af0c4a8a1c33333",
      name: "Project Alpha Team",
      isGroupChat: true,
      participants: [
        { _id: "66fe2b134af0c4a8a1c11111", name: "Mayank" },
        { _id: "66fe2b134af0c4a8a1c33333", name: "Priya" },
        { _id: "66fe2b134af0c4a8a1c44444", name: "Alex" },
      ],
    },
    sender: { _id: "66fe2b134af0c4a8a1c11111", name: "Mayank" },
    text: "Sharing the updated dashboard!",
    image: "https://placehold.co/400x250?text=Dashboard",
    seenBy: [
      { _id: "66fe2b134af0c4a8a1c33333", name: "Priya" },
    ],
    createdAt: "2025-09-27T09:15:00.000Z",
    updatedAt: "2025-09-27T09:16:00.000Z",
  },
  {
    _id: "66ff2c123af0c4a8a1c00007",
    chatId: {
      _id: "66fe2b134af0c4a8a1c12345",
      name: null,
      isGroupChat: false,
      participants: [
        { _id: "66fe2b134af0c4a8a1c11111", name: "Mayank" },
        { _id: "66fe2b134af0c4a8a1c22222", name: "John Doe" },
      ],
    },
    sender: { _id: "66fe2b134af0c4a8a1c22222", name: "John Doe" },
    text: "That looks perfect, bro!",
    image: null,
    seenBy: [
      { _id: "66fe2b134af0c4a8a1c11111", name: "Mayank" },
      { _id: "66fe2b134af0c4a8a1c22222", name: "John Doe" },
    ],
    createdAt: "2025-09-27T09:20:00.000Z",
    updatedAt: "2025-09-27T09:21:00.000Z",
  },
  {
    _id: "66ff2c123af0c4a8a1c00008",
    chatId: {
      _id: "66fe2b134af0c4a8a1c33333",
      name: "Project Alpha Team",
      isGroupChat: true,
      participants: [
        { _id: "66fe2b134af0c4a8a1c11111", name: "Mayank" },
        { _id: "66fe2b134af0c4a8a1c33333", name: "Priya" },
        { _id: "66fe2b134af0c4a8a1c44444", name: "Alex" },
      ],
    },
    sender: { _id: "66fe2b134af0c4a8a1c33333", name: "Priya" },
    text: "Can we deploy by EOD?",
    image: null,
    seenBy: [
      { _id: "66fe2b134af0c4a8a1c11111", name: "Mayank" },
    ],
    createdAt: "2025-09-27T09:25:00.000Z",
    updatedAt: "2025-09-27T09:25:00.000Z",
  },
  {
    _id: "66ff2c123af0c4a8a1c00009",
    chatId: {
      _id: "66fe2b134af0c4a8a1c33333",
      name: "Project Alpha Team",
      isGroupChat: true,
      participants: [
        { _id: "66fe2b134af0c4a8a1c11111", name: "Mayank" },
        { _id: "66fe2b134af0c4a8a1c33333", name: "Priya" },
        { _id: "66fe2b134af0c4a8a1c44444", name: "Alex" },
      ],
    },
    sender: { _id: "66fe2b134af0c4a8a1c11111", name: "Mayank" },
    text: "Yes, we’ll wrap up testing by 6 PM.",
    image: null,
    seenBy: [
      { _id: "66fe2b134af0c4a8a1c33333", name: "Priya" },
      { _id: "66fe2b134af0c4a8a1c44444", name: "Alex" },
    ],
    createdAt: "2025-09-27T09:30:00.000Z",
    updatedAt: "2025-09-27T09:31:00.000Z",
  },
  {
    _id: "66ff2c123af0c4a8a1c00010",
    chatId: {
      _id: "66fe2b134af0c4a8a1c12345",
      name: null,
      isGroupChat: false,
      participants: [
        { _id: "66fe2b134af0c4a8a1c11111", name: "Mayank" },
        { _id: "66fe2b134af0c4a8a1c22222", name: "John Doe" },
      ],
    },
    sender: { _id: "66fe2b134af0c4a8a1c11111", name: "Mayank" },
    text: "Lunch?",
    image: null,
    seenBy: [],
    createdAt: "2025-09-27T12:00:00.000Z",
    updatedAt: "2025-09-27T12:00:00.000Z",
  },
  {
    _id: "66ff2c123af0c4a8a1c00011",
    chatId: {
      _id: "66fe2b134af0c4a8a1c12345",
      name: null,
      isGroupChat: false,
      participants: [
        { _id: "66fe2b134af0c4a8a1c11111", name: "Mayank" },
        { _id: "66fe2b134af0c4a8a1c22222", name: "John Doe" },
      ],
    },
    sender: { _id: "66fe2b134af0c4a8a1c22222", name: "John Doe" },
    text: "Sure, let’s go!",
    image: null,
    seenBy: [{ _id: "66fe2b134af0c4a8a1c11111", name: "Mayank" }],
    createdAt: "2025-09-27T12:02:00.000Z",
    updatedAt: "2025-09-27T12:02:00.000Z",
  },
  {
    _id: "66ff2c123af0c4a8a1c00012",
    chatId: {
      _id: "66fe2b134af0c4a8a1c33333",
      name: "Project Alpha Team",
      isGroupChat: true,
      participants: [
        { _id: "66fe2b134af0c4a8a1c11111", name: "Mayank" },
        { _id: "66fe2b134af0c4a8a1c33333", name: "Priya" },
        { _id: "66fe2b134af0c4a8a1c44444", name: "Alex" },
      ],
    },
    sender: { _id: "66fe2b134af0c4a8a1c44444", name: "Alex" },
    text: "Deployment done ✅",
    image: null,
    seenBy: [
      { _id: "66fe2b134af0c4a8a1c33333", name: "Priya" },
    ],
    createdAt: "2025-09-27T18:30:00.000Z",
    updatedAt: "2025-09-27T18:31:00.000Z",
  },
  {
    _id: "66ff2c123af0c4a8a1c00013",
    chatId: {
      _id: "66fe2b134af0c4a8a1c33333",
      name: "Project Alpha Team",
      isGroupChat: true,
      participants: [
        { _id: "66fe2b134af0c4a8a1c11111", name: "Mayank" },
        { _id: "66fe2b134af0c4a8a1c33333", name: "Priya" },
        { _id: "66fe2b134af0c4a8a1c44444", name: "Alex" },
      ],
    },
    sender: { _id: "66fe2b134af0c4a8a1c33333", name: "Priya" },
    text: "🎉 Great job team!",
    image: null,
    seenBy: [
      { _id: "66fe2b134af0c4a8a1c11111", name: "Mayank" },
      { _id: "66fe2b134af0c4a8a1c44444", name: "Alex" },
    ],
    createdAt: "2025-09-27T18:32:00.000Z",
    updatedAt: "2025-09-27T18:33:00.000Z",
  },
  {
    _id: "66ff2c123af0c4a8a1c00014",
    chatId: {
      _id: "66fe2b134af0c4a8a1c12345",
      name: null,
      isGroupChat: false,
      participants: [
        { _id: "66fe2b134af0c4a8a1c11111", name: "Mayank" },
        { _id: "66fe2b134af0c4a8a1c22222", name: "John Doe" },
      ],
    },
    sender: { _id: "66fe2b134af0c4a8a1c22222", name: "John Doe" },
    text: "Good night! 🌙",
    image: null,
    seenBy: [],
    createdAt: "2025-09-27T22:00:00.000Z",
    updatedAt: "2025-09-27T22:00:00.000Z",
  },
  {
    _id: "66ff2c123af0c4a8a1c00015",
    chatId: {
      _id: "66fe2b134af0c4a8a1c12345",
      name: null,
      isGroupChat: false,
      participants: [
        { _id: "66fe2b134af0c4a8a1c11111", name: "Mayank" },
        { _id: "66fe2b134af0c4a8a1c22222", name: "John Doe" },
      ],
    },
    sender: { _id: "66fe2b134af0c4a8a1c11111", name: "Mayank" },
    text: "Night ✨",
    image: null,
    seenBy: [],
    createdAt: "2025-09-27T22:01:00.000Z",
    updatedAt: "2025-09-27T22:01:00.000Z",
  },
];

const initialState={
    messages:sampleMessages,
     totalPages:4,
    totalItems:sampleMessages.length,
    page:1,
    limit:10,
}

const messageSlice=createSlice({
    name:"messages",
    initialState,
    reducers:{
        setMessages:(state,action)=>{
            const {
                totalItems,
                totalPages,
                messages
            }=action.payload;
            state.messages=messages;
            state.totalItems=totalItems;
            state.totalPages=totalPages;
        }
    }
});

export const {
    setMessages
}=messageSlice.actions;

export default messageSlice.reducer;

