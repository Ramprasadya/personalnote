import React from 'react'
import { HiOutlinePencilAlt } from "react-icons/hi";
import { HiTrash } from "react-icons/hi";
const NoteItem = ({item}) => {
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
            <span><HiOutlinePencilAlt/></span>
          <span>  <HiTrash/></span>
        </div>
    </div>
  )
}

export default NoteItem