import React, { useContext } from 'react'
import NoteContext from '../context/noteContext'
import Notes from './Notes'

const Home = () => {
  let {} = useContext(NoteContext)



  return (
    <>
      <div>
        <h1 className='font-bold text-3xl text-center mt-3 ' >Personal Notebook App</h1>
         
        {/* Notes */}
        <div>
        <Notes/>
        </div>
      </div>
     
    </>
  )
}

export default Home