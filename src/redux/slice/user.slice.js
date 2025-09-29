const { createSlice } = require("@reduxjs/toolkit");

const users = [
  {
    name: "Alice Johnson",
    email: "alice@example.com",
    password: "hashedpassword123", // normally you store a hashed password
    profile: "https://randomuser.me/api/portraits/women/1.jpg",
    lastSeen: new Date("2025-09-28T10:30:00Z"),
  },
  {
    name: "Bob Smith",
    email: "bob@example.com",
    password: "hashedpassword456",
    profile: "https://randomuser.me/api/portraits/men/2.jpg",
    lastSeen: new Date("2025-09-27T15:45:00Z"),
  },
  {
    name: "Charlie Brown",
    email: "charlie@example.com",
    password: "hashedpassword789",
    profile: "https://randomuser.me/api/portraits/men/3.jpg",
    lastSeen: new Date(), // default current date
  },
  {
    name: "Diana Prince",
    email: "diana@example.com",
    password: "hashedpassword321",
    profile: "https://randomuser.me/api/portraits/women/4.jpg",
    // lastSeen will default to now if not provided
  }
];
const initialState={
    users:users,
    totalItems:0,
    page:1,
    limit:20,
    totalPages:1
}

const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        setUsers:(state,action)=>{
            const {
                totalItems,
                totalPages,
                data
            }=action.payload;

            state.users=data;
            state.totalItems=totalItems;
            state.totalPages=totalPages;
        },
        
    }
});

export const {
    setUsers
}=userSlice.actions;

export default userSlice.reducer;