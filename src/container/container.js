import PropTypes from 'prop-types';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Navbar from './components/navbar/navbar';
import { isLoggedIn } from '../redux/authSlice/authSlice';
import Signout from './signout';

const Container = ({ authStatus }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isWhite = /(^\/airlines\/[0-9]+$|^\/airlines\/$|^\/airlines$|^\/$|^\/reservations$)/.test(pathname);
  useEffect(() => {
    dispatch(isLoggedIn({ navigate, pathname, type: 'normalPage' }));
  }, []);
  return (
    authStatus === 200
  && (
  <main id="page-container" className="relative flex max-h-screen h-screen max-w-[100vw]">
    <Navbar />
    <Outlet />
    <Signout isWhite={isWhite} navigate={navigate} dispatch={dispatch} />
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
