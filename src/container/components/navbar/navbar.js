import DesktopNavbar from './desktopNavbar/desktopNavbar';
import MobileNavbar from './mobileNavbar/mobileNavbar';
import { routesArr, socialMediaArr } from './navbarConstants';

const Navbar = () => (
  <>
    <DesktopNavbar routesArr={routesArr} socialMediaArr={socialMediaArr} />
    <MobileNavbar routesArr={routesArr} socialMediaArr={socialMediaArr} />
  </>
);

export default Navbar;
