import { connect } from 'react-redux'
import { toggleProject, fetchProjects, fetchProjectsSuccess, fetchProjectsFailure } from '../actions/projectsActions'
import ProjectsList from '../components/ProjectsList'

/**
 * Get the visible projects from the projectsState object.
 * 
 * 
 * @param {*} state - The state object.
 * @returns projects - Array of project objects.
 */
export const getVisibleProjects = (state) => {

    //attach resources to each project
    state.projectsState.projectsList.projects.forEach(project => attachResources(state, project))

    switch (state.filter) {
        case 'SHOW_ALL':
            return state.projectsState.projectsList.projects
            //    case 'SHOW_COMPLETED':
            //      return utilizations.filter(t => t.completed)
            //    case 'SHOW_ACTIVE':
            //      return utilizations.filter(t => !t.completed)
        default:
            return state.projectsState.projectsList.projects
    }
}

// for a project, get the resources with utilizations and attach them
const attachResources = (state, project) => {
    var resources = [];

    // iterate through all utilizations
    state.utilizations.forEach(utilization => {

        // if it is the same project id
        if (utilization.project === project.id) {

            // if the resource has not yet been added to the array
            if (!resources.some(resource => resource.id === utilization.resource)) {
                // create a new resource
                var resource = {
                    id: utilization.resource,
                    text: state.resources.find(r => r.id === utilization.resource).text,
                    utilizations: []
                };
                // add a utilization for each week
                state.weeks.forEach(week => {
                    // check if there is a percentage used in this week
                    if (week === utilization.period) {

                        resource.utilizations.push({
                            id: utilization.id,
                            period: week,
                            percentage: utilization.percentage
                        })
                    } else {
                        resource.utilizations.push({ period: week })
                    }
                })

                resources.push(resource)
            } else {
                // else if the resource is already in the array, change utilization

                // find resource 
                var i = resources.find(resource => resource.id === utilization.resource);
                // find utilization
                var j = i.utilizations.find(u => u.period === utilization.period);

                if( typeof j !== 'undefined'){
                  j.percentage = utilization.percentage;
                }

            }
        }
    })

    project.resources = resources

    return project
}



const mapStateToProps = state => {
    return {
        projects: getVisibleProjects(state),
        loading: state.projectsState.projectsList.loading,
        error: state.projectsState.projectsList.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleProject: id => dispatch(toggleProject(id)),
        fetchProjects: () => {
            dispatch(fetchProjects())
                .then((response) => {
                   !response.error ? dispatch(fetchProjectsSuccess(response.payload.data)) : dispatch(fetchProjectsFailure(response.payload.data))
                })
                .catch((response) => {
                    dispatch(fetchProjectsFailure(response));
                })
        }
    }
}

const ProjectsListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectsList)

export default ProjectsListContainer
