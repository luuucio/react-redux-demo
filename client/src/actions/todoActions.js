import {
  ADD_TODO,
  DELETE_TODO,
  GET_TODOS,
  EDIT_TODO,
  SET_LOADING,
  CONNECTION_ERROR,
} from "./types";

// Set status to loading
export const setLoading = () => async dispatch => {
  console.log("SET_LOADING");
  dispatch({ type: SET_LOADING });
};

// Get all the todos
export const getTodos = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch("/todo");
    const data = await res.json();
    dispatch({ type: GET_TODOS, payload: data });
  } catch (error) {
    dispatch({ type: CONNECTION_ERROR, payload: error });
  }
};
