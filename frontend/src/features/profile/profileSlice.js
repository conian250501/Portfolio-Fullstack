import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { profileApi } from "./profileApi";

const initialState = {
  loading: false,
  data: {},
};

export const getProfileAsync = createAsyncThunk(
  "profile/getProfileAsync",
  async () => {
    const res = await profileApi.getProfile();
    return res;
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProfileAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProfileAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getProfileAsync.rejected, (state) => {
      state.loading = true;
      state.data = {};
    });
  },
});

export default profileSlice.reducer;
