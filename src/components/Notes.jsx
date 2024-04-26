import React, { useContext, useEffect, useRef, useState } from "react";
import NoteItem from "./NoteItem";
import NoteContext from "../context/noteContext";
import AddNote from "./AddNote";

const Notes = () => {
  const { notes, getAllNotes, handleEditNote } = useContext(NoteContext);
  // console.log(notes)
  useEffect(() => {
    getAllNotes();
  }, [notes]);

  const ref = useRef(null);
  const refClose = useRef(null);

  const [note, setNote] = useState({ id: "", etitle: "", edesc: "", etag: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditNote(note.id, note.etitle, note.edesc, note.etag);
    refClose.current.click();
  };

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edesc: currentNote.desc,
      etag: currentNote.tag,
    });
  };
  const handleOnChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <AddNote />
      <div>
        {/* <!-- Button trigger modal --> */}
        <button
          type="button"
          hidden
          ref={ref}
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Launch demo modal
        </button>

        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Modal title
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="etitle"
                      name="etitle"
                      aria-describedby="emailHelp"
                      value={note.etitle}
                      onChange={handleOnChange}
                      minLength={3}
                      required={true}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Description
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="edesc"
                      name="edesc"
                      value={note.edesc}
                      onChange={handleOnChange}
                      minLength={5}
                      required={true}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Tag
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="etag"
                      name="etag"
                      value={note.etag}
                      onChange={handleOnChange}
                    />
                  </div>

                  {/* <button type="submit" className="btn btn-primary">Submit</button> */}
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  ref={refClose}
                  className="py-3 px-4 rounded-[10px] bg-pink-600 text-white hover:bg-red-500 "
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="py-3 px-4 rounded-[10px] bg-violet-600 text-white hover:bg-green-600 "
                  onClick={handleSubmit}
                >
                  Update Note
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-center my-3 text-3xl font-extrabold">Your Notes </h1>
      <div className="grid grid-cols-4 gap-4 my-8 mx-4">
        {notes.map((item, index) => {
          return <NoteItem key={index} item={item} updateNote={updateNote} />;
        })}
      </div>
      {notes.length === 0 && (
        <div className="text-center"> No Notes to display </div>
      )}
    </>
  );
};

export default Notes;
