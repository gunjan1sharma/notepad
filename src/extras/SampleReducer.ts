import { nanoid } from "nanoid";
import { SingleTodoProps } from "./types";

export default function SampleReducer(tasks: any, action: any) {
  switch (action.type) {
    case "added": {
      console.log("Note added");
      return [
        ...tasks,
        {
          id: action.id,
          todo: action.todo,
          isCompleted: false,
          deleteClicked: () => {},
          editClicked: () => {},
          saveClicked: () => {},
        },
      ];
    }
    case "updated": {
      return tasks;
    }

    case "deleted": {
      console.log(action.id + " deleteID from Reducers");
      return tasks.filter((t: SingleTodoProps) => t.id !== action.id);
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
