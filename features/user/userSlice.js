import { createSlice } from "@reduxjs/toolkit";

// Import Models
import { UserModel } from "../../models/user/user";

export const userSlice = createSlice({
  name: "user",
  initialState: UserModel(),
  reducers: {
    initialize: (state, action) => {
      // Copy all values
      for (const key in action.payload) {
        state[key] = action.payload[key];
      }
    },

    loginFromCookie: (state, action) => {
      state.uid = action.payload;
    },
  },
});

export const { initialize, loginFromCookie } = userSlice.actions;

export default userSlice.reducer;
