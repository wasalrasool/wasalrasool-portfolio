import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { HTTP_STATUS } from "../constansts/projectConstants";

export const fetchProjects = createAsyncThunk(
  `projects/fetchProjects`,
  async () => {
    const { data } = await axios.get("/api/v1/projects");
    return data;
  }
);

let initialState = {
  loading: null,
  data: null,
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    // getProjects: async (state) => {},
  },
  extraReducers: {
    [fetchProjects.pending]: (state) => {
      state.loading = HTTP_STATUS.PENDING;
    },
    [fetchProjects.fulfilled]: (state, actions) => {
      state.loading = HTTP_STATUS.FULFILLED;
      state.data = actions.payload;
    },
    [fetchProjects.rejected]: (state) => {
      state.loading = HTTP_STATUS.REJECTED;
    },
  },
});

export const { getProjects } = projectSlice.actions;

// official documentation okkk hai.

// const fetchProjects = () => async (dispatch) => {
//   dispatch(usersLoading())
//   const response = await usersAPI.fetchAll()
//   dispatch(usersReceived(response.data))
// }

export default projectSlice.reducer;
