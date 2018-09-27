import { connect } from 'react-redux'
import { toggleResource } from '../actions/resourcesActions'
import ResourceList from '../components/ResourceList'

//
// resources is a list of resource objects:
//
// resource
// - id
// - collapsed
// - text
// - projects  (list of project)
//   - id
//   - text
//   - utilizations (= list of use)
//      - period
//      - percentage
//
export const getVisibleResources = (resources, utilizations, filter) => {

  //attach projects to each resource
  resources.forEach( resource => attachProjects( utilizations, resource ))

  switch (filter) {
    case 'SHOW_ALL':
      return resources
//    case 'SHOW_COMPLETED':
//      return utilizations.filter(t => t.completed)
//    case 'SHOW_ACTIVE':
//      return utilizations.filter(t => !t.completed)
    default: 
      return resources
  }
}

 // for a resource, get the projects with utilizations and attach them
 const attachProjects = ( utilizations, resource ) => {
  var projects = []

  // iterate through all utilizations
  utilizations.forEach( utilization => {
    
    // if it is the same resource id
    if( utilization.resource === resource.id ){
      
      // if the project has not yet been added to the array
      if( !projects.includes( utilization.project )){
        var project = {
          id: utilization.project,
          text: 'todo',
          utilizations: [{
            period: 'period',
            percentage: 0.1
          }]
        }
        projects.push( project )
      }
      else {
        // else if the project is already in the array, add utilization
        project.utilizations.push( { period: 'period', percentage: 0.2 })
      }
    }
  })

  resource.projects = projects

  return resource
}



const mapStateToProps = state => {
  return {
    resources: getVisibleResources(state.resources, state.utilizations, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleResource: id => dispatch(toggleResource(id))
    }
  }

const VisibleResourcesList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResourceList)

export default VisibleResourcesList