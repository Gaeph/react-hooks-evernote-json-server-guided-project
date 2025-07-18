// import React from "react";

// function NoteEditor() {
//   return (
//     <form className="note-editor">
//       <input type="text" name="title" />
//       <textarea name="body" />
//       <div className="button-row">
//         <input className="button" type="submit" value="Save" />
//         <button type="button">Cancel</button>
//       </div>
//     </form>
//   );
// }

// export default NoteEditor;

// import React, { useState, useEffect } from "react";

// function NoteEditor({ note, onSave, onCancel }) {
//   const [title, setTitle] = useState(note ? note.title : "");
//   const [body, setBody] = useState(note ? note.body : "");

//   // Si nòt la chanje, mete nouvo valè nan eta yo
//   useEffect(() => {
//     setTitle(note ? note.title : "");
//     setBody(note ? note.body : "");
//   }, [note]);

//   function handleSubmit(e) {
//     e.preventDefault();
//     onSave({ ...note, title, body });
//   }

//   return (
//     <form className="note-editor" onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         placeholder="Title"
//       />
//       <textarea
//         name="body"
//         value={body}
//         onChange={(e) => setBody(e.target.value)}
//         placeholder="Body"
//       />
//       <div className="button-row">
//         <input className="button" type="submit" value="Save" />
//         <button type="button" onClick={onCancel}>
//           Cancel
//         </button>
//       </div>
//     </form>
//   );
// }

// export default NoteEditor;


import React, { useState, useEffect } from "react";

function NoteEditor({ note, onSave, onCancel }) {
  const [title, setTitle] = useState(note?.title || "");
  const [body, setBody] = useState(note?.body || "");

  // Mete tit ak kontni nòt la lè nòt chanje
  useEffect(() => {
    setTitle(note?.title || "");
    setBody(note?.body || "");
  }, [note]);

  function handleSubmit(e) {
    e.preventDefault();
    onSave({ ...note, title, body });
  }

  return (
    <form className="note-editor" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        name="body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Body"
      />
      <div className="button-row">
        <input className="button" type="submit" value="Save" />
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default NoteEditor;
