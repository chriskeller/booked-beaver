const projects = (state = [], action) => {
    switch (action.type) {
      case 'ADD_PROJECT':
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      case 'TOGGLE_PROJECT':
        return state.map(project =>
          (project.id === action.id)
            ? {...project, completed: !project.completed}
            : project
        )
      default:
        return state
    }
  }
  
  export default projects