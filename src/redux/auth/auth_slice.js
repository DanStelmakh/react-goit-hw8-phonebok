import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, getCurrentUSer } from './auth_operations';

const authInitialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: {
    //success registration
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    // success logIn
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state) {
      state.isLoggedIn = false;
      state.token = null;
      state.user = { name: null, email: null };
    },
    [getCurrentUSer.fulfilled](state, action) {
      state.user = { ...action.payload };
      state.isLoggedIn = true;
    },
  },
});
export const authReducer = authSlice.reducer;
