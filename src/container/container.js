import PropTypes from 'prop-types';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Navbar from './components/navbar/navbar';
import { isLoggedIn } from '../redux/authSlice/authSlice';

const Container = ({ authStatus }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(isLoggedIn({ navigate, pathname, type: 'normalPage' }));
  }, []);
  return (
    authStatus === 200
  && (
  <main id="page-container" className="flex max-h-screen h-screen max-w-[100vw]">
    <Navbar />
    <Outlet />
  </main>
  )
  );
};

Container.propTypes = {
  authStatus: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]).isRequired,
};
export default Container;
