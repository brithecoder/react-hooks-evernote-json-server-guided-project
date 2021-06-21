import React from "react";
import NoteEditor from "./NoteEditor";

function NoteViewer({currentNote,showEditorSetter}) {
  console.log(currentNote)
  const handlerEditBtn = ()=>{
    showEditorSetter(true)
  }
  return (
    <>
      <h2>{currentNote.title}</h2>
      <p>{currentNote.body}</p>
      <button onClick={(e)=>{handlerEditBtn()}}>Edit</button>
    </>
  );
}

export default NoteViewer;
