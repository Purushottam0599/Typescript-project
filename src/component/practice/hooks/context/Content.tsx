import { useContext } from "react";
import { MyContext } from "./UseContext";

export default function Content(){
    const theme = useContext(MyContext);
    return (
        <div style={{color: theme.style1.theme}}><h1>My data</h1></div>
    )
}