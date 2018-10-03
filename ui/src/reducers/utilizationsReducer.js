
/**
 * Reducer for the utilizations state.
 * 
 * utilizations[] is an array of utilization objects:
 * - utilization
 *   - id
 *   - project          (refers to the project id)
 *   - resource         (refers to the resource id)
 *   - percentage
 *   - period
 *
 * @param {Object[]} [state=[]] - The utilizations state (array of utilization objects).
 * @param {Object} action - The action from utilizationsActions.js.
 * @returns state
 */
const utilizationReducer = ( state = [], action) => {
    switch (action.type) {
        case 'ADD_UTILIZATION':
            state = [...state, {
                id: action.id,
                project: action.project, 
                resource: action.resources, 
                percentage: action.percentage,
                period: action.period
                }]
            break;
        case 'ADD_RESOURCE_TO_PROJECT':
            state = [...state, {
                id: action.id,
                project: action.project, 
                resource: action.resource
                }]
            break;
        case 'CHANGE_PERCENTAGE':
        console.log( "project: ", action.project );
        console.log( "resource: ", action.resource );
            let i = state.find( s => 
                s.period === action.week && 
                s.project === action.project &&
                s.resource === action.resource
                );
            if( typeof i === 'undefined'){
                // does not exist yet -> create
                state = [...state, {
                    project: action.project, 
                    resource: action.resource, 
                    percentage: action.percentage,
                    period: action.week
                }]
            } else {
                // exists, update percentage
                i.percentage = action.percentage;
            }
            break;
        default:
            return state
    }
    return state
}


export default utilizationReducer