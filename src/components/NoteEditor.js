
import React, { useState, useEffect } from "react";

function NoteEditor({ note, onSave, onCancel }) {
  const [title, setTitle] = useState(note?.title || "");
  const [body, setBody] = useState(note?.body || "");

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
        placeholder="Tit nòt la"
        required
        minLength={3}
        maxLength={100}
      />
      <textarea
        name="body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Ekri kontni nòt la..."
        rows={10}
        maxLength={1000}
      />
      <div className="button-row">
        <input className="button" type="submit" value="💾 Save" />
        <button type="button" onClick={onCancel}>
          ❌ Cancel
        </button>
      </div>
    </form>
  );
}

export default NoteEditor;


