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
        const response = await fetch(`${host}/api/notes/addnotes`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVmNTMyZTBjZmU4OTkwNTMzZTE5MjdiIn0sImlhdCI6MTcxMDU2ODE3Nn0.NJ26Z2baVgxn6svjdZ5T6ayvTB1VlSotdObzmbRq3NA"
            },
            body: JSON.stringify({title,desc,tag})
          });
          // const json = await response.json();
          // console.log(json)
          // setNotes(json)
    }
    // Delete note
    const handleDeleteNote=async(id)=>{
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVmNTMyZTBjZmU4OTkwNTMzZTE5MjdiIn0sImlhdCI6MTcxMDU2ODE3Nn0.NJ26Z2baVgxn6svjdZ5T6ayvTB1VlSotdObzmbRq3NA"
        },
      });
    const json = await response.json();
    console.log("json",json)
    setNotes(json);
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