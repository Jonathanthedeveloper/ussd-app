/* eslint-disable react/prop-types */

import { useNavigate, useLocation } from 'react-router';
import UssdList from '../components/UssdList.js';
import { BiArrowBack, BiDotsHorizontalRounded } from 'react-icons/bi';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../../configs/db.js';
import NewCodeButton from '@/components/buttons/NewCodeButton.js';

function Codes() {
  const navigate = useNavigate();
  const { state: currentCategory } = useLocation();

  const codes = useLiveQuery(
    async () => {
      if (!currentCategory || currentCategory.length === 0) return [];

      return await db.codes
        .where('categories')
        .equals(+currentCategory.id)
        .toArray();
    },
    [currentCategory],
    [],
  );

  if (!codes) return 'loading';

  return (
    <div className='bg-primary/5 min-h-screen'>
      <nav className='sticky top-0 shadow-sm bg-primary px-2 py-3 grid grid-cols-[auto,1fr,auto] gap-5 items-center justify-center'>
        <button
          className='p-2 bg-white rounded-md col-start-1 col-end-2'
          onClick={() => navigate(-1)}
        >
          <BiArrowBack />
        </button>

        <div className='col-start-2 col-end-2 flex justify-center uppercase text-white font-semibold'>
          {currentCategory?.name}
        </div>
        <NewCodeButton category={currentCategory} />
      </nav>
      <div className={`p-2 md:p-5`}>{<UssdList codes={codes} />}</div>
    </div>
  );
}

export default Codes;
