import React from "react";
import NoteItem from "./NoteItem";

function Sidebar({ notes, onNoteClick, onNewNote, searchTerm, setSearchTerm, selectedNote }) {
  // Filter notes by title OR body
  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="sidebar master-detail-element">
      <button onClick={onNewNote}>New</button>

      <input
        type="text"
        placeholder="Search notes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <ul className="note-list">
        {filteredNotes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            onClick={() => onNoteClick(note)}
            isSelected={selectedNote?.id === note.id} // highlight selected note
          />
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
