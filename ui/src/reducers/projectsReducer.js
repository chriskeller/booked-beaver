
import {
    FETCH_PROJECTS, FETCH_PROJECTS_SUCCESS, FETCH_PROJECTS_FAILURE, 
    RESET_PROJECTS, CREATE_PROJECT, CREATE_PROJECT_SUCCESS, 
    CREATE_PROJECT_FAILURE, RESET_NEW_PROJECT, DELETE_PROJECT,
    DELETE_PROJECT_SUCCESS, DELETE_PROJECT_FAILURE, RESET_DELETED_PROJECT, TOGGLE_PROJECT
} from '../actions/projectsActions'

const INITIAL_STATE = {
    projectsList: { projects: [], error: null, loading: false },
    newProject: { project: null, error: null, loading: false },
    deletedProject: { project: null, error: null, loading: false }
}

/**
 * Reducer for the projects state.
 *
 * 
 * projectsState:
 * - projectsList {Object}
 *   - projects {Object[]}
 *      - id
 *      - name
 *      - collapsed
 *      - projects []
 *   - error
 *   - loading
 * - newProject
 * - deletedProject
 * 
 * 
 * @param {Object[]} [state=[]] - The projects state (array of project objects)
 * @param {Object} action = The action from projectsActions.js
 * @returns state
 */
const projectsReducer = (state = INITIAL_STATE, action) => {
    let error;

    switch (action.type) {

        /** projects list */
        case FETCH_PROJECTS: // start fetching projects and set loading = true
            return { ...state, projectsList: { projects: [], error: null, loading: true}};
        case FETCH_PROJECTS_SUCCESS: // return list of projects and make loading = false
            return { ...state, projectsList: { projects: action.payload, error: null, loading: false}};
        case FETCH_PROJECTS_FAILURE: // return error and make loading = false
            error = action.payload || {message: action.payload.message};
            return { ...state, projectsList: { projects: [], error: error, loading: false}};
        case RESET_PROJECTS: // reset to initial state
            return { ...state, projectsList: { projects: [], error: null, loading: false}}

        /** Create new project */
        case CREATE_PROJECT:
            return { ...state, newProject: {...state.newProject, loading: true}};
        case CREATE_PROJECT_SUCCESS:
            return { ...state, newProject: { project: action.payload,  error: null, loading: false}};
        case CREATE_PROJECT_FAILURE:
            error = action.payload || {message: action.payload.message};
            return { ...state, newProject: { project: null, error: error, loading: false}};
        case RESET_NEW_PROJECT:
            return { ...state, newProject: { project: null, error: null, loading: false}};

        /** Delete project */
        case DELETE_PROJECT:
            return { ...state, deletedProject: {...state.deletedProject, loading: true}};
        case DELETE_PROJECT_SUCCESS:
            return { ...state, deletedProject: { project: action.payload,  error: null, loading: false}};
        case DELETE_PROJECT_FAILURE:
            error = action.payload || {message: action.payload.message}; // 2nd statement is for server or network down errors
            return { ...state, deletedProject: { post: null, error: error, loading: false }};
        case RESET_DELETED_PROJECT:
            return { ...state, deletedProject: { post: null, error: null, loading: false }};

        case TOGGLE_PROJECT:
            return { ...state, projectsList: { projects: [...state.projectsList.projects.map( project => (project.id === action.id) ? {...project, collapsed: !project.collapsed} : project )], error: null, loading: false}};
        
        default:
            return state
    }
}


export default projectsReducer

