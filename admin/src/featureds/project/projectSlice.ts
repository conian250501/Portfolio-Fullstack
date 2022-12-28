import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "~/app/store";
import { ProjectTypes, TypeOfProject } from "~/common/types";
import {
  createTypeProject,
  deleteTypeProject,
  getAllTypeProject,
} from "./projectActions";

interface StateTypes {
  loading: boolean;
  projects: ProjectTypes[];
  types: TypeOfProject[];
}

const initialState: StateTypes = {
  loading: true,
  projects: [
    {
      _id: "",
      image: "",
      name: "",
      description: "",
      type: "",
      link: [],
      technologies: [],
      createdAt: "",
      updatedAt: "",
    },
  ],
  types: [],
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // CREATE TYPE
    builder.addCase(createTypeProject.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      createTypeProject.fulfilled,
      (state, action: PayloadAction<TypeOfProject>) => {
        state.loading = false;
        state.types.unshift(action.payload);
      }
    );
    builder.addCase(createTypeProject.rejected, (state, action) => {
      state.loading = false;
      state.types = [];
    });

    // GET ALL TYPES
    builder.addCase(getAllTypeProject.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getAllTypeProject.fulfilled,
      (state, action: PayloadAction<TypeOfProject[]>) => {
        state.loading = false;
        state.types = action.payload;
      }
    );
    builder.addCase(getAllTypeProject.rejected, (state, action) => {
      state.loading = false;
      state.types = [];
    });

    // DELETE TYPE
    builder.addCase(deleteTypeProject.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      deleteTypeProject.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.types = state.types.filter(
          (type) => type._id !== action.payload.id
        );
      }
    );
    builder.addCase(deleteTypeProject.rejected, (state, action) => {
      state.loading = false;
      state.types = [];
    });
  },
});

export const getAllType = (state: RootState) => state.project.types;

export default projectSlice.reducer;
