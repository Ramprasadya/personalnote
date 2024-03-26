import React, { useEffect, useState } from 'react'
import NoteContext from './noteContext'

const NoteState = ({children}) => {
    const host = "http://localhost:3000"
    const [notes, setNotes] = useState([]);

    const getAllNotes=async()=>{
        const response = await fetch(`${host}/api/notes/getnotes`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVmNTMyZTBjZmU4OTkwNTMzZTE5MjdiIn0sImlhdCI6MTcxMDU2ODE3Nn0.NJ26Z2baVgxn6svjdZ5T6ayvTB1VlSotdObzmbRq3NA"
            },
          });
        const json = await response.json();
        console.log("json",json)
        setNotes(json);
    }


    // Add a note
    const handleAddNote=async(title,desc,tag)=>{
        // const response = await fetch(`${host}/api/notes/addnotes`, {
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json",
        //       "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVmNTMyZTBjZmU4OTkwNTMzZTE5MjdiIn0sImlhdCI6MTcxMDU2ODE3Nn0.NJ26Z2baVgxn6svjdZ5T6ayvTB1VlSotdObzmbRq3NA"
        //     },
        //     body: JSON.stringify({title,desc,tag})
        //   });
        //   return response.json();
        
        const note =  {
            "_id": "65f9238eb8d6c85efafb62734366",
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
     console.log("deleting the note with the id is " + id)
     const newNotes = notes.filter((note)=>{return note._id !==id})
     setNotes(newNotes);
    }
    // Edit note
    const handleEditNote=(id,title,desc,tag)=>{
    for (let index = 0; index < notes.length; index++) {
        const element = array[index];
        if(element._id === id){
            element.title = title,
            element.desc = desc,
            element.tag = tag
        }
    }
    }



  // 

  return (
  
        <NoteContext.Provider value={{notes,handleAddNote,handleEditNote,handleDeleteNote,getAllNotes}} >
           {children}
        </NoteContext.Provider>
    
  )
}

export default NoteState