import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { isLoggedIn, login, signout } from '../authSlice/authSlice';
import reservationsRequests from './reservationApi/reservationApi';

export const createReservation = createAsyncThunk(
  'reservations/createReservation', async (body) => {
    const { form, navigate, setError } = body;
    const response = await reservationsRequests.createReservation(form);
    if (response.reservations) {
      navigate('/reservations');
    } else {
      setError(response.error);
    }
    return response;
  },
);

export const deleteReservation = createAsyncThunk(
  'reservations/deleteReservation', async (body) => {
    const {
      id, reservantionSlide, setReservationSlide, setError,
    } = body;
    const response = await reservationsRequests.deleteReservation(id);
    if (reservantionSlide > 0) {
      setReservationSlide(reservantionSlide - 1);
    }
    if (response.error) {
      setError(response.error);
    }
    return response;
  },
);

const reservationSlice = createSlice({
  name: 'reservations',
  initialState: {
    reservations: [],
    pending: false,
    error: '',
  },
  extraReducers: (builder) => {
    // login
    builder.addCase(login.fulfilled, (state, action) => {
      const modifier = state;
      if (typeof action.payload.status === 'number') {
        modifier.reservations = action.payload.reservations;
      }
    });
    // signout
    builder.addCase(signout.fulfilled, (state) => {
      const modifier = state;
      modifier.reservations = [];
    });
    // is user logged in ?
    builder.addCase(isLoggedIn.fulfilled, (state, action) => {
      const modifier = state;
      if (typeof action.payload.status === 'number' && action.payload.status === 200) {
        modifier.reservations = action.payload.reservations;
      }
    });
    // create reservation
    builder.addCase(createReservation.pending, (state) => {
      const modifier = state;
      modifier.pending = true;
    });

    builder.addCase(createReservation.fulfilled, (state, action) => {
      const modifier = state;
      if (action.payload.reservations) {
        modifier.pending = false;
        modifier.error = '';
        modifier.reservations = action.payload.reservations;
      } else {
        modifier.pending = false;
        modifier.error = action.payload.error;
      }
    });

    builder.addCase(createReservation.rejected, (state, action) => {
      const modifier = state;
      modifier.pending = false;
      modifier.error = action.payload.error;
    });
    // delete reservation
    builder.addCase(deleteReservation.pending, (state) => {
      const modifier = state;
      modifier.pending = true;
    });

    builder.addCase(deleteReservation.fulfilled, (state, action) => {
      const modifier = state;
      if (action.payload.reservations) {
        modifier.pending = false;
        modifier.error = '';
        modifier.reservations = action.payload.reservations;
      } else {
        modifier.pending = false;
        modifier.error = action.payload.error;
      }
    });

    builder.addCase(deleteReservation.rejected, (state, action) => {
      const modifier = state;
      if (action.payload.error) {
        modifier.pending = false;
        modifier.error = action.payload.error;
      }
    });
  },
});

const reservationReducer = reservationSlice.reducer;

export default reservationReducer;
