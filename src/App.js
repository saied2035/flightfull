import { Routes, Route } from 'react-router-dom';
import Signup from './container/components/signup/signup';
import Login from './container/components/login/login';
import Container from './container/container';
import HomePage from './container/components/homePage/homePage';
import AirlineDetails from './container/components/airlineDetails/airlineDetails';
import ReserveAirline from './container/components/reserveAirline/reserveAirline';
import Reservations from './container/components/reservations/reservations';

const App = () => (
  <Routes>
    <Route path="/" element={<Container />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/airlines" element={<HomePage />} />
      <Route path="/airlines/:id" element={<AirlineDetails />} />
      <Route exact path="/reservations/new" element={<ReserveAirline />} />
      <Route exact path="/reservations" element={<Reservations />} />
    </Route>
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
  </Routes>
);

export default App;
