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

const createAirline = (body) => fetch(`${url}/airlines`, { ...options, body: JSON.stringify(body) })
  .then((data) => data.json())
  .catch(() => ({ error: 'Server is down.' }));

const deleteAirline = (id) => fetch(`${url}/airlines/${id}`, { ...options, method: 'DELETE' })
  .then((data) => data.json())
  .catch(() => ({ error: 'Server is down.' }));

const airlinesRequests = { createAirline, deleteAirline };

export default airlinesRequests;
