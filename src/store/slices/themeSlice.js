import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: true,
  response: "dark",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      (state.darkMode = true), (state.response = "dark");
    },
    toggleLightMode: (state) => {
      (state.darkMode = false), (state.response = "light");
    },
  },
});

export const { toggleDarkMode, toggleLightMode } = themeSlice.actions;

export default themeSlice.reducer;
