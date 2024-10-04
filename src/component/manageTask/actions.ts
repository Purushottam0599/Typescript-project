import { TaskActions, TaskActionTypes } from "./types"

export const addTask=(title:string):TaskActions=>({
    type: TaskActionTypes.ADD_TASK,
    payload: {title}
})

export const deleteTask=(id:number):TaskActions=>({
    type: TaskActionTypes.DELETE_TASK,
    payload: {id}
})