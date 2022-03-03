import React, { useState } from 'react'
import { nanoid } from 'nanoid';
import NoteList from './components/NoteList'
import Search from './components/Search'

const App = () => {

    const [notes, setNotes] = useState([
		{
			id: nanoid(),
			text: 'This is my first note!',
			date: '15/04/2021',
		},
		{
			id: nanoid(),
			text: 'This is my second note!',
			date: '21/04/2021',
		},
		{
			id: nanoid(),
			text: 'This is my third note!',
			date: '28/04/2021',
		},
		{
			id: nanoid(),
			text: 'This is my new note!',
			date: '30/04/2021',
		},
	]);

    const [searchText, setSeachText] = useState('');

    const addNote = (text) => {
        const date = new Date();
        const newNote = {
            id: nanoid(),
            text: text,
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
        <div className='container'>
            <Search handleSearchNote={setSeachText}/>
            <NoteList 
                notes={
                    notes.filter((note) => note.text.toLowerCase().includes(searchText.toLowerCase()))
                } 
                handleAddNote={addNote}
                handleDeleteNote={deleteNote}
            />
        </div>
    )
}

export default App