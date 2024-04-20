import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <>
    <nav className='p-8 bg-gray-700 text-white font-bold ' >
      <ul className='flex justify-around ' >
        <div  >
        <Link to="/" className='text-2xl  '>NoteBook</Link>
        </div>
        <div className='flex gap-4 ' >
          <Link to="/" >Home</Link>
          <Link to="/about" >About</Link>
          <Link to="/contact" >Contact</Link>
        </div>
        <div className='flex gap-4' >
          <Link to="/login" className='' >Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      </ul>
    </nav>
   </>
  )
}

export default Navbar