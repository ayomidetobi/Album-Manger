import { createSlice } from "@reduxjs/toolkit";

const albumSlice = createSlice({
  name: "albums",
  initialState: {
    albums: [],
    album: null,
  },
  reducers: {
    setAlbums: (state, action) => {
      state.albums = action.payload;
    },
    addAlbum: (state, action) => {
      state.albums.push(action.payload);
    },
    updateAlbum: (state, action) => {
      const index = state.albums.findIndex(
        (album) => album.id === action.payload.id,
      );
      if (index !== -1) {
        state.albums[index] = action.payload;
      }
    },
    deleteAlbum: (state, action) => {
      state.albums = state.albums.filter(
        (album) => album.id !== action.payload,
      );
    },
    setAlbum: (state, action) => {
      state.album = action.payload;
    },
  },
});

export const { setAlbums, addAlbum, updateAlbum, deleteAlbum, setAlbum } =
  albumSlice.actions;

export default albumSlice.reducer;
