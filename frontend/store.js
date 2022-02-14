import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// import reducers

const reducer = combineReducers({
  projects: projectsReducer,
});

// initial state

const middleware = [thunk];

const store = createStore(reducer, {}, composeWithDevTools(...middleware));

export default store;
