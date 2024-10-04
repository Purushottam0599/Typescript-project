import { deleteTask } from "./actions";
import { useAppDispatch, useAppSelector } from "./redux/hooks"

const TaskList:React.FC=()=>{

    const Tasks= useAppSelector(state=> state.tasks);
    const dispatch= useAppDispatch();

    return(
            <ol>
                {Tasks.map(task=>
                    <li key={task.id}>
                        {task.title}
                        <button onClick={()=>dispatch(deleteTask(task.id))}>Delete</button>
                    </li>
                )}
            </ol>
    );
};

export default TaskList;