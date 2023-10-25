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

const createAirline = (body) => fetch(`${url}/auth/signup`, { ...options, body: JSON.stringify(body) })
  .then((data) => data.json())
  .catch(() => ({ error: 'Server is down.' }));

const airlinesRequests = { createAirline };

export default airlinesRequests;
