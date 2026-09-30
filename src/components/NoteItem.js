import { useState } from "react";

function NoteItem({
  note,
  updateNote,
  deleteNote,
  changeImportant
}) {

  const [editing, setEditing] = useState(false);

  const [editText, setEditText] = useState(note.text);


  function handleUpdate() {

    if (editText.trim() === "") {
      return;
    }


    updateNote({

      ...note,

      text: editText

    });


    setEditing(false);

  }


  return (

    <div
      className={
        note.important
          ? "note-card important"
          : "note-card"
      }
    >

      {editing ? (

        <textarea
          value={editText}
          onChange={(e) =>
            setEditText(e.target.value)
          }
        />

      ) : (

        <div className="note-content">

          <h3>

            {note.important && "⭐ "}

            {note.text}

          </h3>

          <small>
            {new Date(note.id).toLocaleDateString()}
          </small>

        </div>

      )}


      <div className="note-actions">

        {editing ? (

          <button
            className="save-btn"
            onClick={handleUpdate}
          >
            Save
          </button>

        ) : (

          <button
            className="edit-btn"
            onClick={() => setEditing(true)}
          >
            ✏️
          </button>

        )}


        <button
          className="important-btn"
          onClick={() => changeImportant(note.id)}
        >
          ⭐
        </button>


        <button
          className="delete-btn"
          onClick={() => deleteNote(note.id)}
        >
          🗑️
        </button>

      </div>

    </div>

  );

}

export default NoteItem;