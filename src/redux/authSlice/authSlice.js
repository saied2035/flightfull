import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authRequests from './authApi/authApi';

export const signup = createAsyncThunk(
  'authentication/signup', async (body) => {
    const { form, navigate, setError } = body;
    const response = await authRequests.signup(form);
    console.log({ response });
    if (response.status && response.status === 200) {
      navigate('/');
    }
    if (response.errors || response.error) {
      setError(response.error || response.errors);
    }
    return response.errors || response.error || response.status;
  },
);

export const login = createAsyncThunk(
  'authentication/login', async (body) => {
    const { form, navigate, setError } = body;
    const response = await authRequests.login(form);
    console.log({ response });
    if (response.status && response.status === 200) {
      navigate('/');
    }
    if (response.errors || response.error) {
      setError(response.error || response.errors);
    }
    return response.errors || response.error || response.status;
  },
);

export const isLoggedIn = createAsyncThunk(
  'authentication/isLoggedIn', async (body) => {
    const { navigate, pathname, type } = body;
    const response = await authRequests.isLoggedIn();
    console.log({ response });
    if (response.status && response.status === 401) {
      navigate(/^\/(login|signup)$/.test(pathname) ? pathname : '/login');
    } else {
      navigate(type === 'normalPage' ? pathname : '/');
    }
    return response.error || response.status;
  },
);

const authSlice = createSlice({
  name: 'authentication',
  initialState: { status: 'idle', error: '' },
  extraReducers: (builder) => {
    // signup
    builder.addCase(signup.pending, (state) => {
      const modifier = state;
      modifier.status = 'Pending';
    });

    builder.addCase(signup.fulfilled, (state, action) => {
      const modifier = state;
      if (typeof action.payload === 'number') {
        modifier.status = action.payload;
        modifier.error = '';
      } else {
        modifier.error = action.payload;
        modifier.status = 'Failed';
      }
    });

    builder.addCase(signup.rejected, (state, action) => {
      const modifier = state;
      modifier.error = action.error.message;
      modifier.status = 'Failed';
    });
    // login
    builder.addCase(login.pending, (state) => {
      const modifier = state;
      modifier.status = 'Pending';
    });

    builder.addCase(login.fulfilled, (state, action) => {
      const modifier = state;
      if (typeof action.payload === 'number') {
        modifier.status = action.payload;
        modifier.error = '';
      } else {
        modifier.error = action.payload;
        modifier.status = 'Failed';
      }
    });

    builder.addCase(login.rejected, (state, action) => {
      const modifier = state;
      modifier.error = action.error.message;
      modifier.status = 'Failed';
    });
    // is user logged in ?
    builder.addCase(isLoggedIn.pending, (state) => {
      const modifier = state;
      modifier.status = 'Pending';
    });

    builder.addCase(isLoggedIn.fulfilled, (state, action) => {
      const modifier = state;
      if (typeof action.payload === 'number') {
        modifier.status = action.payload;
        modifier.error = '';
      } else {
        modifier.error = action.payload;
        modifier.status = 'Failed';
      }
    });

    builder.addCase(isLoggedIn.rejected, (state, action) => {
      const modifier = state;
      modifier.error = action.error.message;
      modifier.status = 'Failed';
    });
  },
});

const authReducer = authSlice.reducer;

export default authReducer;
