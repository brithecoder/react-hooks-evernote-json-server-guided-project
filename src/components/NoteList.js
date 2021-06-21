import React from "react";
import NoteItem from "./NoteItem";

function NoteList({noteData, displayUserinfo,currentNote,filterNotes}) {

  return (
    <ul>
      {filterNotes.map((note)=> <NoteItem note={note} key={note.id} displayUserinfo={displayUserinfo} currentNote={currentNote}  />)} 
      {/* <NoteItem /> */}
    </ul>
  );
}

export default NoteList;
