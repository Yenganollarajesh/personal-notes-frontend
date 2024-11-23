// NoteList.js
import React, { useState } from 'react';
import Modal from './Modal';
import "./NoteList.css"

const NoteList = ({ notes, onEdit, onDelete }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedNote, setSelectedNote] = useState(null);

    const openModal = (note) => {
        setSelectedNote(note);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedNote(null);
    };

    const handleSave = (e, id) => {
        e.preventDefault();
        const updatedNote = {
            title: e.target.title.value,
            description: e.target.description.value,
            category: e.target.category.value,
        };
        onEdit(updatedNote, id);
        closeModal();
    };

    return (
        <div>
            {notes.map((note) => (
                <div key={note.id} className="note-card">
                    <h3>{note.title}</h3>
                    <p>{note.description}</p>
                    <p>{note.category}</p>
                    <div>
                    <button className="edit" onClick={() => openModal(note)}>Edit</button>
                    <button onClick={() => onDelete(note.id)}>Delete</button>
                    </div>
                </div>
            ))}

            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                note={selectedNote}
                onSave={handleSave}
            />
        </div>
    );
};

export default NoteList;

