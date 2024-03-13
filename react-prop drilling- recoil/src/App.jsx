import { useState } from 'react'
import './App.css'
import { MyContext } from './context'
import Count from './components/Count'



function App() {

const [count,setCount] = useState(10);

  return (
    <>
      <MyContext.Provider value={count}>
        <Count/>
      </MyContext.Provider>
    </>
  )
}

export default App
