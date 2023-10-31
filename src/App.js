import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Signup from './container/components/signup/signup';
import Login from './container/components/login/login';
import Container from './container/container';
import HomePage from './container/components/homePage/homePage';
import AirlineDetails from './container/components/airlineDetails/airlineDetails';
import ReserveAirline from './container/components/reserveAirline/reserveAirline';
import Reservations from './container/components/reservations/reservations';
import AddAirline from './container/components/addAirline/addAirline';

const App = () => {
  const authStatus = useSelector((state) => state.authReducer.status);
  return (
    <Routes>
      <Route path="/" element={<Container authStatus={authStatus} />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/airlines/new" element={<AddAirline />} />
        <Route path="/airlines" element={<HomePage />} />
        <Route path="/your_airlines" element={<HomePage />} />
        <Route path="/airlines/:id" element={<AirlineDetails />} />
        <Route path="/reservations/new" element={<ReserveAirline />} />
        <Route path="/reservations" element={<Reservations />} />
      </Route>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
