import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/HomePage";
import { NotesContext } from "./store/NoteContext";

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
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
