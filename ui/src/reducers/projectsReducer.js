
// state is basically an array of project objects

const projectsReducer = ( state = [], action) => {
    switch (action.type) {
        case 'ADD_PROJECT':
            state = [...state, {
                id: action.id,
                text: action.text,
                completed: false
                }]
            break;
        case 'TOGGLE_PROJECT':
            return state.map(project =>
            (project.id === action.id)
              ? {...project, completed: !project.completed}
              : project
            )
        default:
            return state
    }
    return state
}


export default projectsReducer