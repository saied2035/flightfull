import { Routes, Route } from 'react-router-dom';
import Signup from './container/components/signup/signup';
import Login from './container/components/login/login';
import Container from './container/container';
import HomePage from './container/components/homePage/homePage';
import AirlineDetails from './container/components/airlineDetails/airlineDetails';
import ReserveAirline from './container/components/reserveAirline/reserveAirline';
import Reservations from './container/components/reservations/reservations';
import AddAirline from './container/components/addAirline/addAirline';
import Step1 from './container/components/addAirline/step1/step1';
import Step2 from './container/components/addAirline/step2/step2';
import Step3 from './container/components/addAirline/step3/step3';
import Step4 from './container/components/addAirline/step4/step4';

const App = () => (
  <Routes>
    <Route path="/" element={<Container />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/airlines/new" element={<AddAirline />}>
        <Route path="/airlines/new" element={<Step1 />} />
        <Route path="step1" element={<Step1 />} />
        <Route path="step2" element={<Step2 />} />
        <Route path="step3" element={<Step3 />} />
        <Route path="step4" element={<Step4 />} />
      </Route>
      <Route path="/airlines" element={<HomePage />} />
      <Route path="/airlines/:id" element={<AirlineDetails />} />
      <Route path="/reservations/new" element={<ReserveAirline />} />
      <Route path="/reservations" element={<Reservations />} />
    </Route>
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
  </Routes>
);

export default App;
