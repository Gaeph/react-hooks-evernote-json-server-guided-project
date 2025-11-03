import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onSelectNote }) {
  if (notes.length === 0) {
    return <p className="empty-list">No notes found.</p>;
  }

  return (
    <ul className="note-list">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          onClick={() => onSelectNote(note)}
        />
      ))}
    </ul>
  );
}

export default NoteList;
