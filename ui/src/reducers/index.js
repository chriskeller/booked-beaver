import { combineReducers } from 'redux'
import projects from './projects'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  projects,
  visibilityFilter
})