import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  isLoggedIn, login, signout, signup,
} from '../authSlice/authSlice';
import airlinesRequests from './airlineApi/airlineApi';

export const createAirline = createAsyncThunk(
  'airlines/createAirline', async (body) => {
    const { form, navigate, setError } = body;
    const response = await airlinesRequests.createAirline(form);
    if (response.airlines) {
      const newAirline = response.airlines[0];
      const state = {
        startSlide: 0,
        previousPath: '/your_airlines',
        airlineId: newAirline.id,
        airline: {
          name: newAirline.name,
          imgSrc: newAirline.img_src,
          fee: newAirline.fee,
          optionToPurchase: newAirline.option_to_purchase,
          totalAmountPayable: newAirline.total_amount_payable,
        },
      };
      navigate(`/airlines/${newAirline.id}`, { state });
    } else {
      setError(response.error);
    }
    return response;
  },
);

export const deleteAirline = createAsyncThunk(
  'airlines/deleteAirline', async (body) => {
    const { id, setSlide, slide } = body;
    const response = await airlinesRequests.deleteAirline(id);
    if (slide > 0) {
      setSlide(slide - 1);
    }
    return response;
  },
);

const airlineSlice = createSlice({
  name: 'airlines',
  initialState: {
    airlines: [],
    user_airlines: [],
    airlines_length: 0,
    user_airlines_length: 0,
    pending: false,
    error: '',
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
    // create airline
    builder.addCase(createAirline.pending, (state) => {
      const modifier = state;
      modifier.pending = true;
    });

    builder.addCase(createAirline.fulfilled, (state, action) => {
      const modifier = state;
      if (action.payload.airlines) {
        modifier.pending = false;
        modifier.error = '';
        modifier.airlines = action.payload.airlines;
        modifier.airlines_length = action.payload.airlines.length;
        modifier.user_airlines = action.payload.user_airlines;
        modifier.user_airlines_length = action.payload.user_airlines.length;
      } else {
        modifier.pending = false;
        modifier.error = action.payload.error;
      }
    });

    builder.addCase(createAirline.rejected, (state, action) => {
      const modifier = state;
      modifier.pending = false;
      modifier.error = action.payload.error;
    });
    // delete airline
    builder.addCase(deleteAirline.pending, (state) => {
      const modifier = state;
      modifier.pending = true;
    });

    builder.addCase(deleteAirline.fulfilled, (state, action) => {
      const modifier = state;
      if (action.payload.airlines) {
        modifier.pending = false;
        modifier.error = '';
        modifier.airlines = action.payload.airlines;
        modifier.airlines_length = action.payload.airlines.length;
        modifier.user_airlines = action.payload.user_airlines;
        modifier.user_airlines_length = action.payload.user_airlines.length;
      } else {
        modifier.pending = false;
        modifier.error = action.payload.error;
      }
    });

    builder.addCase(deleteAirline.rejected, (state, action) => {
      const modifier = state;
      if (action.payload.error) {
        modifier.pending = false;
        modifier.error = action.payload.error;
      }
    });
  },
});

const airlineReducer = airlineSlice.reducer;

export default airlineReducer;
