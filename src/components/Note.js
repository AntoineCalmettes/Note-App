import React from 'react';

const Note = ({ note, onDelete }) => {
  return (
    <div className="note">
      <p>{note}</p>
      <button onClick={onDelete}>Supprimer</button>
    </div>
  );
};

export default Note;