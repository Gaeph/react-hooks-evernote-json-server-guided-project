// import React from "react";
// import Search from "./Search";
// import Sidebar from "./Sidebar";
// import Content from "./Content";

// function NoteContainer() {
//   return (
//     <>
//       <Search />
//       <div className="container">
//         <Sidebar />
//         <Content />
//       </div>
//     </>
//   );
// }

// export default NoteContainer;

// import React, { useState, useEffect } from "react";
// import Search from "./Search";
// import Sidebar from "./Sidebar";
// import Content from "./Content";

// function NoteContainer() {
//   const [notes, setNotes] = useState([]);
//   const [filter, setFilter] = useState("");
//   const [selectedNote, setSelectedNote] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);

//   // Chaje nòt depi backend lè konpozan monte
//   useEffect(() => {
//     fetch("http://localhost:3000/notes")
//       .then((r) => r.json())
//       .then(setNotes);
//   }, []);

//   // Filtrage nòt pa tit
//   const filteredNotes = notes.filter((note) =>
//     note.title.toLowerCase().includes(filter.toLowerCase())
//   );

//   // Chwazi yon nòt
//   function handleSelectNote(note) {
//     setSelectedNote(note);
//     setIsEditing(false);
//   }

//   // Kree yon nouvo nòt
//   function handleAddNote() {
//     const newNote = {
//       title: "New note",
//       body: "Write your note here...",
//       userId: 1,
//     };

//     fetch("http://localhost:3000/notes", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(newNote),
//     })
//       .then((r) => r.json())
//       .then((addedNote) => {
//         setNotes([...notes, addedNote]);
//         setSelectedNote(addedNote);
//         setIsEditing(true);
//       });
//   }

//   // Antre nan mòd edisyon
//   function handleEditNote() {
//     setIsEditing(true);
//   }

//   // Sove chanjman sou nòt la
//   function handleSaveNote(updatedNote) {
//     fetch(`http://localhost:3000/notes/${updatedNote.id}`, {
//       method: "PATCH",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         title: updatedNote.title,
//         body: updatedNote.body,
//         userId: updatedNote.userId,
//       }),
//     })
//       .then((r) => r.json())
//       .then((savedNote) => {
//         setNotes(
//           notes.map((note) => (note.id === savedNote.id ? savedNote : note))
//         );
//         setSelectedNote(savedNote);
//         setIsEditing(false);
//       });
//   }

//   // Anile edisyon
  
//   function handleCancelEdit() {
//     setIsEditing(false);
//   }

//   return (
//     <>
//       <Search filter={filter} setFilter={setFilter} />
//       <div className="container">
//         <Sidebar
//           notes={filteredNotes}
//           onSelectNote={handleSelectNote}
//           onAddNote={handleAddNote}
//         />
//         <Content
//           selectedNote={selectedNote}
//           isEditing={isEditing}
//           onEditNote={handleEditNote}
//           onSaveNote={handleSaveNote}
//           onCancelEdit={handleCancelEdit}
//         />
//       </div>
//     </>
//   );
// }

// export default NoteContainer;



// import React, { useState, useEffect } from "react";
// import Search from "./Search";
// import Sidebar from "./Sidebar";
// import Content from "./Content";

// function NoteContainer() {
//   const [notes, setNotes] = useState([]);
//   const [filter, setFilter] = useState("");
//   const [selectedNote, setSelectedNote] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);

//   // 🚀 Chaje nòt depi backend
//   useEffect(() => {
//     fetch("http://localhost:3000/notes")
//       .then((r) => r.json())
//       .then(setNotes)
//       .catch((err) => console.error("Error loading notes:", err));
//   }, []);

//   // 🔍 Filtre nòt pa tit
//   const filteredNotes = notes.filter((note) =>
//     note.title.toLowerCase().includes(filter.toLowerCase())
//   );

//   // ✅ Seleksyone nòt
//   function handleSelectNote(note) {
//     setSelectedNote(note);
//     setIsEditing(false);
//   }

//   // 🆕 Kreye nòt
//   function handleAddNote() {
//     const newNote = {
//       title: "New note",
//       body: "Write your note here...",
//       userId: 1,
//     };

