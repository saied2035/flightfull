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
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
};

const reviver = (key, value) => (key === 'id'
|| (key === 'user_id' && value !== null) || (key === 'airline_id' && value !== null) ? `${value}` : value);

const createAirline = (body) => fetch(`${url}/airlines`, { ...options, body: JSON.stringify(body) })
  .then((data) => data.text()).then((data) => JSONbig.parse(data, reviver))
  .catch(() => ({ error: 'Server is down.' }));

const deleteAirline = (id) => fetch(`${url}/airlines/${id}`, { ...options, method: 'DELETE' })
  .then((data) => data.text()).then((data) => JSONbig.parse(data, reviver))
  .catch(() => ({ error: 'Server is down.' }));

const airlinesRequests = { createAirline, deleteAirline };

export default airlinesRequests;
