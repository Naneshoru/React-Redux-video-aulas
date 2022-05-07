import { configureStore } from "@reduxjs/toolkit";
import mediaReducer from "./media";

const store = configureStore({
  reducer: {
    media: mediaReducer,
  }
});

export default store;