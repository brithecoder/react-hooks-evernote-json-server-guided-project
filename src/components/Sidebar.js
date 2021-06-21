import React,{useState} from "react";
import NoteList from "./NoteList";

function Sidebar({noteData,displayUserinfo,currentNote,filterNotes}) {
  const [newNote,setNewNote]=useState({
    title:"Default Title",
    body:"body",
  })
  function handleNewNote(event){
    setNewNote({
      ...newNote,
      [event.target.title]:event.target.title
    });
  }
  function submitNewNote(){
    fetch('http://localhost:3000/notes',{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(newNote)
    })

  }
  return (
    <div className="master-detail-element sidebar">
      <NoteList noteData={noteData}  displayUserinfo={displayUserinfo}  currentNote={currentNote} onChange={handleNewNote} filterNotes={filterNotes} />
      <button onClick={submitNewNote}>New</button>
    </div>
  );
}

export default Sidebar;
