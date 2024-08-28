import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  currentUser: Record<string, any>;
  isAuth: boolean;
}

const initialState: UserState = {
  currentUser: {},
  isAuth: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<Record<string, any>>) {
      state.currentUser = action.payload;
      state.isAuth = true;
    },
    logout(state) {
      localStorage.removeItem("token");
      state.currentUser = {};
      state.isAuth = false;
    },
  },
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
