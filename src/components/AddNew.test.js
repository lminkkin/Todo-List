import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import AddNew from "./AddNew";

test("<AddNew /> updates parent state, calls onSubmit once and clears form", () => {
  const addTodo = jest.fn();
  let newTodo = "";
  const handleTodoChange = (event) => {
    newTodo = event.target.value;
  };

  const component = render(
    <AddNew
      addTodo={addTodo}
      handleTodoChange={handleTodoChange}
      newTodo={newTodo}
    />
  );

  const input = component.container.querySelector("input");
  const form = component.container.querySelector("form");

  fireEvent.change(input, {
    target: { value: "testing of forms could be easier" },
  });

  fireEvent.submit(form);

  expect(addTodo.mock.calls).toHaveLength(1);
  expect(input.value).toBe("");
  expect(newTodo).toBe("testing of forms could be easier");
});
