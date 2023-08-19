import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../flightful-logo.png';

const DesktopNavbar = ({ routesArr, socialMediaArr }) => (
  <nav className="sm:flex hidden relative flex-col gap-y-24 w-44 h-screen border-r-2 border-r-[#f8f8f8] bg-white">
    <img
      className=" w-full transition-all duration-[650ms] ease-linear"
      src={logo}
      alt="logo pic"
    />
    <ul className="pl-3 flex mb-10 flex-col overflow-x-hidden h-fit w-full">
      {
          routesArr.map((route) => (
            <li key={route.path} className="font-['Repo'] w-full">
              <NavLink
                className="block w-full p-2 px-3"
                to={route.path}
              >
                {route.name}
              </NavLink>
            </li>
          ))
        }
    </ul>
    <ul className="absolute bottom-4 pl-3 gap-x-3 flex justify-center overflow-x-hidden w-full">
      {
          socialMediaArr.map((link) => (
            <li key={link.name}>
              <a className="w-fit" target="_blank" href={link.url} rel="noreferrer">
                <img alt={link.name} src={link.image} />
              </a>
            </li>
          ))
        }
    </ul>
  </nav>
);

DesktopNavbar.propTypes = {
  routesArr: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  socialMediaArr: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};
export default DesktopNavbar;
