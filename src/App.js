// App.js

import React, { useState } from 'react';
import NoteList from './components/NoteList';
import AddNoteForm from './components/AddNoteForm';
import { ThemeProvider, useTheme } from './components/ThemeContext';
import './styles.css'; // Assurez-vous d'importer vos styles CSS
import Grid from '@mui/material/Grid';

const App = () => {
  const [notes, setNotes] = useState([]);
  const { darkTheme, toggleTheme } = useTheme();

  const handleAddNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const handleDeleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  return (
    <Grid className={(darkTheme ? 'dark-theme' : 'light-theme')} container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <div >
          <button onClick={toggleTheme}>
            {darkTheme ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
          </button>
          <h1>App note</h1>
          <AddNoteForm onAdd={handleAddNote} darkTheme={darkTheme}/>
          <NoteList notes={notes} onDelete={handleDeleteNote} />
        </div>
      </Grid>
      <Grid item xs={3}></Grid> {/* 33% de l'écran à droite */}
    </Grid>
  );
};

export default () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
