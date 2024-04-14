import Dexie, { Table, Transaction } from 'dexie';
import { categories, codes } from './data';

export interface Category {
  id?: number;
  name: string;
  image: string | File;
  slug: string;
}

export interface Code {
  id?: number;
  title: string;
  code: string;
  categories: number[];
  isFavourite: boolean;
}

export class Codee extends Dexie {
  // Define tables
  categories!: Table<Category>;
  codes!: Table<Code>;

  constructor() {
    super('codee');
    this.version(1).stores({
      categories: '++id, &name, image, &slug',
      codes: '++id, title, code, *categories, isFavorite',
    });
  }
}

export const db = new Codee();

/**
 * Populate the database with initial data
 */
db.on('ready', async function (db) {
  const count = await db.table('categories').count();

  // Check if the database has not been populated
  if (count <= 0) {
    /**
     * update the categories with their respective images
     */
    const categories = await updateCategoryImages();
    if (categories) {
      /**
       * Populate the database withe the data
       */
      await db.transaction(
        'rw',
        db.table('categories'),
        db.table('codes'),
        async () => {
          await db.table('categories').bulkAdd(categories);
          await db.table('codes').bulkAdd(codes);
        },
      );
    }
  }
});

async function fetchImage(imagePath: string) {
  const response = await fetch(imagePath);

  if (!response.ok) {
    throw new Error(`Failed to fetch image: ${imagePath}`);
  }

  return await response.blob();
}

async function updateCategoryImages() {
  // construct category image paths
  const categoryImagePaths = categories.map(({ image }) =>
    fetchImage(`images/${image}.png`),
  );
  const categoryImages = await Promise.all(categoryImagePaths);

  const newCategories = categories.map((category, index) => {
    return {
      ...category,
      image: convertBlobToFile(categoryImages[index], category.name),
    };
  });

  return newCategories;
}

function convertBlobToFile(blob: Blob, name = 'image') {
  return new File([blob], name, { type: blob.type });
}
