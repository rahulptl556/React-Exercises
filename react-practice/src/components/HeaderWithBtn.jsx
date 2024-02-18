import { useState } from "react"

export function HeaderWithBtn(props){
    const[name,setName] = useState(props.title);
    
    const updateName = ()=>{
        setName(Math.random());
    }

    return(
        <>
            <button onClick = {updateName}> Click to update name </button>
            <h1>My name is {name}</h1>
        </>
    );
}