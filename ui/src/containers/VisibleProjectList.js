import { connect } from 'react-redux'
import { toggleProject } from '../actions/projectsActions'
import ProjectList from '../components/ProjectList'

const getVisibleProjects = (projects, utilizations, filter) => {

  //attach resources to each project
  projects.forEach( project => attachResources( utilizations, project ))

  switch (filter) {
    case 'SHOW_ALL':
      return projects
//    case 'SHOW_COMPLETED':
//      return utilizations.filter(t => t.completed)
//    case 'SHOW_ACTIVE':
//      return utilizations.filter(t => !t.completed)
    default: 
      return projects
  }
}

 // for a project, get the resources from utilizations and attach them
 const attachResources = ( utilizations, project ) => {
  var resources = []

  utilizations.forEach( utilization => {
    // if it is the same project id, and not yet in the array
    if( utilization.project === project.id && !resources.includes( utilization.resource )){
      resources.push( utilization.resource )
    }
  })

  project.resources = resources

  return project
 }


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

const VisibleProjectList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectList)

export default VisibleProjectList