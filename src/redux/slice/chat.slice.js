import { createSlice } from '@reduxjs/toolkit'

const sampleChats=[
    {
      _id: "66fe2b134af0c4a8a1c12345",
      name: null,
      isGroupChat: false,
      participants: ["66fe2b134af0c4a8a1c11111", "66fe2b134af0c4a8a1c22222"],
      admins: [],
      lastMessage: "66fe2b134af0c4a8a1c98765",
      unreadCount: {
        "66fe2b134af0c4a8a1c11111": 0,
        "66fe2b134af0c4a8a1c22222": 2,
      },
      createdAt: "2025-09-27T14:00:00.000Z",
      updatedAt: "2025-09-27T14:05:00.000Z",
    },
    {
      _id: "66fe2b134af0c4a8a1c33333",
      name: "Project Alpha Team",
      isGroupChat: true,
      participants: [
        "66fe2b134af0c4a8a1c11111",
        "66fe2b134af0c4a8a1c44444",
        "66fe2b134af0c4a8a1c55555",
      ],
      admins: ["66fe2b134af0c4a8a1c11111"],
      lastMessage: "66fe2b134af0c4a8a1c77777",
      unreadCount: {
        "66fe2b134af0c4a8a1c11111": 0,
        "66fe2b134af0c4a8a1c44444": 1,
        "66fe2b134af0c4a8a1c55555": 4,
      },
      createdAt: "2025-09-26T10:15:00.000Z",
      updatedAt: "2025-09-27T09:30:00.000Z",
    },
    {
      _id: "66fe2b134af0c4a8a1c44444",
      name: "Developers Squad",
      isGroupChat: true,
      participants: [
        "66fe2b134af0c4a8a1c11111",
        "66fe2b134af0c4a8a1c66666",
        "66fe2b134af0c4a8a1c77777",
        "66fe2b134af0c4a8a1c88888",
      ],
      admins: ["66fe2b134af0c4a8a1c66666"],
      lastMessage: null,
      unreadCount: {
        "66fe2b134af0c4a8a1c11111": 10,
        "66fe2b134af0c4a8a1c66666": 0,
        "66fe2b134af0c4a8a1c77777": 0,
        "66fe2b134af0c4a8a1c88888": 3,
      },
      createdAt: "2025-09-25T08:00:00.000Z",
      updatedAt: "2025-09-27T17:00:00.000Z",
    },
    {
      _id: "66fe2b134af0c4a8a1c55555",
      name: null,
      isGroupChat: false,
      participants: ["66fe2b134af0c4a8a1c11111", "66fe2b134af0c4a8a1c99999"],
      admins: [],
      lastMessage: "66fe2b134af0c4a8a1c55667",
      unreadCount: {
        "66fe2b134af0c4a8a1c11111": 3,
        "66fe2b134af0c4a8a1c99999": 1,
      },
      createdAt: "2025-09-24T11:00:00.000Z",
      updatedAt: "2025-09-27T11:45:00.000Z",
    },
    {
      _id: "66fe2b134af0c4a8a1c66666",
      name: "UI Design Crew",
      isGroupChat: true,
      participants: [
        "66fe2b134af0c4a8a1c11111",
        "66fe2b134af0c4a8a1c22222",
        "66fe2b134af0c4a8a1c44444",
        "66fe2b134af0c4a8a1c55555",
      ],
      admins: ["66fe2b134af0c4a8a1c22222"],
      lastMessage: null,
      unreadCount: {
        "66fe2b134af0c4a8a1c11111": 1,
        "66fe2b134af0c4a8a1c22222": 0,
        "66fe2b134af0c4a8a1c44444": 2,
        "66fe2b134af0c4a8a1c55555": 0,
      },
      createdAt: "2025-09-23T07:15:00.000Z",
      updatedAt: "2025-09-27T16:10:00.000Z",
    },
    {
      _id: "66fe2b134af0c4a8a1c77777",
      name: null,
      isGroupChat: false,
      participants: ["66fe2b134af0c4a8a1c11111", "66fe2b134af0c4a8a1c10101"],
      admins: [],
      lastMessage: null,
      unreadCount: {
        "66fe2b134af0c4a8a1c11111": 5,
        "66fe2b134af0c4a8a1c10101": 0,
      },
      createdAt: "2025-09-21T12:00:00.000Z",
      updatedAt: "2025-09-27T15:00:00.000Z",
    },
    {
      _id: "66fe2b134af0c4a8a1c88888",
      name: "Marketing Team",
      isGroupChat: true,
      participants: [
        "66fe2b134af0c4a8a1c11111",
        "66fe2b134af0c4a8a1c20202",
        "66fe2b134af0c4a8a1c30303",
      ],
      admins: ["66fe2b134af0c4a8a1c20202"],
      lastMessage: "66fe2b134af0c4a8a1c77788",
      unreadCount: {
        "66fe2b134af0c4a8a1c11111": 0,
        "66fe2b134af0c4a8a1c20202": 2,
        "66fe2b134af0c4a8a1c30303": 0,
      },
      createdAt: "2025-09-22T09:00:00.000Z",
      updatedAt: "2025-09-27T09:00:00.000Z",
    },
    {
      _id: "66fe2b134af0c4a8a1c99999",
      name: null,
      isGroupChat: false,
      participants: ["66fe2b134af0c4a8a1c11111", "66fe2b134af0c4a8a1c40404"],
      admins: [],
      lastMessage: null,
      unreadCount: {
        "66fe2b134af0c4a8a1c11111": 0,
        "66fe2b134af0c4a8a1c40404": 0,
      },
      createdAt: "2025-09-20T08:00:00.000Z",
      updatedAt: "2025-09-27T12:30:00.000Z",
    },
    {
      _id: "66fe2b134af0c4a8a1c10101",
      name: "Backend Builders",
      isGroupChat: true,
      participants: [
        "66fe2b134af0c4a8a1c11111",
        "66fe2b134af0c4a8a1c22222",
        "66fe2b134af0c4a8a1c40404",
        "66fe2b134af0c4a8a1c50505",
      ],
      admins: ["66fe2b134af0c4a8a1c40404"],
      lastMessage: null,
      unreadCount: {
        "66fe2b134af0c4a8a1c11111": 7,
        "66fe2b134af0c4a8a1c22222": 2,
        "66fe2b134af0c4a8a1c40404": 0,
        "66fe2b134af0c4a8a1c50505": 1,
      },
      createdAt: "2025-09-19T06:00:00.000Z",
      updatedAt: "2025-09-27T10:00:00.000Z",
    },
    {
      _id: "66fe2b134af0c4a8a1c20202",
      name: null,
      isGroupChat: false,
      participants: ["66fe2b134af0c4a8a1c11111", "66fe2b134af0c4a8a1c60606"],
      admins: [],
      lastMessage: "66fe2b134af0c4a8a1c12367",
      unreadCount: {
        "66fe2b134af0c4a8a1c11111": 2,
        "66fe2b134af0c4a8a1c60606": 0,
      },
      createdAt: "2025-09-18T05:00:00.000Z",
      updatedAt: "2025-09-27T09:00:00.000Z",
    },
    {
      _id: "66fe2b134af0c4a8a1c30303",
      name: "HR Discussion",
      isGroupChat: true,
      participants: [
        "66fe2b134af0c4a8a1c11111",
        "66fe2b134af0c4a8a1c70707",
        "66fe2b134af0c4a8a1c80808",
      ],
      admins: ["66fe2b134af0c4a8a1c70707"],
      lastMessage: null,
      unreadCount: {
        "66fe2b134af0c4a8a1c11111": 0,
        "66fe2b134af0c4a8a1c70707": 0,
        "66fe2b134af0c4a8a1c80808": 1,
      },
      createdAt: "2025-09-17T08:00:00.000Z",
      updatedAt: "2025-09-27T11:00:00.000Z",
    },
    {
      _id: "66fe2b134af0c4a8a1c40404",
      name: "Design Review",
      isGroupChat: true,
      participants: [
        "66fe2b134af0c4a8a1c11111",
        "66fe2b134af0c4a8a1c90909",
        "66fe2b134af0c4a8a1c22222",
      ],
      admins: ["66fe2b134af0c4a8a1c90909"],
      lastMessage: null,
      unreadCount: {
        "66fe2b134af0c4a8a1c11111": 1,
        "66fe2b134af0c4a8a1c90909": 0,
        "66fe2b134af0c4a8a1c22222": 2,
      },
      createdAt: "2025-09-16T10:00:00.000Z",
      updatedAt: "2025-09-27T08:00:00.000Z",
    },
    {
      _id: "66fe2b134af0c4a8a1c50505",
      name: null,
      isGroupChat: false,
      participants: ["66fe2b134af0c4a8a1c11111", "66fe2b134af0c4a8a1c30303"],
      admins: [],
      lastMessage: null,
      unreadCount: {
        "66fe2b134af0c4a8a1c11111": 0,
        "66fe2b134af0c4a8a1c30303": 0,
      },
      createdAt: "2025-09-15T09:00:00.000Z",
      updatedAt: "2025-09-27T07:00:00.000Z",
    },
    {
      _id: "66fe2b134af0c4a8a1c60606",
      name: "Operations Team",
      isGroupChat: true,
      participants: [
        "66fe2b134af0c4a8a1c11111",
        "66fe2b134af0c4a8a1c70707",
        "66fe2b134af0c4a8a1c80808",
        "66fe2b134af0c4a8a1c90909",
      ],
      admins: ["66fe2b134af0c4a8a1c70707"],
      lastMessage: null,
      unreadCount: {
        "66fe2b134af0c4a8a1c11111": 2,
        "66fe2b134af0c4a8a1c70707": 0,
        "66fe2b134af0c4a8a1c80808": 3,
        "66fe2b134af0c4a8a1c90909": 0,
      },
      createdAt: "2025-09-14T08:30:00.000Z",
      updatedAt: "2025-09-27T06:30:00.000Z",
    },
    {
      _id: "66fe2b134af0c4a8a1c70707",
      name: null,
      isGroupChat: false,
      participants: ["66fe2b134af0c4a8a1c11111", "66fe2b134af0c4a8a1c20202"],
      admins: [],
      lastMessage: null,
      unreadCount: {
        "66fe2b134af0c4a8a1c11111": 1,
        "66fe2b134af0c4a8a1c20202": 0,
      },
      createdAt: "2025-09-13T08:00:00.000Z",
      updatedAt: "2025-09-27T05:00:00.000Z",
    },
    {
      _id: "66fe2b134af0c4a8a1c80808",
      name: "Testing Group",
      isGroupChat: true,
      participants: [
        "66fe2b134af0c4a8a1c11111",
        "66fe2b134af0c4a8a1c50505",
        "66fe2b134af0c4a8a1c30303",
      ],
      admins: ["66fe2b134af0c4a8a1c50505"],
      lastMessage: null,
      unreadCount: {
        "66fe2b134af0c4a8a1c11111": 0,
        "66fe2b134af0c4a8a1c50505": 2,
        "66fe2b134af0c4a8a1c30303": 1,
      },
      createdAt: "2025-09-12T08:00:00.000Z",
      updatedAt: "2025-09-27T04:00:00.000Z",
    },
    {
      _id: "66fe2b134af0c4a8a1c90909",
      name: null,
      isGroupChat: false,
      participants: ["66fe2b134af0c4a8a1c11111", "66fe2b134af0c4a8a1c60606"],
      admins: [],
      lastMessage: null,
      unreadCount: {
        "66fe2b134af0c4a8a1c11111": 0,
        "66fe2b134af0c4a8a1c60606": 2,
      },
      createdAt: "2025-09-11T08:00:00.000Z",
      updatedAt: "2025-09-27T03:00:00.000Z",
    }];
   
const initialState={
    chats:sampleChats,
    totalPages:4,
    totalItems:sampleChats.length,
    page:1,
    limit:10,
    selectedChat:null,
    
}

const chatSlice=createSlice({
    name:"chats",
    initialState,
    reducers:{
        setChats:(state,action)=>{
            const {
                totalItems,
                totalPages,
                data
            }=action.payload;
            state.totalPages=totalPages;
            state.totalItems=totalItems;
        },
        setSelectedChat:(state,action)=>{
            state.selectedChat=action.payload;
        }
    }
});

export const {
    setChats,
    setSelectedChat
}=chatSlice.actions;

export default chatSlice.reducer;