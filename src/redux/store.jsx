import { configureStore } from "@reduxjs/toolkit";
import authReducer, { loadAuthFromStorage } from "./authSlice";
import albumReducer from "./albumSlice";
import activeLinkReducer from "./ActiveLinkSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    movies: albumReducer,
    activeLink: activeLinkReducer,
  },
});

store.dispatch(loadAuthFromStorage());

export default store;
