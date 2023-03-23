import { useState, useEffect } from "react";
import * as notesAPI from "../../utilities/notes-api";


export default function NewNoteForm( {handleAddNote} ) {
    const [newNote, setNewNote] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        handleAddNote(newNote);
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <textarea value={newNote} onChange={(e) => setNewNote(e.target.value)}></textarea>
            <button type="submit">Add Note</button>
        </form>
    </>
    )
}