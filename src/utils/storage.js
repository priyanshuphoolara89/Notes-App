export function getNotes() {

  const data = localStorage.getItem("notes");

  if (data === null) {

    return [];

  }

  return JSON.parse(data);

}


export function saveNotes(notes) {

  localStorage.setItem(
    "notes",
    JSON.stringify(notes)
  );

}