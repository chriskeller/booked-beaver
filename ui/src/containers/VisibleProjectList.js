import { connect } from 'react-redux'
import { toggleProject } from '../actions'
import ProjectList from '../components/ProjectList'

const getVisibleProjects = (projects, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return projects
    case 'SHOW_COMPLETED':
      return projects.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return projects.filter(t => !t.completed)
  }
}

const mapStateToProps = state => {
  return {
    projects: getVisibleProjects(state.projects, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onProjectClick: id => {
      dispatch(toggleProject(id))
    }
  }
}

const VisibleProjectList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectList)

export default VisibleProjectList