import { useState, useEffect } from "react"
import NewNoteForm from "../../components/NewNoteForm/NewNoteForm"
import NotesList from "../../components/NotesList/NotesList"
import * as notesAPI from "../../utilities/notes-api";

export default function NotesPage() {

    const [notes, setNotes] = useState(null)
    
    useEffect( () => {
        async function getItems() {
            const notes = await notesAPI.getAll();
            setNotes(notes);
        }
        getItems();
    }
    , [])

    async function handleAddNote (noteData) {
        const note = await notesAPI.addNote(noteData);
        setNotes([...notes, note]);
    }

    return (
        <>
            <NewNoteForm handleAddNote={handleAddNote}/>
            <NotesList notes={ notes }/>
        </>
    )
}