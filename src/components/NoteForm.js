import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './NoteForm.css'; // Styling for the form

const NoteForm = ({ note, onSave }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('Others');

    useEffect(() => {
        if (note) {
            setTitle(note.title);
            setDescription(note.description);
            setCategory(note.category);
        }
    }, [note]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newNote = { title, description, category };
        if (note) {
            axios.put(`https://personal-notes-manager-uktq.onrender.com/notes/${note.id}`, newNote)
                 .then((response) => onSave(response.data));
        } else {
            axios.post('https://personal-notes-manager-uktq.onrender.com/notes', newNote)
                 .then((response) => onSave(response.data));
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
                <option value="Others">Others</option>
            </select>
            <button type="submit">Save</button>
        </form>
    );
};

export default NoteForm;
