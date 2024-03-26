import React, { useContext, useEffect } from 'react'
import NoteItem from './NoteItem'
import NoteContext from '../context/noteContext'
import AddNote from './AddNote'

const Notes = () => {
    const {notes,getAllNotes} = useContext(NoteContext)
    // console.log(notes)
    useEffect(()=>{
      getAllNotes();
    },[])
  return (
    <>

 
    <AddNote/>
    <div className='grid grid-cols-4 gap-4 mt-8 mx-4' >
        {
            notes.map((item,index)=>{
                return <NoteItem key={index} item={item} />
            })
        }
    </div>
    </>
  )
}

export default Notes