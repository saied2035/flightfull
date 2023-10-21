import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import authReducer from './authSlice/authSlice';

const store = configureStore({
  reducer: { authReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
