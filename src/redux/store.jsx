import { applyMiddleware, combineReducers, createStore } from "redux";
import usersReducer from "./reducers/usersReducer";
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers(
   {app: usersReducer}
);

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store;