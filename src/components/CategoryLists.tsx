/* eslint-disable react/prop-types */

import CategoryButton from './CategoryButton';
import { useLiveQuery } from 'dexie-react-hooks';
import { getAllCategories } from '@/services/dbServices';
import NewCategoryButton from './buttons/NewCategoryButton';
import { Skeleton } from '@/ui/Skeleton';

function CategoryList() {
  const categories = useLiveQuery(getAllCategories, [], null);

  return (
    <section className={` p-5`}>
      <div className='grid grid-cols-auto  gap-5 [&>*]:w-full [&>*]:h-full'>
        <NewCategoryButton />
        {!categories && <CategoryListSkeleton />}
        {categories && categories.length > 0
          ? categories.map((category) => (
              <CategoryButton key={category.id} category={category} />
            ))
          : null}
      </div>
    </section>
  );
}

export default CategoryList;

function CategoryListSkeleton() {
  return (
    <>
      <div className='border rounded-md border-primary/50 h-full w-full flex flex-col justify-center  items-center space-y-2'>
        <Skeleton className='h-10 w-10' />
        <Skeleton className='h-3 w-full max-w-[60%]' />
      </div>
      <div className='border rounded-md border-primary/50 h-full w-full flex flex-col justify-center  items-center space-y-2'>
        <Skeleton className='h-10 w-10' />
        <Skeleton className='h-3 w-full max-w-[60%]' />
      </div>
      <div className='border rounded-md border-primary/50 h-full w-full flex flex-col justify-center  items-center space-y-2'>
        <Skeleton className='h-10 w-10' />
        <Skeleton className='h-3 w-full max-w-[60%]' />
      </div>
      <div className='border rounded-md border-primary/50 h-full w-full flex flex-col justify-center  items-center space-y-2'>
        <Skeleton className='h-10 w-10' />
        <Skeleton className='h-3 w-full max-w-[60%]' />
      </div>
    </>
  );
}
