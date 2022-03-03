import React, {useState} from 'react'

const AddNote = ({handleAddNote}) => {

    const [noteText, setnoteText] = useState("")
    const characterLimit = 200;
    
    const handleChange = (event) => {
        if(characterLimit - event.target.value.length >= 0)
            setnoteText(event.target.value);
    }

    const handleSaveClick = ( ) => {
        if(noteText.trim().length > 0){
            handleAddNote(noteText);
            setnoteText("");
        }

    }

    return (
        <div className='note new'>
            <textarea 
            rows='8'
            cols='10'
            placeholder='Nueva nota...' 
            value={noteText}
            onChange={handleChange}
            ></textarea>
            <div className='note-footer'>
                <small> {characterLimit - noteText.length} caracteres restantes</small>
                <button onClick={handleSaveClick} className='save'>Guardar</button>
            </div>
        </div>
    );
}

export default AddNote