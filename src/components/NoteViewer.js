import React from "react";

function NoteViewer({ note, onEdit }) {
  if (!note) {
    return (
      <div className="instructions">
        <p>Select a note from the sidebar to view or edit it.</p>
      </div>
    );
  }

  return (
    <div className="note-viewer">
      <h2>{note.title}</h2>
      <p>{note.body}</p>
      <button onClick={onEdit}>Edit</button>
    </div>
  );
}

export default NoteViewer;
