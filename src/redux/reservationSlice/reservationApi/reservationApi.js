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

const createReservation = (body) => fetch(`${url}/reservations`, { ...options, body: JSON.stringify(body) })
  .then((data) => data.json())
  .catch(() => ({ error: 'Server is down.' }));

const deleteReservation = (id) => fetch(`${url}/reservations/${id}`, { ...options, method: 'DELETE' })
  .then((data) => data.json())
  .catch(() => ({ error: 'Server is down.' }));

const reservationsRequests = { createReservation, deleteReservation };

export default reservationsRequests;
