import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem('token')
    navigate("/login")

  }
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
        {
          !localStorage.getItem("token") ? (

        <div className='flex gap-4' >
          <Link to="/login" className='' >Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
          ): (
            <div>
              <button onClick={handleLogout} >Logout</button>
            </div>
          )
        }
      </ul>
    </nav>
   </>
  )
}

export default Navbar