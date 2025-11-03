import React, { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Note from "./Note";
import EditNoteForm from "./EditNoteForm";
import { getNotes, createNote, updateNote } from "./api";

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch notes from JSON Server on mount
  useEffect(() => {
    async function fetchNotes() {
      try {
        setLoading(true);
        const data = await getNotes();
        setNotes(data);
        setSelectedNote(data[0] || null); // select first note by default
      } catch (err) {
        setError("Error fetching notes");
      } finally {
        setLoading(false);
      }
    }
    fetchNotes();
  }, []);

  // Select a note
  const handleSelectNote = (note) => {
    setSelectedNote(note);
    setEditMode(false); // exit edit mode when switching notes
  };

  // Create a new note
  const handleCreateNote = async () => {
    const newNote = { title: "New Note", body: "Write something...", userId: 1 };
    try {
      const created = await createNote(newNote);
      setNotes([created, ...notes]);
      setSelectedNote(created);
      setEditMode(false);
    } catch {
      setError("Failed to create note");
    }
  };

  // Update an existing note
  const handleUpdateNote = async (updatedNote) => {
    try {
      const saved = await updateNote(updatedNote);
      setNotes(notes.map(n => (n.id === saved.id ? saved : n)));
      setSelectedNote(saved);
      setEditMode(false);
    } catch {
      setError("Failed to save note");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="app">
      <Header />
      <Sidebar
        notes={notes}
        onSelectNote={handleSelectNote}
        onCreateNote={handleCreateNote}
        selectedNote={selectedNote}
      />
      {selectedNote && editMode ? (
        <EditNoteForm
          note={selectedNote}
          onSave={handleUpdateNote}
          onCancel={() => setEditMode(false)}
        />
      ) : (
        <Note note={selectedNote} onEdit={() => setEditMode(true)} />
      )}
    </div>
  );
}

export default App;
