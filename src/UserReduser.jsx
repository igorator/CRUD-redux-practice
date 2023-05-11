import { createSlice } from "@reduxjs/toolkit";
import { usersList } from "./Data";

const userSlice = createSlice({
  name: "users",
  initialState: usersList,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    editUser: (state, action) => {
      const { id, name, email } = action.payload;
      const currentUser = state.find((user) => user.id === parseInt(id));
      if (currentUser) {
        currentUser.name = name;
        currentUser.email = email;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const currentUser = state.find((user) => user.id === parseInt(id));
      if (currentUser) {
        return state.filter((user) => user.id !== id);
      }
    },
  },
});

export const { addUser, editUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
