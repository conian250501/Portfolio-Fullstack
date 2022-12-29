import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "~/app/store";
import { ProjectTypes, TypeOfProject } from "~/common/types";
import {
  createTypeProject,
  deleteTypeProject,
  getAllTypeProject,
  getTypeProject,
  updateTypeProject,
} from "./typeProjectActions";

interface StateTypes {
  loading: boolean;
  types: TypeOfProject[];
  type: TypeOfProject | null;
}

const initialState: StateTypes = {
  loading: true,
  types: [],
  type: null,
};

const typeProjectSlice = createSlice({
  name: "typeProject",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
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

    // GET DETAIL
    builder.addCase(getTypeProject.pending, (state) => {
      // state.loading = true;
    });
    builder.addCase(
      getTypeProject.fulfilled,
      (state, action: PayloadAction<TypeOfProject>) => {
        // state.loading = false;
        state.type = action.payload;
      }
    );
    builder.addCase(getTypeProject.rejected, (state, action) => {
      // state.loading = false;
      state.types = [];
    });

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
      state.type = null;
    });

    // Update TYPE
    builder.addCase(updateTypeProject.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      updateTypeProject.fulfilled,
      (state, action: PayloadAction<TypeOfProject>) => {
        state.loading = false;
        state.type = action.payload;
        state.types = state.types.map((type: TypeOfProject) =>
          type._id === action.payload._id
            ? { ...type, name: action.payload.name }
            : { ...type }
        );
      }
    );
    builder.addCase(updateTypeProject.rejected, (state, action) => {
      state.loading = false;
      state.type = null;
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

export const getAllType = (state: RootState) => state.typeProject.types;
export const getType = (state: RootState) => state.typeProject.type;
export const getLoadingType = (state: RootState) => state.typeProject.loading;

export default typeProjectSlice.reducer;
