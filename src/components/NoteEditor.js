import React,{useState} from "react";

function NoteEditor({currentNote},id,e) {
  const [editedtitle,setEditedtitle]=useState(currentNote.title);
  const [editedbody,setEditedBody]=useState(currentNote.body);
  function newEditedNote(){
    fetch(`http://localhost:3000/notes/${id}`,{
      method:"PATCH",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        title:this.currentNote.title,
        body:this.currentNote.body

    })
  })   
  }
  console.log(currentNote)
  return (
    <form className="note-editor"  onSubmit={newEditedNote}>
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
