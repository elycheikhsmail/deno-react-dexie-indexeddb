import { React, tw } from "./../deps.ts";

export const TodoItemDone = () => {
    return <>
        <div className={tw`flex mb-4 items-center`} >
            <p className={tw`w-full line-through text-green`} >Submit Todo App Component to Tailwind Components</p>
            <button
                className={tw`flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-grey border-grey hover:bg-grey`} >Not
                Done</button>
            <button
                className={tw`flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red`} >Remove</button>
        </div>

    </>
}
