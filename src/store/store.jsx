import { configureStore } from "@reduxjs/toolkit";
import { apiData } from "./apiData";
import { linkData } from "./linkData";

export const store = configureStore({
  reducer: {
    apiData: apiData.reducer,
    linkData: linkData.reducer,
  },
});
