('use client');
import {
  IEditCategory,
  INewCategory,
  createCategory,
  editCategory,
} from '@/services/dbServices'; // Import the INewCategory type from the appropriate file
import { BiImageAdd } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/ui/Form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Input } from '@/ui/Input';
import { Button } from '@/ui/Button';
import { Category } from '../../../configs/db';

const MAX_FILE_SIZE = 5242880; // 5MB

const formSchema = z.object({
  name: z
    .string({
      required_error: 'category name is required',
    })
    .min(2, 'category name should be gr')
    .max(50, 'category name should not exceed 50 characters'),
  image: z
    .instanceof(File)
    .optional()
    .refine((file) => file?.size ?? 0 <= MAX_FILE_SIZE, {
      message: `image size should not exceed ${MAX_FILE_SIZE / 1024 / 1024}MB`,
    }),
});

type EditForm = {
  action: 'edit';
  closeModal: () => void;
  defaultValues: IEditCategory;
};

type NewForm = {
  action: 'create';
  closeModal: () => void;
  defaultValues?: IEditCategory;
};

type ICategoryForm = NewForm | EditForm;

export default function CategoryForm({
  closeModal,
  action = 'create',
  defaultValues,
}: ICategoryForm) {
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      name: defaultValues?.name ?? '',
      image: defaultValues?.image ?? undefined,
    },
    resolver: zodResolver(formSchema),
  });

  const [imageUrl, setImageUrl] = useState('');
  const image = form.watch('image');
  const fileRef = form.register('image');

  /**
   * This Effect isn't needed when createing a new category
   * but when editing a category it need to sync the received/prevous image
   */
  useEffect(() => {
    if (!image || image.length <= 0 || imageUrl) return;
    try {
      let url = image instanceof File ? URL.createObjectURL(image) : image;
      setImageUrl(url);
    } catch (error) {
      console.error(error);
    }
  }, [image, imageUrl]);

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      const categoryData: INewCategory = {
        name: data.name,
        image: data.image as File,
      };

      if (action === 'edit') {
        const { id } = defaultValues as Category;
        await editCategory(id as number, categoryData as IEditCategory);
        form.reset();
        closeModal();
        toast.success(`${data.name} category was successfully updated`);
        return;
      }
      await createCategory(categoryData);
      form.reset();
      closeModal();
      toast.success(`${data.name} category was successfully created`);
    } catch (error) {
      toast.error('failed to create category');
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        action=''
        className='space-y-3 text-base w-full'
      >
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder='Ntel' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='image'
          render={({ field: { ref, ...field } }) => (
            <FormItem>
              <FormLabel className='space-y-2' htmlFor='category-image'>
                <span>Image</span>
                {!imageUrl ? (
                  <div className='w-full max-h-[10rem] bg-primary/10 border-primary border aspect-video border-dashed rounded-md flex flex-col items-center justify-center space-y-2'>
                    <BiImageAdd className='w-12 h-12' />
                    <span className='text-gray-500'>
                      <u className='text-primary'>Click to upload</u> or drag
                      and drop
                    </span>
                  </div>
                ) : (
                  <img
                    src={
                      image instanceof File ? imageUrl : `images/${image}.png`
                    }
                    className='block w-full max-h-[10rem] aspect-video object-cover'
                  />
                )}
              </FormLabel>
              <FormControl>
                <Input
                  id='category-image'
                  type='file'
                  accept='image/*'
                  className='hidden'
                  {...fileRef}
                  onChange={(event) => {
                    field.onChange(event.target?.files?.[0] ?? undefined);

                    if (event.target.files)
                      setImageUrl(
                        URL.createObjectURL(event.target.files[0]) ?? '',
                      );
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className='flex justify-end space-x-2'>
          <Button type='button' variant='secondary' onClick={closeModal}>
            Cancel
          </Button>
          <Button type='submit' className='capitalize'>
            {action} Category
          </Button>
        </div>
      </form>
    </Form>
  );
}
