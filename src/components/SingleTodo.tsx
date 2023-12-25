import { Button, Checkbox, TextField, Typography } from "@mui/material";
import { SingleTodoProps } from "../extras/types";
import { useState } from "react";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function SingleTodo(props: SingleTodoProps) {
  const [todo, setTodo] = useState(props.todo);
  const [editclicked, setEditclicked] = useState<boolean>(true);
  const [done, setDone] = useState<boolean>(props.isCompleted);
  const [btnaction, setBtnaction] = useState<string>("Edit");

  function deleteClicked(): any {
    props.deleteClicked(props.id);
    console.log(props.id + " is deleted [SingleTodo]");
  }

  function saveClicked(): any {
    props.saveClicked(props.id, todo);
    setEditclicked(!editclicked);
    setBtnaction(!editclicked ? "Edit" : "Save");
    console.log(editclicked);
    console.log(props.id + " is saved");
  }

  return (
    <div className="m-3 p-5 border shadow-lg border-blue-700 flex items-center justify-between">
      <Checkbox value={done} onChange={(e, c) => setDone(c)} />
      {editclicked === true ? (
        <Typography sx={{ marginRight: "7px", fontFamily: "monospace" }}>
          {props.todo}
        </Typography>
      ) : (
        <TextField
          sx={{ marginRight: "10px" }}
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          id="outlined-basic"
          label="Update Todo"
          variant="outlined"
        />
      )}
      <Button
        onClick={saveClicked}
        sx={{ marginRight: "10px" }}
        variant="outlined"
      >
        {btnaction}
      </Button>
      <Button onClick={deleteClicked} variant="contained">
        Delete
      </Button>
    </div>
  );
}

export default SingleTodo;
