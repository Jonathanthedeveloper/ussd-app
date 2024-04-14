import Header from './Header';
import Navbar from './Navbar';
import { Outlet } from 'react-router';

export default function AppLayout() {
  return (
    <>
      <Header />
      <div className='flex flex-col'>
        <div className='flex-grow'>{<Outlet />}</div>
        <Navbar />
      </div>
    </>
  );
}
