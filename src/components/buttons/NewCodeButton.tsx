import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/ui/Dialog';
import { BiPlus } from 'react-icons/bi';
import { useState } from 'react';
import CodeForm from '../forms/CodeForm';
import { Category } from '../../../configs/db';

export default function NewCodeButton({ category }: { category: Category }) {
  const [open, setOpen] = useState(false);

  function closeModal() {
    setOpen(false);
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className='p-2 bg-white rounded-md'>
        <BiPlus />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Code</DialogTitle>
        </DialogHeader>
        <CodeForm
          categoryId={category.id as number}
          action='create'
          closeModal={closeModal}
        />
      </DialogContent>
    </Dialog>
  );
}
