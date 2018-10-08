import { connect } from 'react-redux'
import { toggleResource, fetchResources, fetchResourcesSuccess, fetchResourcesFailure } from '../actions/resourcesActions'
import ResourcesList from '../components/ResourcesList'

/**
 * Get the visible resources from the resourcesState object.
 * 
 * 
 * @param {*} state - The resourcesState object.
 * @returns resources - Array of resource objects.
 */
export const getVisibleResources = (state) => {

    //attach projects to each resource
    state.resourcesState.resourcesList.resources.forEach(resource => attachProjects(state, resource))

    switch (state.filter) {
        case 'SHOW_ALL':
            return state.resourcesState.resourcesList.resources
            //    case 'SHOW_COMPLETED':
            //      return utilizations.filter(t => t.completed)
            //    case 'SHOW_ACTIVE':
            //      return utilizations.filter(t => !t.completed)
        default:
            return state.resourcesState.resourcesList.resources
    }
}

// for a resource, get the projects with utilizations and attach them
const attachProjects = (state, resource) => {
    var projects = []

    // iterate through all utilizations
    state.utilizations.forEach(utilization => {

        // if it is the same resource id
        if (utilization.resource === resource.id) {

            // if the project has not yet been added to the array
            if (!projects.some(project => project.id === utilization.project)) {
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
                projects.push(project)
            } else {
                // else if the project is already in the array, change utilization

                // find project 
                var i = projects.find(project => project.id === utilization.project);
                // find utilization
                var j = i.utilizations.find(u => u.period === utilization.period);

                if (typeof j !== 'undefined') {
                    j.percentage = utilization.percentage;
                }
            }
        }
    })

    resource.projects = projects

    return resource
}



const mapStateToProps = state => {
    return {
        resources: getVisibleResources(state),
        loading: state.resourcesState.resourcesList.loading,
        error: state.resourcesState.resourcesList.error
    };
}

const mapDispatchToProps = dispatch => {
    return {
        toggleResource: id => dispatch(toggleResource(id)),
        fetchResources: () => {
            console.log("TEST")
            dispatch(fetchResources())
                .then((response) => {
                    !response.error ? dispatch(fetchResourcesSuccess(response.payload.data)) : dispatch(fetchResourcesFailure(response.payload.data))
                })
                .catch((response) => {
                    dispatch(fetchResourcesFailure(response));
                })
        }
    }
}

const ResourcesListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ResourcesList)

export default ResourcesListContainer
