import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice";
import  openEnquireModalSlice  from "./enquireModalSlice";
const store = configureStore({
  reducer: {
    sidebar: modalReducer,
    enquireModal:openEnquireModalSlice,
  },
});

export default store;
