import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../flightful-logo.png';

const MobileNavbar = ({ routesArr, socialMediaArr }) => {
  const { pathname } = useLocation();
  const isActive = /(^\/airlines\/[0-9]+$|^\/airlines\/$|^\/airlines$)/.test(pathname);
  const isAddNewAirlineAcitive = /airlines\/new/.test(pathname);
  const [showList, setShowList] = useState(false);
  useEffect(() => {
    const handleWindowSize = (e) => {
      if (e.target.innerWidth > 639) setShowList(false);
    };
    window.addEventListener('resize', handleWindowSize);
    return () => {
      window.removeEventListener('resize', handleWindowSize);
    };
  }, []);
  return (
    <nav className={`min-[900px]:hidden flex flex-col gap-y-12 fixed max-w-full w-40 h-screen top-0 left-0
    transition-[background-color] duration-[650ms] z-50 
    ${showList ? 'border-r-2 border-r-[#f8f8f8] bg-white pointer-events-auto' : `border-none bg-transparent 
      pointer-events-none`}`}
    >
      <svg
        className={`absolute top-0 left-0 w-[15%] fill-black pointer-events-auto transition-all duration-700 
        ${showList ? 'ml-[87%] mt-2 rotate-[360deg]' : 'ml-0 mt-0 rotate-0'}`}
        viewBox="0 0 32 32"
        onClick={() => setShowList(showList === false)}
      >
        { showList
          ? (
            <path className="stroke-black max-w-full" strokeWidth="3" d="M 5 22 L 22 5 M 5 5 L 22 22" />
          )
          : (
            <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104
              ,0-2,0.896-2,2 s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2
              ,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2 S29.104,22,28,22z"
            />
          )}
      </svg>
      <img
        className={`transition-all duration-[650ms] ease-linear 
      ${showList ? 'w-full' : 'w-0'}`}
        src={logo}
        alt="logo pic"
      />
      <ul className={`pl-3 flex mb-10 flex-col transition-all duration-[650ms] ease-linear overflow-x-hidden 
      h-fit ${showList ? 'w-full' : 'w-0'}`}
      >
        {
          routesArr.map((route) => (
            <li key={route.path} className="font-['Repo'] w-full">
              <NavLink
                className={`${(route.path === '/' && isActive) || (route.path === '/airlines/new' && isAddNewAirlineAcitive) ? 'active' : ''} block w-full p-2 px-3`}
                to={route.path}
                onClick={() => setShowList(false)}
                end
              >
                {route.name}
              </NavLink>
            </li>
          ))
        }
      </ul>
      <ul className={`absolute bottom-4 pl-3 gap-x-3 flex justify-center transition-all duration-[650ms] ease-linear 
      overflow-x-hidden ${showList ? 'w-full' : 'w-0'}`}
      >
        {
          socialMediaArr.map((link) => (
            <li key={link.name}>
              <a className="w-fit" target="_blank" onClick={() => setShowList(false)} href={link.url} rel="noreferrer">
                <img alt={link.name} src={link.image} />
              </a>
            </li>
          ))
        }
      </ul>
    </nav>
  );
};

MobileNavbar.propTypes = {
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
export default MobileNavbar;
