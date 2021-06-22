import React from "react";
import NoteEditor from "./NoteEditor";
import NoteViewer from "./NoteViewer";
import Instructions from "./Instructions";

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and getContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/

function Content({currentNote,showEditorSetter,showviewerSetter,showEditor,showViewer,updateNote}) {

  const onCancelBtnClick = ()=>{
  showEditorSetter(false);
  showviewerSetter(true)
}
  const getContent = () => {
    if (showEditor) {
      return <NoteEditor onCancelBtnClick={onCancelBtnClick}
                         currentNote={currentNote}
                          updateNote={updateNote}
      />;
    } else if (showViewer) {
      return <NoteViewer currentNote={currentNote} 
                         showEditorSetter={showEditorSetter} />
    } else {
      return <Instructions />;
    }
  };

  return <div className="master-detail-element detail">{getContent()}</div>;
}

export default Content;
