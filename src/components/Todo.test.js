import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import Todo from "./Todo";

test("Component renders content", () => {
  const todo = {
    name: "Make dinner",
    complete: false,
  };

  const component = render(<Todo todo={todo} />);

  expect(component.container).toHaveTextContent("Make dinner");
});

test("Clicking the button calls the button calls event handler once", async () => {
  const todo = {
    name: "Make dinner",
    complete: false,
  };

  const toggleComplete = jest.fn();

  const component = render(<Todo todo={todo} toggleComplete={toggleComplete} />);

  const button = component.getByText("Complete task");
  fireEvent.click(button);

  expect(toggleComplete.mock.calls).toHaveLength(1);
});
