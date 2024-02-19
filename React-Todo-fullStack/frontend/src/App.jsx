import { useEffect, useState } from 'react'
import './App.css'
import { AddTodo } from './components/AddTodo'
import { Todos } from './components/Todos'

function App() {

const[todos,setTodos] = useState([]);

useEffect(()=>{
  fetch('https://sum-server.100xdevs.com/todos').then(async(res) => {
    const json = await res.json();
    setTodos(json.todos);
   })
},[])
 
  return (
    <div>
      <AddTodo />
      <Todos todos = { todos }
     />
    </div>
  )
}

export default App
