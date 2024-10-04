import React, { useCallback, useState } from "react";

interface ButtonProps{
    onClick: ()=> void;
}

const Button:React.FC<ButtonProps>=({onClick})=>{
    console.log("Button Component Rendered---->");
    return <button onClick={onClick}>Click Me</button> 
}

const UseCallback:React.FC=()=>{
    const [count, setCount]=useState<number>(0);
    const [otherCount, setOtherCount]=useState<number>(0);

    const handleClick=useCallback(()=>{
        console.log("button clicked");
        setCount(count+1);
    },[count])

    return(
        <div>
            <p>Count: {count}</p>
            <p>Other Count: {otherCount}</p>
            <Button onClick={handleClick} />
            <button onClick={()=>{setOtherCount(otherCount+1)}}>Other Incremented Count</button>
        </div>
    );
};

export default UseCallback;