import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { RootState } from "~/app/store";
import { ProfileUserTypes } from "~/common/types";
import { getProfile, updateProfile } from "./profileActions";

interface StateTypes {
  loading: boolean;
  data: ProfileUserTypes | null;
}
const initialState: StateTypes = {
  loading: true,
  data: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProfile.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getProfile.fulfilled,
      (state, action: PayloadAction<ProfileUserTypes>) => {
        state.loading = false;
        state.data = action.payload;
      }
    );
    builder.addCase(getProfile.rejected, (state) => {
      state.loading = true;
      state.data = null;
    });

    //UPDATE
    builder.addCase(updateProfile.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      updateProfile.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.data = action.payload;
        toast("Update profile successfully");
      }
    );
    builder.addCase(updateProfile.rejected, (state) => {
      state.loading = true;
      state.data = null;
    });
  },
});

export const selectProfile = (state: RootState) => state.profile.data;
export const selectLoadingProfile = (state: RootState) => state.profile.loading;

export default profileSlice.reducer;
