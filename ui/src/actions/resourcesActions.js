import axios from 'axios';

// Resources list
export const FETCH_RESOURCES = 'FETCH_RESOURCES';
export const FETCH_RESOURCES_SUCCESS = 'FETCH_RESOURCES_SUCCESS';
export const FETCH_RESOURCES_FAILURE = 'FETCH_RESOURCES_FAILURE';
export const RESET_RESOURCES = 'RESET_RESOURCES';

// Create new resource
export const CREATE_RESOURCE = 'CREATE_RESOURCE';
export const CREATE_RESOURCE_SUCCESS = 'CREATE_RESOURCE_SUCCESS';
export const CREATE_RESOURCE_FAILURE = 'CREATE_RESOURCE_FAILURE';
export const RESET_NEW_RESOURCE = 'RESET_NEW_RESOURCE';

// Delete resource
export const DELETE_RESOURCE = 'DELETE_RESOURCE';
export const DELETE_RESOURCE_SUCCESS = 'DELETE_RESOURCE_SUCCESS';
export const DELETE_RESOURCE_FAILURE = 'DELETE_RESOURCE_FAILURE';
export const RESET_DELETED_RESOURCE = 'RESET_DELETED_RESOURCE';


let nextResourceId = 0

const ROOT_URL = 'http://localhost:7500';

/** Resource list */
export const fetchResources = () => {

    return (dispatch) => {
        dispatch({ type: FETCH_RESOURCES });
        return axios({
                method: 'get',
                url: ROOT_URL + '/resources',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                console.log("response ", response)
                !response.error ? dispatch(fetchResourcesSuccess(response.data)) : dispatch(fetchResourcesFailure(response.data));
            })
            .catch(error => {
                dispatch(fetchResourcesFailure(error));
            })

    }
}

export const fetchResourcesSuccess = resources => {
    return {
        type: FETCH_RESOURCES_SUCCESS,
        payload: resources
    }
}

export const fetchResourcesFailure = error => {
    return {
        type: FETCH_RESOURCES_FAILURE,
        payload: error
    }
}

/** Create new resource */
export const createResource = (props) => {
    const request = axios({
        method: 'post',
        data: JSON.stringify({ name: props }),
        url: ROOT_URL + '/resources',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return {
        type: CREATE_RESOURCE,
        payload: request
    }
}

export const createResourceSuccess = newResource => {
    return {
        type: CREATE_RESOURCE_SUCCESS,
        payload: newResource
    }
}

export const createResourceFailure = error => {
    return {
        type: CREATE_RESOURCE_FAILURE,
        payload: error
    }
}

export const resetNewResource = () => {
    return {
        type: RESET_NEW_RESOURCE
    }
}


/** Delete resource */
export const deleteResource = (id, tokenFromStorage) => {
    const request = axios({
        method: 'delete',
        url: ROOT_URL + '/resources',
        headers: {
            'Authorization': 'Bearer ' + tokenFromStorage
        }
    });

    return {
        type: DELETE_RESOURCE,
        payload: request
    }
}

export const deleteResourceSuccess = deletedResource => {
    return {
        type: DELETE_RESOURCE_SUCCESS,
        payload: deletedResource
    }
}

export const deleteResourceFailure = error => {
    return {
        type: DELETE_RESOURCE_FAILURE,
        payload: error
    }
}

export const resetDeletedResource = () => {
    return {
        type: RESET_DELETED_RESOURCE
    }
}


export const addResource = name => {
    let r = {
        type: 'ADD_RESOURCE'
    };

    axios.post('/resources', {
            id: nextResourceId++,
            name: name
        })
        .then(response => {
            r.response = response;;
        })
        .catch(error => {
            r.response = error;
        });

    return r;
}

export const addResourceSuccess = text => ({
    type: 'ADD_RESOURCE_SUCCESS',
    text

})

export const addResourceFail = text => ({
    type: 'ADD_RESOURCE_FAIL',
    id: nextResourceId++,
    text

})


export const toggleResource = id => ({
    type: 'TOGGLE_RESOURCE',
    id
})
