import React from "react";

const AddNew = ({ addTodo, handleTodoChange, newTodo }) => {
  return (
      <form onSubmit={addTodo}>
        <input
          placeholder="Add new task"
          value={newTodo}
          onChange={handleTodoChange}
        />
        <button type="submit">Add</button>
      </form>
  );
};

export default AddNew;
