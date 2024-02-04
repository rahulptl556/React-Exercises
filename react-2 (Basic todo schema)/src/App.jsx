import { useState } from 'react'
// import './App.css'
import Button from '../components/Button'
import Todo from '../components/Todo'

function App() { 
  //State Variable
  // const [count, setCount] = useState(0);
  const [todos,setTodos] = useState([
    { title: 'Learn React', description: 'Study React basics' },
    { title: 'Build a React App', description: 'Create a simple React application' },
    { title: 'Deploy React App', description: 'Deploy the React app to a hosting platform' }
  ])

  return (
    <div>
      <Button todos={todos} setTodos={setTodos}/>
        {todos.map((todo)=>{
          return <Todo title = {todo.title} description = {todo.description}/>
        })}
      </div>
  )
}

export default App
