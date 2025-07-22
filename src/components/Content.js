
import React from "react";
import NoteEditor from "./NoteEditor";
import NoteViewer from "./NoteViewer";
import Instructions from "./Instructions";

function Content({ selectedNote, isEditing, onEditNote, onSaveNote, onCancelEdit }) {
  const getContent = () => {
    if (isEditing && selectedNote) {
      return (
        <NoteEditor
          note={selectedNote}
          onSaveNote={onSaveNote}
          onCancelEdit={onCancelEdit}
        />
      );
    } else if (selectedNote) {
      return (
        <NoteViewer
          note={selectedNote}
          onEditNote={onEditNote}
        />
      );
    } else {
      return <Instructions />;
    }
  };

  return <div className="master-detail-element detail">{getContent()}</div>;
}

export default Content;
