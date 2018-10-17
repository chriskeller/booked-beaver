import axios from 'axios';

// Projects list
export const FETCH_PROJECTS = 'FETCH_PROJECTS';
export const FETCH_PROJECTS_SUCCESS = 'FETCH_PROJECTS_SUCCESS';
export const FETCH_PROJECTS_FAILURE = 'FETCH_PROJECTS_FAILURE';
export const RESET_PROJECTS = 'RESET_PROJECTS';

// Create new project
export const CREATE_PROJECT = 'CREATE_PROJECT';
export const CREATE_PROJECT_SUCCESS = 'CREATE_PROJECT_SUCCESS';
export const CREATE_PROJECT_FAILURE = 'CREATE_PROJECT_FAILURE';
export const RESET_NEW_PROJECT = 'RESET_NEW_PROJECT';

// Delete project
export const DELETE_PROJECT = 'DELETE_PROJECT';
export const DELETE_PROJECT_SUCCESS = 'DELETE_PROJECT_SUCCESS';
export const DELETE_PROJECT_FAILURE = 'DELETE_PROJECT_FAILURE';
export const RESET_DELETED_PROJECT = 'RESET_DELETED_PROJECT';

export const TOGGLE_PROJECT = 'TOGGLE_PROJECT';


const ROOT_URL = 'http://localhost:7500';

/** Project list */
export const fetchProjects = () => {

    return (dispatch) => {
        dispatch({ type: FETCH_PROJECTS });
        return axios({
                method: 'get',
                url: ROOT_URL + '/projects',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                !response.error ? dispatch(fetchProjectsSuccess(response.data)) : dispatch(fetchProjectsFailure(response.data));
            })
            .catch(error => {
                dispatch(fetchProjectsFailure(error));
            })

    }
}

export const fetchProjectsSuccess = projects => {
    return {
        type: FETCH_PROJECTS_SUCCESS,
        payload: projects
    }
}

export const fetchProjectsFailure = error => {
    return {
        type: FETCH_PROJECTS_FAILURE,
        payload: error
    }
}

/** Create new project */
export const createProject = (props) => {
    const request = axios({
        method: 'post',
        data: JSON.stringify({name: props}),
        url: ROOT_URL + '/projects',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return {
        type: CREATE_PROJECT,
        payload: request
    }
}

export const createProjectSuccess  = newProject => {
    return {
        type: CREATE_PROJECT_SUCCESS,
        payload: newProject
    }
}

export const createProjectFailure = error => {
    return {
        type: CREATE_PROJECT_FAILURE, 
        payload: error
    }
}

export const resetNewProject = () => {
    return {
        type: RESET_NEW_PROJECT
    }
}


/** Delete project */
export const deleteProject = (id, tokenFromStorage) => {
    const request = axios ({
        method: 'delete',
        url: ROOT_URL + '/projects',
        headers: {
            'Authorization': 'Bearer ' + tokenFromStorage
        }
    });

    return {
        type: DELETE_PROJECT,
        payload: request
    }
}

export const deleteProjectSuccess = deletedProject => {
    return {
        type: DELETE_PROJECT_SUCCESS,
        payload: deletedProject
    }
}

export const deleteProjectFailure = error => {
    return {
        type: DELETE_PROJECT_FAILURE,
        payload: error
    }
}

export const resetDeletedProject = () => {
    return {
        type: RESET_DELETED_PROJECT
    }
}




export const toggleProject = id => ({
    type: TOGGLE_PROJECT,
    id
})
