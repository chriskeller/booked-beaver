import { connect } from 'react-redux'
import { toggleProject } from '../actions/projectsActions'
import ProjectUseList from '../components/ProjectUseList'
import { getVisibleProjects } from './VisibleProjectsList'



const mapStateToProps = state => {
  return {
    projects: getVisibleProjects(state.projects, state.utilizations, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleProject: id => dispatch(toggleProject(id))
    }
  }

const VisibleProjectsUse = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectUseList)

export default VisibleProjectsUse