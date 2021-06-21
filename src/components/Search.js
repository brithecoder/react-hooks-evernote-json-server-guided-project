import React from "react";

function Search({setFilterNotes,noteData,searchTerm,setInputValue}) {

  // const filterHandler=(e) =>{
  //   // return setFilterNotes(noteData.filter(note => note.title.includes(searchTerm)))
  //     searchTerm(e);
  // }
  return (
    <div className="filter">
      <input id="search-bar" type="text" placeholder="Search Notes" onChange={(e)=> setInputValue(e.target.value)} />
    </div>
  );
}

export default Search;
