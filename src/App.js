import { useEffect, useState } from "react";

import Header from "./components/Header";
import NoteForm from "./components/NoteForm";
import NotesList from "./components/NotesList";

import {
  getNotes,
  saveNotes
} from "./utils/storage";

import "./App.css";

function App() {

  const [notes, setNotes] = useState([]);

  const [filter, setFilter] = useState("all");

  const [darkMode, setDarkMode] = useState(false);


  // Page load hote hi saved notes lana
  useEffect(() => {

    const savedNotes = getNotes();

    setNotes(savedNotes);

  }, []);


  // New note add karna
  function addNote(note) {

    const newNote = {
      ...note,
      id: Date.now()
    };

    const updatedNotes = [
      ...notes,
      newNote
    ];

    setNotes(updatedNotes);

    saveNotes(updatedNotes);
  }


  // Note edit karna
  function updateNote(updatedNote) {

    const updatedNotes = notes.map(function (note) {

      if (note.id === updatedNote.id) {
        return updatedNote;
      }

      return note;
    });

    setNotes(updatedNotes);

    saveNotes(updatedNotes);
  }


  // Note delete karna
  function deleteNote(id) {

    const updatedNotes = notes.filter(function (note) {

      return note.id !== id;

    });

    setNotes(updatedNotes);

    saveNotes(updatedNotes);
  }


  // Important status change
  function changeImportant(id) {

    const updatedNotes = notes.map(function (note) {

      if (note.id === id) {

        return {
          ...note,
          important: !note.important
        };

      }

      return note;

    });

    setNotes(updatedNotes);

    saveNotes(updatedNotes);
  }


  // Filter notes
  let filteredNotes = notes;

  if (filter === "important") {

    filteredNotes = notes.filter(function (note) {

      return note.important === true;

    });

  }


  return (

    <div className={darkMode ? "app dark" : "app"}>

      <Header
        darkMode={darkMode}
        toggleTheme={() => setDarkMode(!darkMode)}
      />


      <main className="container">

        <h1>My Notes</h1>

        <p className="subtitle">
          Write down your thoughts, ideas and plans.
        </p>


        <NoteForm
          addNote={addNote}
        />


        <div className="filter-box">

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >

            <option value="all">
              All Notes
            </option>

            <option value="important">
              Important Notes
            </option>

          </select>

        </div>


        <NotesList
          notes={filteredNotes}
          updateNote={updateNote}
          deleteNote={deleteNote}
          changeImportant={changeImportant}
        />

      </main>

    </div>

  );
}

export default App;