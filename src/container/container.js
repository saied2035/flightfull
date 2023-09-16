import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar/navbar';

const Container = () => (
  <main id="page-container" className="flex max-h-screen h-screen max-w-[100vw]">
    <Navbar />
    <Outlet />
  </main>
);

export default Container;
