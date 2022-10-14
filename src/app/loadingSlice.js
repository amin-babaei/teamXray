import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

const loadingSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadingSpinner: (state, action) => {
        state.loading = action.payload;
    },
  },
});

export const { loadingSpinner } = loadingSlice.actions;
export default loadingSlice.reducer;
