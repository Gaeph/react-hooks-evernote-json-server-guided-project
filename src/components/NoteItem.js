

import React from "react";

function NoteItem({ note, onClick }) {
  return (
    <li className="note-item" onClick={onClick}>
      <h2>{note.title}</h2>
      <p>{note.body.length > 30 ? `${note.body.substring(0, 30)}...` : note.body}</p>
    </li>
  );
}

export default NoteItem;
