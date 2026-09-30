import { useState } from "react";

function NoteForm({ addNote }) {

  const [text, setText] = useState("");

  const [important, setImportant] = useState(false);


  function handleSubmit(e) {

    e.preventDefault();

    if (text.trim() === "") {
      return;
    }


    const note = {

      text: text,

      important: important

    };


    addNote(note);


    setText("");

    setImportant(false);

  }


  return (

    <form
      className="note-form"
      onSubmit={handleSubmit}
    >

      <textarea
        placeholder="Enter your note..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />


      <div className="form-bottom">

        <label>

          <input
            type="checkbox"
            checked={important}
            onChange={(e) =>
              setImportant(e.target.checked)
            }
          />

          Important

        </label>


        <button type="submit">

          + Add Note

        </button>

      </div>

    </form>

  );

}

export default NoteForm;