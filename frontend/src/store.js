import { configureStore } from "@reduxjs/toolkit";
import getProjects from "../src/features/projectSlice";
import projectReducer from "./features/projectSlice";

const store = configureStore({
  reducer: {
    projects: projectReducer,
  },
});

export default store;
