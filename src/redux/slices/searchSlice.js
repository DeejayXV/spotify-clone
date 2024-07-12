import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSearchResults = createAsyncThunk("search/fetchSearchResults", async (searchTerm) => {
  const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchTerm}`);
  const data = await response.json();
  return data.data;
});

const searchSlice = createSlice({
  name: "search",
  initialState: {
    results: [],
    selectedSong: null,
    likedSongs: {},
    status: "idle",
    error: null,
  },
  reducers: {
    selectSong: (state, action) => {
      state.selectedSong = action.payload;
    },
    toggleLikeSong: (state, action) => {
      const songId = action.payload.id;
      if (state.likedSongs[songId]) {
        delete state.likedSongs[songId];
      } else {
        state.likedSongs[songId] = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchResults.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.status = "succeed";
        state.results = action.payload;
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { selectSong, toggleLikeSong } = searchSlice.actions;

export default searchSlice.reducer;
