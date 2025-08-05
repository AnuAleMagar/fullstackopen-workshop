import React, { useState } from "react";
import Note from "./components/Note";
function App(props) {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setnewNote] = useState("");
  const [show, setshow] = useState(true);

  const showAllNotes=show ? notes:notes.filter(note=>(note.important===true))
  function handleSubmit(e) {
    e.preventDefault();
    const obj = {
      id: notes[notes.length - 1] + 1,
      content: newNote,
      important: Math.random() < 0.5,
    };
    setnewNote('');
    setNotes(notes.concat(obj));
   
  }
  function handleChange(e) {
    setnewNote(e.target.value);
  }

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={()=>setshow(!show)}>Show {show ? 'important':'all'}</button>
      <ul>
        {showAllNotes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={newNote}
          placeholder="type something here"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
