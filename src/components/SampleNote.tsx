import { Button, TextField } from "@mui/material";
import SingleTodo from "./SingleTodo";
import { Key, useReducer, useState } from "react";
import { SingleTodoProps } from "../extras/types";
import SampleReducer from "../extras/SampleReducer";
import { nanoid } from "nanoid";

const initialTodos = [
  {
    id: "0",
    todo: "Visit Kafka Museum",
    isCompleted: true,
    deleteClicked: () => {},
    editClicked: () => {},
    saveClicked: () => {},
  },
  {
    id: "1",
    todo: "Watch a puppet show",
    isCompleted: false,
    deleteClicked: () => {},
    editClicked: () => {},
    saveClicked: () => {},
  },
  {
    id: "2",
    todo: "Lennon Wall pic",
    isCompleted: true,
    deleteClicked: () => {},
    editClicked: () => {},
    saveClicked: () => {},
  },
];

let actions = [
  { type: "added", id: 1, todo: "Visit Kafka Museum" },
  { type: "added", id: 2, text: "Watch a puppet show" },
  { type: "deleted", id: 1 },
  { type: "added", id: 3, text: "Lennon Wall pic" },
];

function SampleNote(params: any) {
  //const [tasks, setTasks] = useState<SingleTodoProps[]>(initialTodos);
  const [todo, setTodo] = useState<string>("");
  const [tasks, dispatch] = useReducer(SampleReducer, initialTodos);

  function addTodo(): void {
    if (todo.length === 0) {
      alert("Add Valid Todo");
      return;
    }
    dispatch({
      type: "added",
      id: nanoid(),
      todo: todo,
    });
    console.log("addTodo() triggered");
  }

  function updateTodo(taskId: string, task1: string): void {
    console.log("update task clicked.." + taskId);
    console.log(task1);
    dispatch({
      type: "updated",
      id: taskId,
    });
  }

  function deleteTodo(taskId: string): void {
    dispatch({
      type: "deleted",
      id: taskId,
    });
    console.log("deleteNote() Triggered [SampleNote" + taskId);
  }

  function editTriggered(): void {}

  return (
    <div className="flex flex-col items-center">
      <h1 className="m-10 text-2xl font-mono font-extrabold">
        Quick To-Do List++
      </h1>

      <div className="flex items-center align-middle">
        <TextField
          sx={{ marginRight: "10px" }}
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          id="outlined-basic"
          label="Add Todo"
          variant="outlined"
        />
        <Button onClick={addTodo} variant="outlined">
          Add Todo
        </Button>
      </div>
      <br />
      {tasks.map(
        (
          item: {
            id: Key | null | undefined;
            todo: string;
            isCompleted: boolean;
          },
          index: any
        ) => (
          <SingleTodo
            key={item.id}
            todo={item.todo}
            isCompleted={item.isCompleted}
            id={index}
            deleteClicked={deleteTodo}
            editClicked={editTriggered}
            saveClicked={updateTodo}
          />
        )
      )}
    </div>
  );
}

export default SampleNote;
