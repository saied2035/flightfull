import { Routes, Route } from 'react-router-dom';
import Signup from './components/signup/signup';
import Login from './components/login/login';
import HomePage from './components/homePage/homePage';

const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
  </Routes>
);

export default App;
