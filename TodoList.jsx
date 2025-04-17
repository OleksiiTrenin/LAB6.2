import React from "react";
import TodoItem from "./TodoItem.jsx";

function TodoList({ tasks, toggleComplete, deleteTask }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task}
          index={index}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}

export default TodoList;
