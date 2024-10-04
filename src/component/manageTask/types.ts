export interface Task{
    id: number;
    title: string;
}

export interface TaskState{
    tasks: Task[];
}

export enum TaskActionTypes{
    ADD_TASK='ADD_TASK',
    DELETE_TASK='DELETE_TASK',
}

export interface AddTaskAction{
    type: TaskActionTypes.ADD_TASK;
    payload: {title:string};
}

export interface DeleteTaskAction{
    type: TaskActionTypes.DELETE_TASK;
    payload: {id:number};
}

export type TaskActions= AddTaskAction | DeleteTaskAction;