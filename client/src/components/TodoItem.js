import React from "react";

const TodoItem = ({ value: { id, title, description, completed } }) => {
  const cssCompleted = () => (completed ? "line-through" : "");

  return (
    <div style={{ margin: "30px" }}>
      <div className='card'>
        <div
          className='card-content'
          style={{ textDecoration: cssCompleted() }}
        >
          <h1 className='is-size-4'>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
