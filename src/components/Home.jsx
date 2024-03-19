import React, { useContext } from 'react'
import NoteContext from '../context/noteContext'
import Notes from './Notes'

const Home = () => {
  let {} = useContext(NoteContext)

  const handleSubmit=(e)=>{
  e.preventDefault();
  }

  const handleFormSubmit=()=>{

  }

  return (
    <>
      <div>
        <h1 className='font-bold text-3xl text-center mt-3 ' >Personal Notebook App</h1>
        <div className='flex flex-col items-center' >
          <form onSubmit={handleFormSubmit} className='' >
            <div className='flex flex-col gap-1' >
              <label htmlFor="">Title</label>
              <input className='outline-none border-2 border-gray-500 p-3 w-[40vw]  rounded-lg ' type="text" />
            </div>
            <div className='flex flex-col gap-1' >
              <label htmlFor="">Description</label>
              <textarea className='outline-none border-2 border-gray-500 p-3  w-[40vw] rounded-lg ' type="text" />
            </div>
            <div className='flex flex-col gap-1' >
              <label htmlFor="">Tag</label>
              <input className='outline-none border-2 border-gray-500 p-3  w-[40vw] rounded-lg ' type="text" />
            </div>

            <div className='flex justify-center' >
              <button className='py-4 px-5 bg-violet-500 text-white mt-3 rounded-lg  ' type='submit' onClick={handleSubmit} >Submit</button>
            </div>
          </form>
        </div>
        {/* Notes */}
        <div>
        <Notes/>
        </div>
      </div>
     
    </>
  )
}

export default Home