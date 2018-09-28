
// utilizations is an array of utilization objects
// utilization:
// - id
// - project        (refers to the project id)
// - resource       (refers to the resource id)
// - percentage
// - period

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
            return state.map(utilization =>
            (utilization.id === action.id)
              ? {...utilization, percentage: action.percentage}
              : utilization
            )
        default:
            return state
    }
    return state
}


export default utilizationReducer