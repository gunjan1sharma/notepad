import React, { useState } from "react";
import HomePage from "./components/HomePage";
import { NotesContext } from "./store/NoteContext";
import "./index.css";
import Tailwind from "./components/Tailwind";
import SampleNote from "./components/SampleNote";

function App() {
  const [selectedNote, setSelectedNote] = useState<string>("");
  const handleSelectedNoteChange = (note: string) => {
    setSelectedNote(note);
  };

  return (
    <div data-testid="parentL" className="App">
      <NotesContext.Provider
        value={{
          selectedNote: selectedNote,
          setSelectedNote: handleSelectedNoteChange,
          selectedNoteId: "",
        }}
      >
        <HomePage />
      </NotesContext.Provider>
    </div>
  );
}

export default App;
