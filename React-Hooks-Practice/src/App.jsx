import { useMemo, useState } from 'react'
import './App.css'
import Todo from './components/Todo';


function App() {
  const [count,setCount] = useState(0);
  const [inputValue,setInputValue] = useState(0);
  // const handleClick = (id) => {
  //   setId(id);
  // };
 
  function clicked(){
    setCount(count + 1);
  }

  const ans = useMemo(()=>{
    let sum = 0;
    for( let i=1; i<=inputValue; i++){
      sum += i;
    }
    return sum;
  },[inputValue])

  function changed(e){
    setInputValue(e.target.value);
  }

  return (
    <>
    <input id='num' type="number" placeholder='Enter a number' onChange={changed}/> <br />

    <div>Sum is {ans}</div>  <br />

    <button onClick={clicked}>Counter ({count})</button>

    {/* <div>
        <button onClick={() => handleClick(1)}>1</button>
        <button onClick={() => handleClick(2)}>2</button>
        <button onClick={() => handleClick(3)}>3</button>
        <button onClick={() => handleClick(4)}>4</button>
        <button onClick={() => handleClick(5)}>5</button>
        
        <Todo id={currId} />
    </div> */}
    </>
  )
}

export default App

{/* { todos.map((todo) => <Todo key={todo.id} title={todo.title} description={todo.description} />)  } */}