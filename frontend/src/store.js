import { configureStore } from "@reduxjs/toolkit";
import getProjects from "../src/features/projectSlice";

const store = configureStore({
  reducer: {
    projects: getProjects,
  },
});

export default store;
