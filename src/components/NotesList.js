import NoteItem from "./NoteItem";

function NotesList({
  notes,
  updateNote,
  deleteNote,
  changeImportant
}) {

  return (

    <div className="notes-list">

      {notes.length === 0 ? (

        <p className="empty">
          No notes found.
        </p>

      ) : (

        notes.map(function (note) {

          return (

            <NoteItem
              key={note.id}
              note={note}
              updateNote={updateNote}
              deleteNote={deleteNote}
              changeImportant={changeImportant}
            />

          );

        })

      )}

    </div>

  );

}

export default NotesList;