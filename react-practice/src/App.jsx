import { HeaderWithBtn } from './components/HeaderWithBtn'
import { Header } from './components/Header'
import { Todo } from './components/Todo'
import { useState } from 'react'
import { WrapperComponent } from './components/WrapperComponent'
import { TextComponent } from './components/TextComponent'
import { useEffect } from 'react'
// const counter = 4;
function App() {

// const [todos,setTodos] = useState([
//   {
//     id: 1,
//     title: "Complete React Tutorial",
//     description: "Finish the React tutorial series on Codecademy.",
//   },
//   {
//     id: 2,
//     title: "Prepare for Meeting",
//     description: "Gather information and documents for the upcoming team meeting.",
//   },
//   {
//     id: 3,
//     title: "Exercise",
//     description: "Go for a 30-minute jog in the park.",
//   }
// ])

// function addTodo(){
//   setTodos([...todos, {
//     id : counter++,
//     title : Math.random(),
//     description : Math.random(),
//   }])
const [todos, setTodos] = useState([]);

//using useEffect hook and setInterval to fetch data in a loop
  useEffect(() => {
    setInterval(()=>{
      fetch('https://sum-server.100xdevs.com/todos')
      .then(async (res) => {
        const json = await res.json();
        setTodos(json.todos);
      })
      .catch((error) => {
        console.error('Error fetching todos:', error);
      });
    },5000)
  }, []);
    

  return (
    <>
    <div>
    <div>
      {/* <HeaderWithBtn title = 'John Doe'/>
      <Header name = 'Rahul Patil'/>
      <Header name = 'Aksh'/>
      <Header name = 'John'/> 
      <button onClick={addTodo}>Add Todo</button> */}
      <div>
        {/* // Always use keys if using map or anything to render a list  */}
        {todos.map((todo) => (
            <Todo key={todos.id} {...todo} />
        ))}
      </div>
    </div>
    </div>

    <div>
     {/* //Wrapper component which takes inner react component as input  */}
    {/* This is not the optimal way, we use children props to do so in real life  */}
    <WrapperComponent innerComponent = {<TextComponent/>}/> 

    {/* Children Prop example */}
    <WrapperComponent>
      Hi there
    </WrapperComponent>
    <WrapperComponent>
    <div>
      <h1>Life is Good?</h1>
      <p>YES!!!</p>
    </div>
    </WrapperComponent>
    {/* Here you can create multiple components and render them in wrapper exactly the way we want for multiple cards */}
     
    </div>
   

    </>
  )
}

export default App;
