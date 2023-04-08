import React, { useState } from "react";
import "./styles/AddNote.css";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const [tags, setTags] = useState([]);
  const [tagText, setTagText] = useState("");

  const characterLimit = 200;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) setNoteText(event.target.value);
  };

  const handleTagChange = (event) => {
    setTagText(event.target.value);
  };

  const handleTagKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (tagText.trim().length > 0) {
        setTags([...tags, tagText]);
        setTagText("");
      }
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText, tags);
      setNoteText("");
      setTags([]);
    }
  };

  return (
    <div className="add-note-container">
      <textarea
        rows="8"
        cols="10"
        placeholder="Nueva nota..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="tags-container">
        {tags.map((tag, index) => (
          <div key={index} className="tag">
            {tag}
          </div>
        ))}
        <input
          type="text"
          placeholder="Agregar etiqueta..."
          value={tagText}
          onChange={handleTagChange}
          onKeyDown={handleTagKeyDown}
        />
      </div>
      <div className="note-footer">
        <small>{characterLimit - noteText.length} caracteres restantes</small>
        <button onClick={handleSaveClick} className='save'>Guardar</button>
      </div>
    </div>
  );
};

export default AddNote;
