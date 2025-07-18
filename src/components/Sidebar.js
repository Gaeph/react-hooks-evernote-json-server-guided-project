// import React from "react";
// import NoteList from "./NoteList";

// function Sidebar() {
//   return (
//     <div className="master-detail-element sidebar">
//       <NoteList />
//       <button>New</button>
//     </div>
//   );
// }

// export default Sidebar;

// import React from "react";
// import NoteList from "./NoteList";

// function Sidebar() {
//   function handleAddNote() {
//     // Placeholder: Ajoute fonksyon pou kreye nouvo nòt la isit la
//     console.log("Nouvo nòt ap ajoute...");
//   }

//   return (
//     <div className="master-detail-element sidebar">
//       <NoteList />
//       <button onClick={handleAddNote}>New</button>
//     </div>
//   );
// }

// export default Sidebar;

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

