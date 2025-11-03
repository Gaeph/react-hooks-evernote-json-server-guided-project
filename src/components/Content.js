import React from "react";
import NoteEditor from "./NoteEditor";
import NoteViewer from "./NoteViewer";
import Instructions from "./Instructions";

function Content({ selectedNote, isEditing, onEditNote, onSaveNote, onCancelEdit }) {
  return (
    <div className="master-detail-element detail">
      {selectedNote ? (
        isEditing ? (
          <NoteEditor
            note={selectedNote}
            onSaveNote={onSaveNote}
            onCancelEdit={onCancelEdit}
          />
        ) : (
          <NoteViewer
            note={selectedNote}
            onEditNote={onEditNote}
          />
        )
      ) : (
        <Instructions />
      )}
    </div>
  );
}

export default Content;
