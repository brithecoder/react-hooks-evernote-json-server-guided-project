import React,{useState} from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";
import NoteItem from "./NoteItem";

function NoteContainer({noteData,displayUserinfo,currentNote,showEditor,showEditorSetter,showViewer,showviewerSetter}) {
  // const [filterNotes,setFilterNotes]=useState(noteData)
  const [inputValue,setInputValue]=useState("")
  function searchTerm(e){
  // setFilterNotes(noteData.filter(note => note.title.includes(e.target.value))) 
  }
  console.log(inputValue)
  const filterNotes = noteData.filter(note => note.title.includes(inputValue))
  console.log(filterNotes)
  return (
    <>
      <Search   searchTerm={searchTerm} noteData={noteData} setInputValue={setInputValue} />
      <div className="container">
        <Sidebar noteData={noteData} displayUserinfo={displayUserinfo} filterNotes={filterNotes} />
        <Content currentNote={currentNote} showEditor={showEditor} showEditorSetter={showEditorSetter} showViewer={showViewer} showviewerSetter={showviewerSetter} />
      
      </div>
    </>
  );
}

export default NoteContainer;
