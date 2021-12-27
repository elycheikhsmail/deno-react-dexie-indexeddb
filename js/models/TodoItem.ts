export interface ITodoItem{ 
    id?:number,
    text:string
}

export interface TodoItemInDb extends ITodoItem {
    id:number, 
}