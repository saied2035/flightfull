import JSONbig from 'json-bigint';

const url = process.env.REACT_APP_BASE_URL;
const options = {
  method: 'POST',
  mode: 'cors',
  cache: 'no-cache',
  redirect: 'follow',
  referrer: 'no-referrer',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
};

const reviver = (key, value) => (key === 'id'
|| (key === 'user_id' && value !== null) || (key === 'airline_id' && value !== null) ? `${value}` : value);

const signup = (body) => fetch(`${url}/auth/signup`, { ...options, body: JSON.stringify(body) })
  .then((data) => data.text()).then((data) => JSONbig.parse(data, reviver))
  .catch(() => ({ error: 'Server is down.' }));

const login = (body) => fetch(`${url}/auth/login`, { ...options, body: JSON.stringify(body) })
  .then((data) => data.text()).then((data) => JSONbig.parse(data, reviver))
  .catch(() => ({ error: 'Server is down.' }));

const signout = () => fetch(`${url}/auth/signout`, {
  ...options,
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
}).then((data) => data.text()).then((data) => JSONbig.parse(data, reviver))
  .catch(() => ({ error: 'Server is down.' }));

const isLoggedIn = () => fetch(`${url}/auth/login_check`, {
  ...options,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
})
  .then((data) => data.text()).then((data) => JSONbig.parse(data, reviver))
  .catch(() => ({ status: 401 }));

const authRequests = {
  signup, login, signout, isLoggedIn,
};

export default authRequests;
