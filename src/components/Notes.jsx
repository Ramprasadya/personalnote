import React, { useContext } from 'react'
import NoteItem from './NoteItem'
import NoteContext from '../context/noteContext'

const Notes = () => {
    const {notes} = useContext(NoteContext)
    console.log(notes)
  return (
    <div className='grid grid-cols-4 gap-4 mt-8 mx-4' >
        {
            notes.map((item,index)=>{
                return <NoteItem item={item} />
            })
        }
    </div>
  )
}

export default Notes