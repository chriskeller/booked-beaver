let nextResourceId = 0


export const addResource = text => ({
    type: 'ADD_RESOURCE',
    id: nextResourceId++,
    text
  })

  
  export const toggleResource = id => ({
    type: 'TOGGLE_RESOURCE',
    id
  })
  