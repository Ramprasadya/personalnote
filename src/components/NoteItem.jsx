import React, { useContext } from 'react'
import { HiOutlinePencilAlt } from "react-icons/hi";
import { HiTrash } from "react-icons/hi";
import NoteContext from '../context/noteContext';
const NoteItem = ({item,updateNote}) => {
  const {handleDeleteNote} = useContext(NoteContext)
  return (
    <div className='flex flex-col border border-gray-500 p-5 rounded-lg ' >
        <div>
            <h2>{item.title}</h2>
        </div>
        <div>
            <p>{item.desc}</p>
        </div>
        <div>
            <p>{item.tag}</p>
        </div>
        <div className='flex gap-3 justify-end ' >
            <span className='cursor-pointer ' onClick={()=>updateNote(item)}  ><HiOutlinePencilAlt/></span>
          <span className='cursor-pointer' onClick={()=>{handleDeleteNote(item._id)}} >  <HiTrash/></span>
        </div>
        
    </div>
  )
}

export default NoteItem