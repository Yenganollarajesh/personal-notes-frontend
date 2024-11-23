import React from 'react';
import './NoteList.css'; // Styling for note cards

const NoteList = ({ notes, onEdit, onDelete }) => {
    return (
        <div className="note-list">
            {notes.map((note) => (
                <div key={note.id} className="note-card">
                    <h3>{note.title}</h3>
                    <p>{note.description}</p>
                    <p>{note.category}</p>
                     <div>
                     <button className="edit" onClick={() => onEdit(note)}>Edit</button>
                     <button onClick={() => onDelete(note.id)}>Delete</button>
                     </div>
                </div>
            ))}
        </div>
    );
};

export default NoteList;