//     fetch("http://localhost:3000/notes", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(newNote),
//     })
//       .then((r) => r.json())
//       .then((addedNote) => {
//         setNotes([...notes, addedNote]);
//         setSelectedNote(addedNote);
//         setIsEditing(true);
//       })
//       .catch((err) => console.error("Error creating note:", err));
//   }

//   // ✏️ Mete app nan mòd edisyon
//   function handleEditNote() {
//     setIsEditing(true);
//   }

//   // 💾 Sove nòt
//   function handleSaveNote(updatedNote) {
//     fetch(`http://localhost:3000/notes/${updatedNote.id}`, {
//       method: "PATCH",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         title: updatedNote.title,
//         body: updatedNote.body,
//         userId: updatedNote.userId,
//       }),
//     })
//       .then((r) => r.json())
//       .then((savedNote) => {
//         setNotes(
//           notes.map((note) => (note.id === savedNote.id ? savedNote : note))
//         );
//         setSelectedNote(savedNote);
//         setIsEditing(false);
//       })
//       .catch((err) => console.error("Error saving note:", err));
//   }

//   // ❌ Anile edisyon
//   function handleCancelEdit() {
//     setIsEditing(false);
//   }

//   return (
//     <> 
//       <Search filter={filter} setFilter={setFilter} />
//       <div className="container">
//         <Sidebar
//           notes={filteredNotes}
//           onSelectNote={handleSelectNote}
//           onAddNote={handleAddNote}
//         />
//         <Content
//           selectedNote={selectedNote}
//           isEditing={isEditing}
//           onEditNote={handleEditNote}
//           onSaveNote={handleSaveNote}
//           onCancelEdit={handleCancelEdit}
//         />
//       </div>
//     </>
//   );
// }

// export default NoteContainer;


import React, { useState, useEffect } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

function NoteContainer() {
  const [notes, setNotes] = useState([]);
  const [filter, setFilter] = useState("");
  const [selectedNote, setSelectedNote] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // Chaje nòt sou entèfas
  useEffect(() => {
    fetch("http://localhost:3000/notes")
      .then((r) => r.json())
      .then(setNotes)
      .catch((err) => console.error("Error loading notes:", err));
  }, []);

  // Filtre tit
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(filter.toLowerCase())
  );

  // Seleksyone yon nòt
  function handleSelectNote(note) {
    setSelectedNote(note);
    setIsEditing(false);
  }

  // Kreye nòt
  function handleAddNote() {
    const newNote = {
      title: "New note",
      body: "Write your note here...",
      userId: 1,
    };

    fetch("http://localhost:3000/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newNote),
    })
      .then((r) => r.json())
      .then((addedNote) => {
        setNotes([...notes, addedNote]);
        setSelectedNote(addedNote);
        setIsEditing(true);
      })
      .catch((err) => console.error("Error creating note:", err));
  }

  // Antre nan mòd edisyon
  function handleEditNote() {
    setIsEditing(true);
  }

  // Sove nòt
  function handleSaveNote(updatedNote) {
    fetch(`http://localhost:3000/notes/${updatedNote.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: updatedNote.title,
        body: updatedNote.body,
        userId: updatedNote.userId,
      }),
    })
      .then((r) => r.json())
      .then((savedNote) => {
        setNotes(notes.map((n) => (n.id === savedNote.id ? savedNote : n)));
        setSelectedNote(savedNote);
        setIsEditing(false);
      })
      .catch((err) => console.error("Error saving note:", err));
  }

  // Anile edisyon
  function handleCancelEdit() {
    setIsEditing(false);
  }

  return (
    <>
      <Search filter={filter} setFilter={setFilter} />
      <div className="container">
        <Sidebar
          notes={filteredNotes}
          onSelectNote={handleSelectNote}
          onAddNote={handleAddNote}
        />
        <Content
          selectedNote={selectedNote}
          isEditing={isEditing}
          onEditNote={handleEditNote}
          onSaveNote={handleSaveNote}
          onCancelEdit={handleCancelEdit}
        />
      </div>
    </>
  );
}

export default NoteContainer;
