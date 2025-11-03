import React from "react";

function NoteItem({ note, onClick, isSelected }) {
  // Truncate body si plis pase 30 karaktè
  const truncatedBody =
    note.body.length > 30 ? `${note.body.substring(0, 30)}...` : note.body;

  return (
    <li
      className={`note-item ${isSelected ? "selected" : ""}`}
      onClick={onClick}
      title={note.body} // montre tout kontni lè hover
    >
      <h2>{note.title}</h2>
      <p>{truncatedBody}</p>
    </li>
  );
}

export default NoteItem;
