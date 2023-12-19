export interface TextWatcherProps {
  char: number;
  words: number;
  lines: number;
  selectedText: string;
}

export interface SingleNoteProps {
  NoteHeading: string;
  NoteContent: string;
  CreatedAt: string;
  LastModified: string;
  CharCount: number;
  WordCount: number;
  LineCount: number;
  NoteKey: any;
  deleteTriggered: (status: boolean) => void;
  openTriggered: (status: boolean) => void;
}

export interface NoteStorage {
  NoteHeading: string;
  NoteContent: string;
  CreatedAt: string;
  LastModified: string;
}

export interface NoteObjectArray<K, V> {
  [key: string]: V;
}
