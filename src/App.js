import React, { useState, useEffect } from 'react'
import { nanoid } from 'nanoid';
import NoteList from './components/NoteList'
import Search from './components/Search'
import Header from './components/Header'

const App = () => {

    const [notes, setNotes] = useState([]);

    const [searchText, setSeachText] = useState('');
    const [darkMode, setdarkMode] = useState(false);

    useEffect(() => {
        const savedNotes = JSON.parse(
            localStorage.getItem('react-notes-app-data')
        );

        if (savedNotes) {
            setNotes(savedNotes);
        }
    }, []) //No tiene target entonces solo se actualizará al crear

    useEffect(() => {
        localStorage.setItem(
            'react-notes-app-data',
            JSON.stringify(notes)
        )
    }, [notes]) //Actualiza cada vez que actualizamos el state notes


    const addNote = (text, tags) => {
        const date = new Date();
        const newNote = {
            id: nanoid(),
            text: text,
            tags: tags,
            date: date.toLocaleDateString()
        }

        const newNotes = [...notes, newNote];

        setNotes(newNotes);
    }

    const deleteNote = (id) => {
        const cleanNotes = notes.filter((note) => note.id !== id);
        setNotes(cleanNotes);

    }

    return (
        <div className={`${darkMode && 'dark-mode'}`}>
            <div className='container'>
                <Header handleToggleMode={setdarkMode} />
                <Search handleSearchNote={setSeachText} />
                <NoteList
                    notes={
                        notes.filter((note) => note.text.toLowerCase().includes(searchText.toLowerCase()))
                    }
                    handleAddNote={addNote}
                    handleDeleteNote={deleteNote}
                />
            </div>
        </div>
    )
}

export default App