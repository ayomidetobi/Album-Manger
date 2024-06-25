import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const albumSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {
    setAlbums(state, action) {
      return action.payload;
    },
    addAlbum(state, action) {
      state.push(action.payload);
    },
    updateAlbum(state, action) {
      const index = state.findIndex(album => album.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteAlbum(state, action) {
      return state.filter(album => album.id !== action.payload);
    },
  },
});

export const { setAlbums, addAlbum, updateAlbum, deleteAlbum } = albumSlice.actions;

export default albumSlice.reducer;
