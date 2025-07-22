
import React from "react";
import NoteList from "./NoteList";

function Sidebar({ notes, onSelectNote, onAddNote }) {
  return (
    <div className="master-detail-element sidebar">
      <NoteList notes={notes} onSelectNote={onSelectNote} />
      <button onClick={onAddNote}>New</button>
    </div>
  );
}

export default Sidebar;

