
/**
 * Reducer for the resources state.
 *
 * resources[] is an array of resource objects:
 * - resource
 *   - id
 *   - text
 *   - collapsed
 *   - projects[]
 * 
 * @param {Object[]} [state=[]] - The resources state (array of resource objects)
 * @param {Object} action = The action from resourcesActions.js
 * @returns state
 */
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