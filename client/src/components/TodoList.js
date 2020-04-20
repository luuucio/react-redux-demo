import React, { useEffect } from "react";
import TodoItem from "./TodoItem";

import { connect } from "react-redux";
import { getTodos, setLoading } from "../actions/todoActions";

const TodoList = ({ todos, getTodos }) => {
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div>
      {todos && todos.map(item => <TodoItem key={item.id} value={item} />)}
    </div>
  );
};

const mapStateToProps = state => ({
  todos: state.todo.todos,
});

export default connect(mapStateToProps, { getTodos, setLoading })(TodoList);
