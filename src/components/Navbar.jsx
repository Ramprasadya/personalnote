import React from 'react'

const Navbar = () => {
  return (
   <>
    <nav className='p-8 bg-black text-white font-bold ' >
      <ul className='flex justify-around ' >
        <div  >
        <li className='text-2xl  '>NoteBook</li>
        </div>
        <div className='flex gap-4 ' >
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </div>
      </ul>
    </nav>
   </>
  )
}

export default Navbar