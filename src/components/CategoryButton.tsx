/* eslint-disable react/prop-types */

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '@/ui/ContextMenu';

import { useNavigate } from 'react-router';
import { Category } from '../../configs/db';
import { IEditCategory, deleteCategory } from '@/services/dbServices';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogFooter,
  DialogDescription,
  DialogTitle,
  DialogHeader,
} from '@/ui/Dialog';
import { Button } from '@/ui/Button';
import { useEffect, useState } from 'react';
import CreateCategoryForm from './forms/CategoryForm';

function CategoryButton({ category }: { category: Category }) {
  const navigate = useNavigate();
  const [contextAction, setContextAction] = useState<'edit' | 'delete' | null>(
    null,
  );
  const [open, setOpen] = useState(false);

  function closeModal() {
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <ContextMenu>
        <ContextMenuTrigger asChild>
          <button
            onClick={() => {
              navigate(`/category/${category.slug}`, {
                state: category,
              });
            }}
            className={`rounded-lg aspect-square py-4 bg-white font-bold text-black border-primary/50 border flex flex-col items-center justify-around`}
          >
            <img
              src={
                category.image instanceof Blob
                  ? URL.createObjectURL(category.image)
                  : `images/${category.image}.png`
              }
              className='object-cover h-10 w-10 block'
            />
            <span>{category.name}</span>
          </button>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <DialogTrigger asChild onClick={() => setContextAction('edit')}>
            <ContextMenuItem>Edit</ContextMenuItem>
          </DialogTrigger>
          <DialogTrigger asChild onClick={() => setContextAction('delete')}>
            <ContextMenuItem>Delete</ContextMenuItem>
          </DialogTrigger>
        </ContextMenuContent>
      </ContextMenu>

      <DialogContent className='rounded-lg'>
        {contextAction === 'delete' && (
          <>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. Are you sure you want to
                permanently delete this category
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button
                variant='destructive'
                type='submit'
                onClick={() => deleteCategory(category.id as number)}
              >
                Confirm
              </Button>
            </DialogFooter>
          </>
        )}

        {contextAction === 'edit' && (
          <>
            <CreateCategoryForm
              closeModal={closeModal}
              defaultValues={category as IEditCategory}
              action='edit'
            />
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default CategoryButton;
