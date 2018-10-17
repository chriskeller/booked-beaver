import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import logger from "redux-logger"
import promise from "redux-promise";

import projectsState from "./reducers/projectsReducer"
import resourcesState from "./reducers/resourcesReducer"
import utilizations from "./reducers/utilizationsReducer"
import weeks from "./reducers/weeksReducer"


export default createStore(
  combineReducers({
    projectsState,
    resourcesState,
    utilizations, 
    weeks
  }),
  {},
  applyMiddleware(thunk, promise, logger)  // order of middleware matters - logger last
)