// Modal.js
import React from 'react';
import "./Modal.css"

const Modal = ({ isOpen, onClose, note, onSave }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>Edit Note</h2>
                <form onSubmit={(e) => onSave(e, note.id)}>
                    <input
                        type="text"
                        name="title"
                        defaultValue={note.title}
                        required
                    />
                    <textarea
                        name="description"
                        defaultValue={note.description}
                        required
                    />
                    <select name="category" defaultValue={note.category}>
                        <option value="Work">Work</option>
                        <option value="Personal">Personal</option>
                        <option value="Others">Others</option>
                    </select>
                    <div className="modal-buttons">
                        <button type="button" onClick={onClose}>Cancel</button>
                        <button type="submit">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;
