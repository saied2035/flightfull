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
const signup = (body) => fetch(`${url}/auth/signup`, { ...options, body: JSON.stringify(body) })
  .then((data) => data.json())
  .catch(() => ({ error: 'Server is down.' }));

const login = (body) => fetch(`${url}/auth/login`, { ...options, body: JSON.stringify(body) })
  .then((data) => data.json())
  .catch(() => ({ error: 'Server is down.' }));

const isLoggedIn = () => fetch(`${url}/auth/login_check`, options)
  .then((data) => data.json())
  .catch(() => ({ status: 401 }));

const authRequests = { signup, login, isLoggedIn };

export default authRequests;
