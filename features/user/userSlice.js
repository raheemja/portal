import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getDatabase, ref, child, get } from "firebase/database";
import { UserModel } from "../../models/user/user";

export const userSlice = createSlice({
  name: "user",
  initialState: UserModel(),
  reducers: {
    assign: (state, action) => {
      state.isLoggedIn = true;
      state.uid = action.payload;
    },

    initialize: (state, action) => {
      // Copy all values
      for (const key in action.payload) {
        state[key] = action.payload[key];
      }

      /*
      // Set login to true
      state.isLoggedIn = true;

      // Copy initial values
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.displayName = action.payload.displayName;

      */
    },

    login: (state, action) => {
      state = action.payload;
    },

    signUp: (state, action) => {},

    loginFromCookie: (state, action) => {
      state.uid = action.payload;
    },
  },
});

export const {
  assign,
  login,
  signUp,
  initialize,
  loginFromCookie,
} = userSlice.actions;

export default userSlice.reducer;
