import {
  ADD_TODO,
  DELETE_TODO,
  GET_TODOS,
  EDIT_TODO,
  SET_LOADING,
  CONNECTION_ERROR,
} from "../actions/types";

const initialState = {
  todos: [],
  loading: false,
  error: null,
  current: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_TODOS:
      return {
        ...state,
        todos: action.payload,
        loading: false,
      };
    case CONNECTION_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
