import { React, tw } from "./../deps.ts";

export const TodoAddItem = () => {
    const handleAddItem = ()=>{
        
    }
    return <>
        <div className={tw`mb-4`} >
            <h1 className={tw`text-grey-darkest`} >Todo List</h1>
            <div className={tw`flex mt-4`} >
                <input className={tw`shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker`}
                    placeholder="Add Todo" />
                <button
                    className={tw`flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal`} >Add</button>
            </div>
        </div>
    </>
}
