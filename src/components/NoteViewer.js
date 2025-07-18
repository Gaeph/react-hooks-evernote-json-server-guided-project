// import React from "react";

// function NoteViewer() {
//   return (
//     <>
//       <h2>Title</h2>
//       <p>Body</p>
//       <button>Edit</button>
//     </>
//   );
// }

// export default NoteViewer;


import React from "react";

function NoteViewer({ note, onEdit }) {
  if (!note) return <p className="instructions">Select a note.</p>;

  return (
    <div className="note-viewer">
      <h2>{note.title}</h2>
      <p>{note.body}</p>
      <button onClick={onEdit}>Edit</button>
    </div>
  );
}

export default NoteViewer;
