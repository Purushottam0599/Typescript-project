import { useEffect, useRef } from "react";

const UseRef: React.FC=()=>{

    const inputRef= useRef<HTMLInputElement>(null);
    useEffect(()=>{
        if(inputRef.current){
            inputRef.current.focus();
        }
    },[]);


    return(
        <div>
            <input ref={inputRef} type="text" placeholder="Auto-Focused Input" />
        </div>
    );
};

export default UseRef;