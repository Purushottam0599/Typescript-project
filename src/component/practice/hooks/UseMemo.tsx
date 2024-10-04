import { useMemo, useState } from "react";

const UseMemo:React.FC=()=>{
    const [count, setCount]=useState<number>(0);
    const [otherCount, setOtherCount]=useState<number>(0);

    const expensiveComputation=useMemo(()=>{
        console.log("Expensive Computation running...!!!");
        return count*2;
    },[count]);

    return(
        <div>
            <p>Count: {count}</p>
            <p>OtherCount: {otherCount}</p>
            <p>Expensive Computation: {expensiveComputation}</p>
            <button onClick={()=>{setCount(count+1)}}>Incremented Count</button>
            <button onClick={()=>{setOtherCount(otherCount+1)}}>Other Incremented Count</button>
        </div>
    );
};

export default UseMemo;