import React from 'react';
import Note from './Note';

const NoteList = ({ notes, onDelete }) => {
  return (
    <div className="note-list">
      <h2>Liste des notes</h2>
      {notes.map((note, index) => (
        <Note key={index} note={note} onDelete={() => onDelete(index)} />
      ))}
    </div>
  );
};

export default NoteList;
