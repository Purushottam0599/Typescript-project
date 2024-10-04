import {TaskState, TaskActions, TaskActionTypes } from "../types";

const initialState: TaskState={
    tasks:[],
};

export const taskReducer=(state=initialState, action:TaskActions): TaskState=>{
    switch(action.type){
        case TaskActionTypes.ADD_TASK:
            return{
                ...state,
                tasks: [...state.tasks, {id:Date.now(), title: action.payload.title}],
            };

        case TaskActionTypes.DELETE_TASK:
            return{
                ...state,
                tasks: state.tasks.filter(task=>task.id !== action.payload.id),
            };

        default:
            return state;
    }

};