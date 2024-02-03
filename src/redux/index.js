import { createStore, applyMiddleware } from "redux";

import { thunk } from "redux-thunk";
import rootReducer from "./slices/rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
