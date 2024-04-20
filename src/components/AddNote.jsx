import React, { useContext, useState } from "react";
import NoteContext from "../context/noteContext";

const AddNote = () => {
    const {handleAddNote} = useContext(NoteContext)
    const [note, setNote] = useState({title:"",desc:"",tag:""})
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddNote(note.title,note.desc,note.tag)
    setNote({title:"",desc:"",tag:""})
  };

  const handleFormSubmit = () => {

  };
  const handleOnChange=(e)=>{
  setNote({...note,[e.target.name]:e.target.value})
  }
  return (
    <div className="flex flex-col items-center">
      <form onSubmit={handleFormSubmit} className="">
        <div className="flex flex-col gap-1">
          <label htmlFor="">Title</label>
          <input
            className="outline-none border-2 border-gray-500 p-3 w-[40vw]  rounded-lg "
            type="text"
            id="title"
            name="title"
            onChange={handleOnChange}
            minLength={3}
            required= {true}
            value={note.title}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">Description</label>
          <textarea
            className="outline-none border-2 border-gray-500 p-3  w-[40vw] rounded-lg "
            type="text"
            id="desc"
            name="desc"
            onChange={handleOnChange}
            minLength={5}
            required={true}
            value={note.desc}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">Tag</label>
          <input
            className="outline-none border-2 border-gray-500 p-3  w-[40vw] rounded-lg "
            type="text"
            id="tag"
            name="tag"
            onChange={handleOnChange}
            value={note.tag}
            
          />
        </div>

        <div className="flex justify-center">
          <button
            className={`py-4 px-5 ${note.title.length <3 || note.desc.length <5 ? "bg-violet-300" : "bg-violet-500" } text-white mt-3 rounded-lg `}
            type="submit"
            onClick={handleSubmit}
            disabled={note.title.length <3 || note.desc.length <5 }
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNote;
