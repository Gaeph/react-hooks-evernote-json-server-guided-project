// import React from "react";

// function NoteItem() {
//   return (
//     <li>
//       <h2>Title</h2>
//       <p>Caption...</p>
//     </li>
//   );
// }

// export default NoteItem;

// import React from "react";

// function NoteItem({ note, onClick }) {
//   return (
//     <li className="note-item" onClick={onClick}>
//       <h2>{note.title}</h2>
//       <p>{note.body.substring(0, 30)}...</p>
//     </li>
//   );
// }

// export default NoteItem;


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
