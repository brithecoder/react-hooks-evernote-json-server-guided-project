import React,{useState} from "react";

function NoteEditor({currentNote,updateNote},id,e) {
  const [editedtitle,setEditedtitle]=useState(currentNote.title);
  const [editedbody,setEditedBody]=useState(currentNote.body);
  console.log(id, "LOOK AT ME")
  function newEditedNote(e){
     e.preventDefault()
     
    fetch(`http://localhost:3000/notes/${currentNote.id}`,{
      method:"PATCH",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        title:editedtitle,
        body:editedbody

       })
        
    })  
    .then(res=>res.json())
    .then(patchNote => console.log(patchNote))
  
  }
       
  return (
    <form className="note-editor"  onSubmit={(e)=>newEditedNote(e)}>
      <input type="text" name="title" value={editedtitle} onChange={(e)=>setEditedtitle(e.target.value)}/>
      <textarea name="body" value={editedbody} onChange={(e)=>setEditedBody(e.target.value)} />
      <div className="button-row">
        <input className="button" type="submit" value="Save" />
        <button type="button">Cancel</button>
      </div>
    </form >
  );
}

export default NoteEditor;
