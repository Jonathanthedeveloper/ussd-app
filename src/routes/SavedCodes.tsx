/* eslint-disable react/prop-types */

import UssdList from '../components/UssdList.js';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../../configs/db.js';

function SavedCodes() {
  const codes = useLiveQuery(
    async () =>
      await db.codes
        .filter(({ isFavourite }) => isFavourite === true)
        .toArray(),
    [],
    [],
  );

  return (
    <div className=' p-2 md:p-5'>
      <UssdList codes={codes} />
    </div>
  );
}

export default SavedCodes;
