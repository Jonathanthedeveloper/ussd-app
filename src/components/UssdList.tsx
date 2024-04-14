/* eslint-disable react/prop-types */

import { Code } from '../../configs/db';
import CodeItem from './CodeItem';

const UssdList = ({ codes }: { codes: Code[] }): JSX.Element => {
  return (
    <ul className='grid gap-5'>
      {codes.map((code) => {
        return <CodeItem key={code.id} code={code} />;
      })}
    </ul>
  );
};
export default UssdList;
