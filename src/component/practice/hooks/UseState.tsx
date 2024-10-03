import React, { useEffect, useState } from "react";

interface UserType{
    name: string,
    email: string
}

function UseState(){

 

    const [user, setUser]= useState<UserType | null>();

    const handleSignIn=()=>{
        setUser({
            name: "Pradip",
            email: "pradip@gmail.com"
        })
    }

    const handleSignOut=()=>{
        setUser(null)
    }

    useEffect(()=>{
        console.log("Component is rendered when state is changed...");
    },[user]);

    return(
        <div>
        <div>UseState Hook</div>
        <button onClick={handleSignIn}>SignIn</button>
        <button onClick={handleSignOut}>SignOut</button>
        <div>{user?.name}</div>
        <div>{user?.email}</div>
        </div>
    )
}

export default UseState;