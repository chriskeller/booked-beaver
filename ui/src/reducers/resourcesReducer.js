
const resourcesReducer = ( state = {
    isFetching: false,
    didInvalidate: false, 
    resources: []
}, action) => {
switch (action.type) {
    case 'ADD_RESOURCE':
        state = {
            ...state,
            id: action.id,
            text: action.text,
            completed: false
            }
        break;
    case 'TOGGLE_RESOURCE':
        state = {
            ...state
        }
        break;
    default:
        return state
}
return state
}


export default resourcesReducer