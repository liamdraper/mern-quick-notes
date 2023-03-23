import { useState } from "react";

export default function NotesList({ notes }) {
    
    return (
        <>
        <h1>My Notes</h1>
        { notes ? 
            <ul>{ notes }</ul>
        :
        <p>No notes yet...</p>
    }
        </>
    )
}