import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import authReducer from './authSlice/authSlice';
import airlineReducer from './airlineSlice/airlineSlice';

const store = configureStore({
  reducer: { authReducer, airlineReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
