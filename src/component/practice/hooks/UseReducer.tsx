import { count } from "console";
import React, { useReducer, useState } from "react";

interface StateType{
    count : number
}

interface ActionType{
    type : "Increment" | "Decrement" | "IncrementBy" | "DecrementBy"
}

function UseReducer(){

    const [number, setNumber] = useState<number>(0);
    
    const initialState={
        count: 0
    };

    const reducer=(state: StateType, action: ActionType)=>{
        switch(action.type){
            case "Increment":
                return {count: state.count + 1}
            case "Decrement":
                return {count: state.count - 1}
            case "IncrementBy":
                return {count: state.count + number}
                case "DecrementBy":
                    return {count: state.count - number}
            default:
                return state
        }
    }

    const [state, dispatch]=useReducer(reducer, initialState);


    return(
        <div>
             <div style={{display: "flex", justifyContent: "center"}}><div>Count : {state.count}</div></div>
            
            <button onClick={()=>dispatch({type:"Increment"})}>Increment</button>
            <button onClick={()=>dispatch({type:"Decrement"})}>Decrement</button>
            <button onClick={()=>dispatch({type:"IncrementBy"})}>Increment By</button>
            <input type="number" onChange={(e)=>setNumber(Number(e.target.value))}/>
            <button onClick={()=>dispatch({type:"DecrementBy"})}>Decrement By</button>
            
        </div>
    )

}

export default UseReducer;