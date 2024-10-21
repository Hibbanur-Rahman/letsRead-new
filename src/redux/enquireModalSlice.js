import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

const enquireModalSlice = createSlice({
  name: "enquireModal",
  initialState,
  reducers: {
    openEnquireModal: (state, action) => {
      state.open = action.payload;
    },
  },
});

export const { openEnquireModal } = enquireModalSlice.actions;
export default enquireModalSlice.reducer;
