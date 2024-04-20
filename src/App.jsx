import { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NoteState from './context/NoteState'
import Login from './components/Login'
import Signup from './components/Signup'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <NoteState>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
    </Routes>
    </NoteState>
    
    </>
  )
}

export default App
