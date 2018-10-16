import {
    FETCH_RESOURCES, FETCH_RESOURCES_SUCCESS, FETCH_RESOURCES_FAILURE, 
    RESET_RESOURCES, CREATE_RESOURCE, CREATE_RESOURCE_SUCCESS, 
    CREATE_RESOURCE_FAILURE, RESET_NEW_RESOURCE, DELETE_RESOURCE,
    DELETE_RESOURCE_SUCCESS, DELETE_RESOURCE_FAILURE, RESET_DELETED_RESOURCE
} from '../actions/resourcesActions'

const INITIAL_STATE = {
    resourcesList: { resources: [], error: null, loading: false },
    newResource: { resource: null, error: null, loading: false },
    deletedResource: { resource: null, error: null, loading: false }
}

/**
 * Reducer for the resources state.
 *
 * 
 * resourcesState:
 * - resourcesList {Object}
 *   - resources {Object[]}
 *      - id
 *      - name
 *      - collapsed
 *      - projects []
 *   - error
 *   - loading
 * - newResource
 * - deletedResource
 * 
 * 
 * @param {Object[]} [state=[]] - The resources state (array of resource objects)
 * @param {Object} action = The action from resourcesActions.js
 * @returns state
 */
const resourcesReducer = (state = INITIAL_STATE, action) => {
    let error;

    switch (action.type) {

        /** Resources list */
        case FETCH_RESOURCES: // start fetching resources and set loading = true
            return { ...state, resourcesList: { resources: [], error: null, loading: true}};
        case FETCH_RESOURCES_SUCCESS: // return list of resources and make loading = false
            return { ...state, resourcesList: { resources: action.payload, error: null, loading: false}};
        case FETCH_RESOURCES_FAILURE: // return error and make loading = false
            error = action.payload || {message: action.payload.message};
            return { ...state, resourcesList: { resources: [], error: error, loading: false}};
        case RESET_RESOURCES: // reset to initial state
            return { ...state, resourcesList: { resources: [], error: null, loading: false}}

        /** Create new resource */
        case CREATE_RESOURCE:
            return { ...state, newResource: {...state.newResource, loading: true}};
        case CREATE_RESOURCE_SUCCESS:
            return { ...state, newResource: { resource: action.payload,  error: null, loading: false}};
        case CREATE_RESOURCE_FAILURE:
            error = action.payload || {message: action.payload.message};
            return { ...state, newResource: { resource: null, error: error, loading: false}};
        case RESET_NEW_RESOURCE:
            return { ...state, newResource: { resource: null, error: null, loading: false}};

        /** Delete resource */
        case DELETE_RESOURCE:
            return { ...state, deletedResource: {...state.deletedResource, loading: true}};
        case DELETE_RESOURCE_SUCCESS:
            return { ...state, deletedResource: { resource: action.payload,  error: null, loading: false}};
        case DELETE_RESOURCE_FAILURE:
            error = action.payload || {message: action.payload.message}; // 2nd statement is for server or network down errors
            return { ...state, deletedResource: { post: null, error: error, loading: false }};
        case RESET_DELETED_RESOURCE:
            return { ...state, deletedResource: { post: null, error: null, loading: false }};

        case 'ADD_RESOURCE':
            state = [...state, {
                id: action.id,
                name: action.text,
                collapsed: true,
                projects: []
            }]
            break;
        case 'TOGGLE_RESOURCE':
            return { ...state, resourcesList: { resources: [...state.resourcesList.resources.map( resource => (resource.id === action.id) ? {...resource, collapsed: !resource.collapsed} : resource )], error: null, loading: false}};
        
        default:
            return state
    }
    return state
}


export default resourcesReducer
