import { connect } from 'react-redux'
import { toggleProject } from '../actions/projectsActions'
import { changeUtilization } from '../actions/utilizationsActions'
import ProjectsDetailsList from '../components/ProjectsDetailsList'
import { getVisibleProjects } from './ProjectsListContainer'



const mapStateToProps = state => {
  return {
    projects: getVisibleProjects(state),
    weeks: state.weeks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleProject: id => dispatch(toggleProject(id)),
    updateUtilization: (week, project, resource, percentage) => dispatch(changeUtilization(week, project, resource, percentage))
    }
  }

const ProjectsDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsDetailsList)

export default ProjectsDetailsContainer