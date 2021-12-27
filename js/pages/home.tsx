import { React, tw, useState, useEffect } from "./../deps.ts";
import { TodoItem } from "../components/TodoItem.tsx";
import { db } from "../models/db.ts";
import { ITodoItem } from "../models/TodoItem.ts";
export const Home = () => {
    const [todos, setTodos] = useState<ITodoItem[]>([])
    const [todo, setTodo] = useState("")
    const [todeleteId, setTodelteId] = useState(-1)
    useEffect(
        () => {
            db.todoItems.toArray().then(
                (dd) => setTodos(() => dd)
            ).catch(
                e => console.log(" error :", e)
            )

        },
        []
    )

    const addFunction = async () => {
        console.log("addFunction clicked")
        //setTodos(todos => [...todos, { text: todo, id: todo.length + 2 }])
        db.todoItems.add({ text: todo });
        const dd = await db.todoItems.toArray()
        setTodos(() => dd)
        setTodo("")
    }
    const removeFunction = async (todo: ITodoItem) => {
        console.log("remove Function clicked")
        //setTodos(todos => [...todos, { text: todo, id: todo.length + 2 }])
        const id = todo.id || -1
        db.todoItems.delete(id)
        const dd = await db.todoItems.toArray()
        setTodos(() => dd)
        setTodo("")
    }
    return <>
        <div className={tw`h-100 w-full flex items-center justify-center bg-teal-lightest font-sans`} >
            <div className={tw`bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg`}>
                <div className={tw`mb-4`} >
                    <h1 className={tw`text-grey-darkest`} >Todo List</h1>
                    <div className={tw`flex mt-4`} >
                        <input className={tw`shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker`}
                            value={todo}
                            onChange={e => setTodo(e.target.value)}
                            placeholder="Add Todo" />
                        <button
                            onClick={() => addFunction()}
                            className={tw`flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal`} >Add</button>
                    </div>
                </div>
                <div>
                    {
                        todos.map(
                            (t) => <TodoItem
                                taskTodo={t.text} key={t.id}
                                onRemoveClicked={() => removeFunction(t)} />)
                    }
                </div>
            </div>
        </div>
    </>



}
