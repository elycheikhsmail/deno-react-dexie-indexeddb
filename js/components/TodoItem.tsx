import { React, tw ,FC} from "./../deps.ts";
//Add another component to Tailwind Components
export const TodoItem:FC<{taskTodo:string,onRemoveClicked:()=>void}> = ({taskTodo,onRemoveClicked}) => {
    return <>
        <div className={tw`flex mb-4 items-center`} >
            <p className={tw`w-full text-grey-darkest`} > {taskTodo} </p>
            <button
                className={tw`flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green`} >Done</button>
            <button
            onClick={ ()=> onRemoveClicked() }
                className={tw`flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red`} >Remove</button>
        </div>

    </>
}
