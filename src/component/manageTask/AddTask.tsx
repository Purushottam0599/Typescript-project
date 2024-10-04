import { useState } from "react"
import { useAppDispatch } from "./redux/hooks";
import { addTask } from "./actions";

const AddTask:React.FC=()=>{

    const [task, setTask]= useState('');
    const dispatch= useAppDispatch();

    const handleClick=()=>{
        if(task.trim()){
            dispatch(addTask(task));
            setTask('');
        }
    }

    return(
        <div>
            <input value={task} onChange={(e)=>setTask(e.target.value)} type="text" placeholder="Add Task Here" />
            <button onClick={handleClick}>Add-Task</button>
        </div>
    )
}

export default AddTask;