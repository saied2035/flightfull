import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authRequests from './authApi/authApi';

export const signup = createAsyncThunk(
  'authentication/signup', async (body) => {
    const { form, navigate, setError } = body;
    const response = await authRequests.signup(form);
    if (response.status && response.status === 200) {
      localStorage.setItem('token', response.token);
      navigate('/');
    }
    if (response.errors || response.error) {
      setError(response.error || response.errors);
    }
    return response.errors || response.error || response;
  },
);

export const login = createAsyncThunk(
  'authentication/login', async (body) => {
    const { form, navigate, setError } = body;
    const response = await authRequests.login(form);
    if (response.status && response.status === 200) {
      navigate('/');
      localStorage.setItem('token', response.token);
    }
    if (response.errors || response.error) {
      setError(response.error || response.errors);
    }
    return response.errors || response.error || response;
  },
);

export const signout = createAsyncThunk(
  'authentication/signout', async (navigate) => {
    const response = await authRequests.signout();
    if (response.status === 200) {
      localStorage.removeItem('token');
      navigate('/login');
      return { status: 401, error: '', user_id: null };
    }

    return { error: response.error, status: 400 };
  },
);

export const isLoggedIn = createAsyncThunk(
  'authentication/isLoggedIn', async (body) => {
    const { navigate, pathname, type } = body;
    const response = await authRequests.isLoggedIn();
    if (response.status && (response.status === 401 || response.status === 404)) {
      navigate(/^\/(login|signup)$/.test(pathname) ? pathname : '/login');
    } else {
      navigate(type === 'normalPage' ? pathname : '/');
    }
    return response.error || response;
  },
);

const authSlice = createSlice({
  name: 'authentication',
  initialState: { status: 'idle', error: '', user_id: null },
  extraReducers: (builder) => {
    // signup
    builder.addCase(signup.pending, (state) => {
      const modifier = state;
      modifier.status = 'Pending';
    });

    builder.addCase(signup.fulfilled, (state, action) => {
      const modifier = state;
      if (typeof action.payload.status === 'number') {
        modifier.status = action.payload.status;
        modifier.user_id = action.payload.user_id;
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
      if (typeof action.payload.status === 'number') {
        modifier.status = action.payload.status;
        modifier.user_id = action.payload.user_id;
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

    // signout
    builder.addCase(signout.pending, (state) => {
      const modifier = state;
      modifier.status = 'Pending';
    });

    builder.addCase(signout.fulfilled, (state, action) => {
      const modifier = state;
      modifier.status = action.payload.status;
      modifier.user_id = action.payload.user_id;
      modifier.error = action.payload.error;
    });

    builder.addCase(signout.rejected, (state, action) => {
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
      if (typeof action.payload.status === 'number' && action.payload.status === 200) {
        modifier.status = action.payload.status;
        modifier.user_id = action.payload.user_id;
        modifier.error = '';
      } else {
        modifier.error = action.payload;
        modifier.user_id = null;
        modifier.status = 'Failed';
      }
    });

    builder.addCase(isLoggedIn.rejected, (state, action) => {
      const modifier = state;
      modifier.error = action.error.message;
      modifier.user_id = null;
      modifier.status = 'Failed';
    });
  },
});

const authReducer = authSlice.reducer;

export default authReducer;
