import React, { useState } from "react";
import TodoList from "./components/TodoList";
import AddNew from "./components/AddNew";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, name: "Go to the supermarket", complete: false },
    { id: 2, name: "Call Alice", complete: false },
    { id: 3, name: "Ask Alice to call Bob", complete: false },
    { id: 4, name: "Do the dishes", complete: false },
    { id: 5, name: "Change car tyres", complete: false },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = (event) => {
    event.preventDefault();

    const todoObject = {
      id: todos.length + 1,
      name: newTodo,
      complete: false,
    };

    setTodos(todos.concat(todoObject));
    setNewTodo("");
  };

  const handleTodoChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete task from list?")) {
      setTodos(todos.filter((todo) => todo.id !== id));
    }
  };

  const toggleComplete = (id) => {
    let todo = todos.find((t) => t.id === id);
    const changedTodo = { ...todo, complete: !todo.complete };
    setTodos(todos.map((todo) => (todo.id !== id ? todo : changedTodo)));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div className="wrapper">
        <TodoList
          todos={todos}
          handleDelete={handleDelete}
          toggleComplete={toggleComplete}
        />
        <AddNew
          addTodo={addTodo}
          newTodo={newTodo}
          handleTodoChange={handleTodoChange}
        />
      </div>
    </div>
  );
};

export default App;
