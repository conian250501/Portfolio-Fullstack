import { createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { apiClient } from "~/api/apiClient";
import { ProfileUpdateTypes } from "~/common/types";

const token = Cookies.get("access_token");
export const getProfile = createAsyncThunk(
  "getProfile",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await apiClient.get(`/api/v1/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateProfile = createAsyncThunk(
  "updateProfile",
  async (payload: ProfileUpdateTypes, { rejectWithValue }) => {
    try {
      const { data } = await apiClient.patch(`/api/v1/user/update`, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return payload;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);
