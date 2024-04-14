import slugify from 'slugify';
import { db } from '../../configs/db';
import toast from 'react-hot-toast';

export async function getAllCategories() {
  return await db.categories.toArray();
}

export async function getBookmarkedCodes() {
  return await db
    .table('codes')
    .filter(({ isFavourite }) => isFavourite === true)
    .toArray();
}

export interface INewCategory {
  name: string;
  image: File;
}
export async function createCategory(data: INewCategory) {
  const category = await db
    .table('categories')
    .where('name')
    .equals(data.name)
    .toArray();

  if (category.length > 0) {
    throw new Error('Category already exists');
  }

  const { name, image } = data;
  const id = await db.categories.add({
    name,
    image,
    slug: slugify(name, {
      lower: true,
    }),
  });
}

export async function deleteCategory(id: number) {
  await db.transaction(
    'rw',
    db.table('categories'),
    db.table('codes'),
    async () => {
      await db.table('categories').delete(id);
      await db
        .table('codes')
        .where('categories')
        .equals(id)
        .modify((code) => {
          const index = code.categories.indexOf(id);
          if (index !== -1) {
            code.categories.splice(index, 1);
          }
        });
    },
  );
}

export interface IEditCategory {
  id?: number;
  name: string;
  image: File;
  slug?: string;
}

export async function editCategory(id: number, data: IEditCategory) {
  const category = await db.categories.get(id);

  if (!category) {
    throw new Error('Category not found');
  }

  const { name, image } = data;
  await db.categories.update(id, {
    name,
    image,
    slug: slugify(name, {
      lower: true,
    }),
  });
}

export interface INewCode {
  title: string;
  code: string;
  categories: number[];
  isFavourite: boolean;
}

export async function createCode(data: INewCode) {
  const id = await db.codes.add(data);

  if (!id) throw new Error('Failed to create code');

  return id;
}

export interface IEditCode {
  id?: number;
  title?: string;
  code?: string;
  categories?: number[];
  isFavourite?: boolean;
  [key: string]: any; // Add index signature
}

export async function editCode(id: number, data: IEditCode) {
  const code = await db.codes.get(id);

  if (!code) {
    throw new Error('Code not found');
  }

  await db.codes.update(id, data);
}

export async function toggleFavourite(id: number, isFavorite: boolean) {
  try {
    await db.codes.update(id, {
      isFavourite: !isFavorite,
    });
  } catch (error) {
    console.log(error);
    toast.error('failed to toggle favourite');
  }
}
