import React, { useEffect, useState } from "react";
import Header from "./Header";
import NoteContainer from "./NoteContainer";

function App() {
  const [userData,setUserData]=useState([])
  const  [noteData, setNoteData]=useState([])
  const [currentNote,setCurrentNote]=useState(null)
    const [showEditor,showEditorSetter]=useState(false)
  const [showViewer,showviewerSetter]=useState(false)
 
  useEffect(() =>{
    fetch('http://localhost:3000/users')
    .then((resp)=> resp.json())
    .then((data)=>{
      setUserData(data)
    }
    )
  },[])
    useEffect (() =>{
      fetch('http://localhost:3000/notes')
      .then((resp)=>resp.json())
      .then((data)=>{
        setNoteData(data)
      }
      )
    },[])
    function displayUserinfo(note){
      setCurrentNote(note)
       showviewerSetter(true);
    }

    const username = userData[0]
    console.log(username)
  return (
    <div className="app">
      <Header userData={userData} currentNote={currentNote}  />
      <NoteContainer noteData={noteData} displayUserinfo={displayUserinfo}  currentNote={currentNote}  showEditor={showEditor} showEditorSetter={showEditorSetter} showViewer={showViewer} showviewerSetter={showviewerSetter}  />
    </div>
  );
}

export default App;
