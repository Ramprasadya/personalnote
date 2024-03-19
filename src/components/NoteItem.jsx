import React from 'react'

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
    </div>
  )
}

export default NoteItem