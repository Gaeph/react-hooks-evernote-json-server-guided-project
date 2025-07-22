
// import React from "react";
// import NoteList from "./NoteList";

// function Sidebar({ notes, onSelectNote, onAddNote }) {
//   return (
//     <div className="master-detail-element sidebar">
//       <NoteList notes={notes} onSelectNote={onSelectNote} />
//       <button onClick={onAddNote}>New</button>
//     </div>
//   );
// }

// export default Sidebar;

import React from "react";

function Sidebar({ notes, onNoteClick, onNewNote, searchTerm, setSearchTerm }) {
  // Filtè pa tit OU byen pa kontni (body)
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.body.toLowerCase().includes(searchTerm.toLowerCase()) // <-- Nouvo fonksyonalite a
  );

  return (
    <div className="sidebar">
      <button onClick={onNewNote}>New</button>

      <input
        type="text"
        placeholder="Search notes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul>
        {filteredNotes.map((note) => (
          <li key={note.id} onClick={() => onNoteClick(note.id)}>
            <strong>{note.title}</strong>
            <p>{note.body.slice(0, 20)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
