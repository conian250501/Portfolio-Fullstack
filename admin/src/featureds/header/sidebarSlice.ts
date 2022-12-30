import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

type StateTypes = {
  open: boolean;
};
const initialState: StateTypes = {
  open: false,
};
export const sidebarSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    openSidebar: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload;
    },
    closeSidebar: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload;
    },
  },
});

export const { openSidebar, closeSidebar } = sidebarSlice.actions;
export const getOpenSidebar = (state: RootState) => state.sidebar.open;

export default sidebarSlice.reducer;
