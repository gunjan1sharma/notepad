import React from "react";

interface NoteContextValue {
  selectedNote: string;
  selectedNoteId: any;
  setSelectedNote: (note: string) => void;
}

const NotesContext = React.createContext<NoteContextValue>({
  selectedNote: "",
  setSelectedNote: (note) => {},
  selectedNoteId: null,
});

export { NotesContext };
