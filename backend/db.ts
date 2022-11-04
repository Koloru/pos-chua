	import Dexie, { Table } from 'dexie';

export interface menuItem {
	id: string;
	name: string;
	price: number;
	category: string;
}
export interface category {
  id: string
  category: string;
}



export class Menu extends Dexie {
  menu!: Table<menuItem>; 
  category!: Table<category>

  constructor() {
    super('myDatabase');
    this.version(1).stores({
      menu: 'id, name, price, category',
      category: 'id, category'
    });
  }
}



export const db = new Menu();

