import React from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const initialState = {
    todo: [
      {
        id: 1,
        title: "Call John",
        description: "At dinner time",
        completed: false,
      },
      {
        id: 2,
        title: "Backup the laptop",
        description: "Use the new hard drive",
        completed: true,
      },
      {
        id: 3,
        title: "Upgrade the OS",
        description: "Remember to backup the laptop",
        completed: false,
      },
    ],
  };
  return (
    <div>
      {initialState.todo.map(item => (
        <TodoItem key={item.id} value={item} />
      ))}
    </div>
  );
};

export default TodoList;
