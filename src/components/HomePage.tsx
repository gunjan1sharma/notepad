import React, { useContext, useEffect, useRef, useState } from "react";
import ReactQuill, { ReactQuillProps } from "react-quill";
import { nanoid } from "nanoid";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";
import UpNavigation from "./UpNavigation";
import TextWatcher from "./TextWatcher";
import { NoteObjectArray } from "../extras/types";
import { NotesContext } from "../store/NoteContext";

let noteId: number = 1001;
const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

const TextfieldLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

function HomePage() {
  const [value, setValue] = useState("");
  const [editorText, setEditorText] = useState("");
  const [selectedText, setSelectedText] = useState("");
  const quillRef = useRef<ReactQuill>(null);
  const { selectedNote, setSelectedNote } = useContext(NotesContext);
  var condition: boolean = editorText.length === 0 || editorText.length === 0;

  function onSelectionChange(
    selection: ReactQuill.Range,
    source: any,
    editor: ReactQuill.UnprivilegedEditor
  ): void {
    setSelectedText(editor.getText(selection?.index, selection?.length));
  }

  function onTextChange(
    value: string,
    delta: any,
    source: any,
    editor: ReactQuill.UnprivilegedEditor
  ): void {
    setEditorText(editor.getText());
    setValue(value);
    console.log("changed value : " + value);
    persistNote();
  }

  function persistNote(): void {
    const Note: NoteObjectArray<string, string>[] = [
      { content: editorText },
      { createdAt: new Date().toDateString() },
    ];

    localStorage.setItem(String(noteId++), JSON.stringify(Note));
  }
  
  //Triggering useEffect to re-render UI everytime selectedNote changes
  useEffect(() => {
    setValue(selectedNote);
    console.log(
      "UseEffect with dependency of selectedNote from Context is called in HomePage"
    );
  }, [selectedNote]);

  //On 1st componenet mount focusing the Quill via DOM manipulation
  useEffect(() => {
    if (quillRef.current) {
      quillRef.current.focus();
    }
  }, []);

  return (
    <div>
      <UpNavigation />
      <TextfieldLayout>
        <ReactQuill
          style={{ height: "75vh" }}
          ref={quillRef}
          placeholder="Start spamming here...!!"
          modules={modules}
          formats={formats}
          theme="snow"
          value={value}
          onChangeSelection={onSelectionChange}
          onChange={onTextChange}
        />
      </TextfieldLayout>
      <TextWatcher
        char={editorText.trim().length}
        words={condition ? 0 : editorText.split(" ").length}
        lines={condition ? 0 : editorText.split("\n").length}
        selectedText={selectedText}
      />
    </div>
  );
}

export default HomePage;
