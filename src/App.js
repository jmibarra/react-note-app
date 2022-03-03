import React, { useState } from 'react'
import { nanoid } from 'nanoid';
import NoteList from './components/NoteList'

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


    return (
        <div className='conteiner'>
            <NoteList notes={notes}/>
        </div>
    )
}

export default App