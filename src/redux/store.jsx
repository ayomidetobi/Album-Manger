import { configureStore } from '@reduxjs/toolkit';
import authReducer ,{ loadAuthFromStorage }  from './authSlice';
import albumReducer from './albumSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    movies: albumReducer,
  },
});

store.dispatch(loadAuthFromStorage());

export default store;
