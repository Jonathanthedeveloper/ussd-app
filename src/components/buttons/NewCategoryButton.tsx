import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/ui/Dialog';
import { BiPlus } from 'react-icons/bi';
import CreateCategoryForm from '../forms/CategoryForm';
import { useState } from 'react';

export default function NewCategoryButton() {
  const [open, setOpen] = useState(false);

  function closeModal() {
    setOpen(false);
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          className={`rounded-lg space-y-2 aspect-square p-4 bg-white font-bold text-black border-primary/50 border flex flex-col justify-center items-center border-dashed`}
        >
          <BiPlus className='h-8 w-8' />
          <span className='leading-none'>Add Category</span>
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Category</DialogTitle>
        </DialogHeader>
        <CreateCategoryForm action='create' closeModal={closeModal} />
      </DialogContent>
    </Dialog>
  );
}
