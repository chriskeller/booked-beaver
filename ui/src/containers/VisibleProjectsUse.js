import { connect } from 'react-redux'
import { toggleProject } from '../actions/projectsActions'
import { changeUtilization } from '../actions/utilizationsActions'
import ProjectUseList from '../components/ProjectUseList'
import { getVisibleProjects } from './VisibleProjectsList'



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

const VisibleProjectsUse = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectUseList)

export default VisibleProjectsUse