('use client');
import { IEditCode, createCode, editCode } from '@/services/dbServices';
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

const formSchema = z.object({
  title: z
    .string({
      required_error: 'code title is required',
    })
    .min(2, 'title should be greater than 2 characters')
    .max(50, 'title should not exceed 50 characters'),
  code: z.string({
    required_error: 'code is required',
  }),
});

type EditForm = {
  action: 'edit';
  closeModal: () => void;
  defaultValues: IEditCode;
  categoryId?: number;
};

type NewForm = {
  action: 'create';
  closeModal: () => void;
  defaultValues?: IEditCode;
  categoryId: number;
};

type ICodeForm = NewForm | EditForm;

export default function CodeForm({
  closeModal,
  action = 'create',
  defaultValues,
  categoryId,
}: ICodeForm) {
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      title: defaultValues?.title ?? '',
      code: defaultValues?.code ?? '',
    },
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      if (action === 'edit') {
        await editCode(defaultValues?.id as number, data);
      }

      if (action === 'create') {
        await createCode({
          ...data,
          isFavourite: false,
          categories: [categoryId as number],
        });
      }

      form.reset();
      closeModal();
      toast.success(
        `Code was sucessfully ${action === 'create' ? 'created' : 'edited'}`,
      );
    } catch (error) {
      console.log(error);

      toast.error(`failed to ${action} code`);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-3 text-base w-full'
      >
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder='Night Plan' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='code'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Code</FormLabel>
              <FormControl>
                <Input placeholder='*777#' {...field} />
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
            {action} Code
          </Button>
        </div>
      </form>
    </Form>
  );
}
