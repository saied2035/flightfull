import { createSlice } from '@reduxjs/toolkit';
import {
  isLoggedIn, login, signout, signup,
} from '../authSlice/authSlice';

const airlineSlice = createSlice({
  name: 'airlines',
  initialState: {
    airlines: [], user_airlines: [], airlines_length: 0, user_airlines_length: 0,
  },
  extraReducers: (builder) => {
    // signup
    builder.addCase(signup.fulfilled, (state, action) => {
      const modifier = state;
      if (typeof action.payload.status === 'number') {
        modifier.airlines = action.payload.airlines;
        modifier.airlines_length = action.payload.airlines.length;
      }
    });
    // login
    builder.addCase(login.fulfilled, (state, action) => {
      const modifier = state;
      if (typeof action.payload.status === 'number') {
        modifier.airlines = action.payload.airlines;
        modifier.airlines_length = action.payload.airlines.length;
        modifier.user_airlines = action.payload.user_airlines;
        modifier.user_airlines_length = action.payload.user_airlines.length;
      }
    });
    // signout
    builder.addCase(signout.fulfilled, (state) => {
      const modifier = state;
      modifier.airlines = [];
      modifier.airlines_length = 0;
      modifier.user_airlines = [];
      modifier.user_airlines_length = 0;
    });
    // is user logged in ?
    builder.addCase(isLoggedIn.fulfilled, (state, action) => {
      const modifier = state;
      if (typeof action.payload.status === 'number' && action.payload.status === 200) {
        modifier.airlines = action.payload.airlines;
        modifier.airlines_length = action.payload.airlines.length;
        modifier.user_airlines = action.payload.user_airlines;
        modifier.user_airlines_length = action.payload.user_airlines.length;
      }
    });
  },
});

const airlineReducer = airlineSlice.reducer;

export default airlineReducer;
