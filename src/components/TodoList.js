import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, handleDelete, toggleComplete }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          handleDelete={handleDelete}
          toggleComplete={toggleComplete}
        />
      ))}
    </ul>
  );
};

export default TodoList;
