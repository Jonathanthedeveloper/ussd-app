/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */

import { IoCall, IoStar, IoStarOutline } from 'react-icons/io5';
import { toggleFavourite } from '../services/dbServices';
import { Code } from '../../configs/db';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '@/ui/ContextMenu';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/ui/Dialog';
import { useState } from 'react';
import { Button } from '@/ui/Button';
import CodeForm from './forms/CodeForm';

const CodeItem = function ({ code }: { code: Code }) {
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
        <ContextMenuTrigger>
          <li className='flex items-center justify-between bg-gray-50 rounded-md px-5 py-2 gap-3 shadow-sm w-full'>
            <div className=''>
              <h6 className='capitalize font-medium'>{code.title}</h6>
              <p className='text-gray-500 text-sm'>{code.code}</p>
            </div>
            <div className='flex items-center justify-center space-x-2'>
              <button
                className='p-2'
                onClick={() =>
                  toggleFavourite(code.id as number, code.isFavourite)
                }
              >
                {code.isFavourite ? (
                  <IoStar size={20} className='text-primary' />
                ) : (
                  <IoStarOutline size={20} className='text-primary' />
                )}
              </button>
              <a
                href={`tel:${code.code.replaceAll('#', '%23')}`}
                className='text-primary p-2 ml-auto'
              >
                <IoCall size={20} />
              </a>
            </div>
          </li>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem
            onClick={() => toggleFavourite(code.id as number, code.isFavourite)}
          >
            {code.isFavourite ? 'Unbookmark' : 'Bookmark'}
          </ContextMenuItem>
          <DialogTrigger asChild onClick={() => setContextAction('edit')}>
            <ContextMenuItem>Edit</ContextMenuItem>
          </DialogTrigger>
          <DialogTrigger asChild onClick={() => setContextAction('delete')}>
            <ContextMenuItem>Delete</ContextMenuItem>
          </DialogTrigger>
        </ContextMenuContent>
      </ContextMenu>
      <DialogContent>
        {contextAction === 'delete' && (
          <>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. Are you sure you want to
                permanently delete this code
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant='destructive' type='submit' onClick={() => {}}>
                Confirm
              </Button>
            </DialogFooter>
          </>
        )}

        {contextAction === 'edit' && (
          <>
            <CodeForm
              closeModal={closeModal}
              defaultValues={code}
              action='edit'
            />
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CodeItem;
