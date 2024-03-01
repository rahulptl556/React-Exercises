import { useState } from 'react'
import './App.css'
import Todo from './components/Todo';

function App() {
  const [currId,setId] = useState(1)
  const handleClick = (id) => {
    setId(id);
  };

  return (
    <>
    <div>
        <button onClick={() => handleClick(1)}>1</button>
        <button onClick={() => handleClick(2)}>2</button>
        <button onClick={() => handleClick(3)}>3</button>
        <button onClick={() => handleClick(4)}>4</button>
        <button onClick={() => handleClick(5)}>5</button>
        
        <Todo id={currId} />
    </div>
    </>
  )
}

export default App

{/* { todos.map((todo) => <Todo key={todo.id} title={todo.title} description={todo.description} />)  } */}