import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import projects from './reducers/projectsReducer'
import resources from './reducers/resourcesReducer'


export default createStore(
  combineReducers({
    projects,
    resources
  }),
  {},
  applyMiddleware(logger, thunk)
)