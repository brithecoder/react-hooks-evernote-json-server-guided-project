import React from "react";

function NoteItem({note,displayUserinfo}) {
  // console.log(note)
  //  console.log(note.body)
   const caption = note.body.substring(0,22);

  function  Handleclick(id){
    // console.log(note.id)
    displayUserinfo(note,note.userId)
  }
  return (
    <li onClick={()=> Handleclick()}>
      <h2>{note.title}</h2>
      <p>{caption}</p>
    </li>
  );
}

export default NoteItem;
