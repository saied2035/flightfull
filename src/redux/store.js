import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import authReducer from './authSlice/authSlice';
import airlineReducer from './airlineSlice/airlineSlice';
import reservationReducer from './reservationSlice/reservationSlice';

const store = configureStore({
  reducer: { authReducer, airlineReducer, reservationReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
