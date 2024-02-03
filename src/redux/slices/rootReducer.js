import { combineReducers } from "redux";
import { todosReducer } from "./todosSlice";
import { themeReducer } from "./themeSlice";

const rootReducer = combineReducers({
  todos: todosReducer,
  theme: themeReducer,
});

export default rootReducer;
