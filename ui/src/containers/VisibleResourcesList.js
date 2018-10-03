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
export const getVisibleResources = (state) => {

  //attach projects to each resource
  state.resources.forEach( resource => attachProjects( state, resource ))

  switch (state.filter) {
    case 'SHOW_ALL':
      return state.resources
//    case 'SHOW_COMPLETED':
//      return utilizations.filter(t => t.completed)
//    case 'SHOW_ACTIVE':
//      return utilizations.filter(t => !t.completed)
    default: 
      return state.resources
  }
}

 // for a resource, get the projects with utilizations and attach them
 const attachProjects = ( state, resource ) => {
  var projects = []

  // iterate through all utilizations
  state.utilizations.forEach( utilization => {
    
    // if it is the same resource id
    if( utilization.resource === resource.id ){
      
      // if the project has not yet been added to the array
      if( !projects.some( project => project.id === utilization.project )){
        // create a new project
        var project = {
          id: utilization.project,
          text: state.projects.find(p => p.id === utilization.project).text,
          utilizations: []
        }
        // add a utilization for each week
        state.weeks.forEach(week => {
            // check if there is a percentage used in this week
            if (week === utilization.period) {

                project.utilizations.push({
                    id: utilization.id,
                    period: week,
                    percentage: utilization.percentage
                })
            } else {
              project.utilizations.push({ period: week })
            }
        })
        projects.push( project )
      }
      else {
        // else if the project is already in the array, change utilization

        // find project 
        var i = projects.find(project => project.id === utilization.project);
        // find utilization
        var j = i.utilizations.find(u => u.period === utilization.period);

        j.percentage = utilization.percentage;
      }
    }
  })

  resource.projects = projects

  return resource
}



const mapStateToProps = state => {
  return {
    resources: getVisibleResources(state)
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