import React from "react";

// interface PropTypes{
//     name:string,
//     age:number,
//     isEligible:boolean
// }

type PropTypes={
    name:string,
    age:number,
    isEligible:boolean
}

const Practice:React.FC<PropTypes>=({name, age, isEligible})=>{
    return(
        <div>
            <div>Welcome {name}...! to this page.</div>
            {isEligible ? <p>your age is{age} and you are eligible to vote.</p>:<p>you are not eligible to vote.</p>}
        </div>
    );
};

export default Practice;