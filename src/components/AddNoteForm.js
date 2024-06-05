import React, { useState } from 'react';
import { TextField, Button, Container, Grid } from '@mui/material';

const AddNoteForm = ({ onAdd, darkTheme }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    onAdd(inputValue);
    setInputValue('');
  };

  return (
    <Container maxWidth="sm">
      <form className="add-note-form" onSubmit={handleSubmit}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Ajouter une nouvelle note"
              variant="outlined"
              value={inputValue}
              onChange={handleChange}
              InputProps={{ style: { color: darkTheme ? '#BB86FC' : '#000000' } }}
              InputLabelProps={{ style: { color: darkTheme ? '#BB86FC' : '#000000' } }}
              style={{ backgroundColor: darkTheme ? '#BB86FC' : '#ffffff' }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Button fullWidth variant="contained" color="primary" type="submit">
              Ajouter
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default AddNoteForm;
