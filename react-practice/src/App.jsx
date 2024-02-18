import { HeaderWithBtn } from './components/HeaderWithBtn'
import { Header } from './components/Header'
import { Todo } from './components/Todo'
import { useState } from 'react'

const counter = 4;
function App() {

const [todos,setTodos] = useState([
  {
    id: 1,
    title: "Complete React Tutorial",
    description: "Finish the React tutorial series on Codecademy.",
  },
  {
    id: 2,
    title: "Prepare for Meeting",
    description: "Gather information and documents for the upcoming team meeting.",
  },
  {
    id: 3,
    title: "Exercise",
    description: "Go for a 30-minute jog in the park.",
  }
])

function addTodo(){
  setTodos([...todos, {
    id : counter++,
    title : Math.random(),
    description : Math.random(),
  }])
}

  return (
    <>
      {/* <HeaderWithBtn title = 'John Doe'/>
      <Header name = 'Rahul Patil'/>
      <Header name = 'Aksh'/>
      <Header name = 'John'/>  */}
      <button onClick={addTodo}>Add Todo</button>
      <div>
        {todos.map((todo) => (
          // Always use keys if using map or anything to render a list 
            <Todo key={todos.id} {...todo} />
        ))}
      </div>
    </>
  )
}

export default App
