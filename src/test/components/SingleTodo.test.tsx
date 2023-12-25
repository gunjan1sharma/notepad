import { render, screen } from "@testing-library/react";
import SingleTodo from "../../components/SingleTodo";

const emptyFun = (id: string) => {};

test("[SingleTodo] All Elements Should Be Visible And Presented In DOM", () => {
  render(
    <SingleTodo
      id="1"
      isCompleted={true}
      deleteClicked={emptyFun}
      editClicked={emptyFun}
      saveClicked={emptyFun}
      todo="todo"
      key="kk"
    />
  );
  const checkbox_isCompleted = screen.getByTestId("checkbox");
  const taskHeading = screen.getByText("todo");
  const taskInput = screen.queryByLabelText("Update Todo");
  const btnUpdate = screen.getByRole("button", { name: /Edit/i });
  const btnDelete = screen.getByRole("button", { name: /Delete/i });

  expect(checkbox_isCompleted).toBeInTheDocument();
  expect(taskHeading).toBeInTheDocument();
  expect(btnUpdate).toBeInTheDocument();
  expect(btnDelete).toBeInTheDocument();

  expect(checkbox_isCompleted).toBeVisible();
  expect(taskHeading).toBeVisible();
  expect(btnUpdate).toBeVisible();
  expect(btnDelete).toBeVisible();
});

test("[SingleTodo] All Static Levels Should Be Visible", () => {
  render(
    <SingleTodo
      id="1"
      isCompleted={false}
      deleteClicked={emptyFun}
      editClicked={emptyFun}
      saveClicked={emptyFun}
      todo="todo"
      key="kk"
    />
  );
});

test("[SingleTodo] All Event Should Work As Expected", () => {
  render(
    <SingleTodo
      id="1"
      isCompleted={false}
      deleteClicked={emptyFun}
      editClicked={emptyFun}
      saveClicked={emptyFun}
      todo="todo"
      key="kk"
    />
  );
});

test("[SingleTodo] All User-Event Should Work As Expected", () => {
  render(
    <SingleTodo
      id="1"
      isCompleted={false}
      deleteClicked={emptyFun}
      editClicked={emptyFun}
      saveClicked={emptyFun}
      todo="todo"
      key="kk"
    />
  );
});
