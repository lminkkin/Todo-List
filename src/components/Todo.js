import React from "react";

const Todo = ({ todo, handleDelete, toggleComplete }) => {
  const label = todo.complete ? "Make incomplete" : "Complete task";
  const type = todo.complete ? "complete" : "incomplete";

  return (
    <li className={type}>
      {todo.name}
      <div className="btns">
        <button onClick={() => toggleComplete(todo.id)}>{label}</button>
        <button onClick={() => handleDelete(todo.id)}>Delete</button>
      </div>
    </li>
  );
};

export default Todo;
