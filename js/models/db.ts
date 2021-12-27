import Dexie, { Table  }  from 'https://cdn.skypack.dev/dexie?dts'; 
import {   ITodoItem} from './TodoItem.ts'; 

export class TodoDB extends Dexie { 
  todoItems!: Table<ITodoItem, number>;
  constructor() {
    super('TodoDB');
    this.version(1).stores({ 
      todoItems: '++id, text'
    });
  }
 
}

export const db = new TodoDB();

 