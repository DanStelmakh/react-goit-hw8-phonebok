import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, getCurrentUSer } from './auth_operations';

const authInitialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: {
    //registration
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    //  logIn
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    //logOut
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    //refresh
    [getCurrentUSer.pending](state) {
      state.isRefreshing = true;
    },
    [getCurrentUSer.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    [getCurrentUSer.rejected](state) {
      state.isRefreshing = false;
    },
  },
});
export const authReducer = authSlice.reducer;
