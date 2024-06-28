import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem(
        "auth",
        JSON.stringify({ user: state.user, token: state.token }),
      );
    },
    logoutSuccess(state) {
      state.user = null;
      state.token = null;
      localStorage.removeItem("auth");
    },
    loadAuthFromStorage(state) {
      const storedAuth = localStorage.getItem("auth");
      if (storedAuth) {
        const { user, token } = JSON.parse(storedAuth);
        state.user = user;
        state.token = token;
      }
    },
  },
});

export const { loginSuccess, logoutSuccess, loadAuthFromStorage } =
  authSlice.actions;
export default authSlice.reducer;
