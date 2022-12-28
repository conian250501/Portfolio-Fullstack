import { createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { apiClient } from "~/api/apiClient";
import { ProjectTypes } from "~/common/types";

const token = Cookies.get("access_token");

export const createTypeProject = createAsyncThunk(
  "createTypeProject",
  async (payload: ProjectTypes) => {
    try {
      const { data } = await apiClient.post(
        "/api/v1/types_project/create",
        payload,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return data.data;
    } catch (error) {
      return error;
    }
  }
);
export const getAllTypeProject = createAsyncThunk(
  "getAllTypeProject",
  async () => {
    try {
      const { data } = await apiClient.get("/api/v1/types_project/all", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return data.data;
    } catch (error) {
      return error;
    }
  }
);
export const updateTypeProject = createAsyncThunk(
  "updateTypeProject",
  async (id: string | number) => {}
);
export const deleteTypeProject = createAsyncThunk(
  "deleteTypeProject",
  async (id: string | number) => {
    try {
      const { data } = await apiClient.delete(
        `/api/v1/types_project/delete/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(data);
      return { id };
    } catch (error) {
      return error;
    }
  }
);
