import { MdDeleteForever } from 'react-icons/md';
import './styles/Note.css';

const Note = ({ id, text, date, tags, handleDeleteNote }) => {
    return (
      <div className="note">
        <span>{text}</span>
        <div className="note-tags">
          {tags.map((tag) => (
            <div key={tag} className="tag">
              {tag}
            </div>
          ))}
        </div>
        <div className="note-footer">
          <small>{date}</small>
          <MdDeleteForever
            onClick={() => handleDeleteNote(id)}
            className="delete-icon"
            size="1.3em"
          />
        </div>
      </div>
    );
  };  

export default Note;
