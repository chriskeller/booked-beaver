import { connect } from 'react-redux'
import { toggleProject } from '../actions/projectsActions'
import ProjectList from '../components/ProjectList'

export const getVisibleProjects = (projects, utilizations, filter) => {

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

 // for a project, get the resources with utilizations and attach them
 const attachResources = ( utilizations, project ) => {
  var resources = []

  // iterate through all utilizations
  utilizations.forEach( utilization => {
    
    // if it is the same resource id
    if( utilization.project === project.id ){
      
      // if the project has not yet been added to the array
      if( !resources.includes( utilization.resource )){
        var resource = {
          id: utilization.resource,
          text: 'todo',
          utilizations: [{
            period: 'period',
            percentage: 0.1
          }]
        }
        resources.push( resource )
      }
      else {
        // else if the project is already in the array, add utilization
        resource.utilizations.push( { period: 'period', percentage: 0.2 })
      }
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

const VisibleProjectsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectList)

export default VisibleProjectsList