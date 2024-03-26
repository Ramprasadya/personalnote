import React, { useEffect, useState } from 'react'
import NoteContext from './noteContext'

const NoteState = ({children}) => {
    const [notes, setNotes] = useState(   [
        {
            "_id": "65f5465c7deaf54660c00f5f",
            "user": "65f532e0cfe8990533e1927b",
            "title": "hello first note",
            "desc": "le lo bhai lelo",
            "tag": "dev",
            "Date": "2024-03-16T07:12:28.230Z",
            "__v": 0
        },
      
        {
            "_id": "65f9238eb8d6c85efafb627c",
            "user": "65f532e0cfe8990533e1927b",
            "title": "hello first note",
            "desc": "le lo bhai lelo",
            "tag": "dev",
            "Date": "2024-03-19T05:33:02.670Z",
            "__v": 0
        },
        {
            "_id": "65f5465c7deaf54660c00f5f",
            "user": "65f532e0cfe8990533e1927b",
            "title": "hello first note",
            "desc": "le lo bhai lelo",
            "tag": "dev",
            "Date": "2024-03-16T07:12:28.230Z",
            "__v": 0
        },
      
    ])


    // Add a note
    const handleAddNote=(title,desc,tag)=>{
        const note =  {
            "_id": "65f9238eb8d6c85efafb627c",
            "user": "65f532e0cfe8990533e1927b",
            "title": title,
            "desc": desc,
            "tag": tag,
            "Date": "2024-03-19T05:33:02.670Z",
            "__v": 0
        }
    setNotes(notes.concat(note))
    }
    // Delete note
    const handleDeleteNote=(id)=>{

    }
    // Edit note
    const handleEditNote=(id)=>{

    }



  // 

  return (
  
        <NoteContext.Provider value={{notes,handleAddNote,handleEditNote,handleDeleteNote}} >
           {children}
        </NoteContext.Provider>
    
  )
}

export default NoteState