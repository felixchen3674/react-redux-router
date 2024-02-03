import * as TodosAPI from "../../mockAPIs/TodoAPI";
import { ADD_TODO, SET_TODOS } from "../../pages/actionTypes";

export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case SET_TODOS:
      return action.payload;
    case ADD_TODO:
      return [...state, action.payload];
    default:
      return state;
  }
};

export const fetchTodos = () => async (dispatch) => {
  const response = await TodosAPI.getTodos();
  dispatch({ type: SET_TODOS, payload: response });
};

export const addTodo = (todo) => async (dispatch) => {
  const { title } = todo;
  const response = await TodosAPI.addTodo({
    title,
    completed: false,
  });
  dispatch({ type: ADD_TODO, payload: response });
};
