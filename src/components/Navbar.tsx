import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { BiCog, BiHome, BiSave } from 'react-icons/bi';
import { IconType } from 'react-icons/lib';

export default function Navbar() {
  return (
    <nav className='fixed w-full bg-white bottom-0 px-2 py-2 border-t-primary/20 border-t text-xs font-bold text-gray-600'>
      <ul className='grid grid-cols-3 '>
        <Navbarlink label='Home' to='/' icon={BiHome} />
        <Navbarlink label='Saved' to='/saved' icon={BiSave} />
        <Navbarlink label='Settings' to='/settings' icon={BiCog} />
      </ul>
    </nav>
  );
}

function Navbarlink({
  label,
  to,
  icon: Icon,
}: {
  label: string;
  to: string;
  icon: IconType;
}) {
  return (
    <li className=''>
      <NavLink
        to={to}
        className='group flex flex-col items-center active:bg-transparent focus:bg-transparent focus-visible:bg-transparent'
      >
        <span className=' group-[.active]:bg-primary/20 group-[.active]:px-4 py-1 rounded-full '>
          {<Icon className='w-6 h-6 group-[.active]:text-black' />}
        </span>
        <span className='group-[.active]:text-black'>{label}</span>
      </NavLink>
    </li>
  );
}

Navbarlink.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
};
