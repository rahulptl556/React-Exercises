
import { lazy,Suspense } from 'react'
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import './App.css'
Routes
import TopBar from './components/TopBar'
const Dashboard = lazy(()=>import('./components/Dashboard'))
const Landing = lazy(()=>import('./components/Landing'))

function App() {

  return (
    <>
    <TopBar/>
    <BrowserRouter> 
    
      <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/dashboard' element ={<Dashboard/>}></Route>
            <Route path='/' element ={<Landing/>}></Route>
          </Routes>
      </Suspense>

    </BrowserRouter>
    </>
  )
}

export default App
