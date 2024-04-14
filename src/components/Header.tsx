/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';
import logoUrl from '../assets/logo.svg';

/**
 * This Is the Header component displayed at the top of the page
 * @returns {JSX.Element} Header
 * @constructor
 */
function Header(): JSX.Element {
  return (
    <header className='bg-primary text-white w-full shadow-md sticky top-0 transition'>
      <div>
        <div className='text-center py-3 px-2 mb-5'>
          <div className='flex justify-center'>
            <Link to='/'>
              <img className='h-8' src={logoUrl} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
