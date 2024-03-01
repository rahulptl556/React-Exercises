import axios from "axios";
import { useEffect, useState } from 'react'


export default function Todo({id}) {
    const [todos,setTodos] = useState([]);

    useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todo?id=" + id)
    .then((res)=>{
      setTodos(res.data.todo);
    })
  },[id])

  return (
    <div>
        Id : {id}
        <div>{todos.title}</div>
        <div>{todos.description}</div>
    </div>    
  )
}
