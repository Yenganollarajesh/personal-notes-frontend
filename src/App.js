import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // Global styles
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import SearchBar from './components/SearchBar';

const App = () => {
    const [notes, setNotes] = useState([]);
    const [selectedNote, setSelectedNote] = useState(null);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios.get(`https://personal-notes-manager-uktq.onrender.com/notes?search=${search}`)
             .then((response) => setNotes(response.data))
             .catch((error) => console.error('Error fetching notes:', error));
    }, [search]);

    const handleEdit = (note) => {
        setSelectedNote(note);
    };

    const handleDelete = (id) => {
        axios.delete(`https://personal-notes-manager-uktq.onrender.com/notes/${id}`)
             .then(() => setNotes(notes.filter((note) => note.id !== id)));
    };

    const handleSave = (note) => {
        setNotes((prev) =>
            prev.some((n) => n.id === note.id)
                ? prev.map((n) => (n.id === note.id ? note : n))
                : [...prev, note]
        );
        setSelectedNote(null);
    };

    return (
        <div className="container">
            <h1>Personal Notes Manager</h1>
            <SearchBar onSearch={setSearch} />
            <NoteList notes={notes} onEdit={handleEdit} onDelete={handleDelete} />
            <NoteForm note={selectedNote} onSave={handleSave} />
        </div>
    );
};

export default App;