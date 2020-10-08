import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

test("Component renders correct amount of todos", () => {
  const handleDelete = jest.fn();
  const toggleComplete = jest.fn();
  const todos = [
    { id: 1, name: "Go to the supermarket", complete: false },
    { id: 2, name: "Call Alice", complete: false },
  ];

  const component = render(
    <TodoList
      todos={todos}
      handleDelete={handleDelete}
      toggleComplete={toggleComplete}
    />
  );

  const list = component.container.querySelector("ul");

  expect(list.childElementCount).toBe(2);
});
