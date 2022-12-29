import { createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { apiClient } from "~/api/apiClient";
import { ProjectTypes } from "~/common/types";

const token = Cookies.get("access_token");
export const getAllProject = createAsyncThunk(
  "getAllProject",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await apiClient.get("api/v1/project/get_all", {
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
export const createProject = createAsyncThunk(
  "createProject",
  async (payload: ProjectTypes, { rejectWithValue }) => {
    try {
      const { data } = await apiClient.post("api/v1/project/create", payload, {
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
