
const resourcesReducer = ( state = [], action) => {
switch (action.type) {
    case 'ADD_RESOURCE':
        state = [...state, {
            id: action.id,
            text: action.text,
            collapsed: true,
            projects: []
            }]
        break;
    case 'TOGGLE_RESOURCE':
        return state.map(resource =>
        (resource.id === action.id)
        ? {...resource, collapsed: !resource.collapsed}
        : resource
        )
    default:
        return state
}
return state
}


export default resourcesReducer