let nextUtilizationId = 0

export const addUtilization = text => ({
    type: 'ADD_UTILIZATION',
    id: nextUtilizationId++,
    text
  })

export const addResourceToProject = (projectId, resourceId) => ({
    type: 'ADD_RESOURCE_TO_PROJECT',
    id: nextUtilizationId++,
    project: projectId,
    resource: resourceId 
})

export const changeUtilization = (week, project, resource, percentage) => ({
    type: 'CHANGE_PERCENTAGE',
    week,
    project,
    resource,
    percentage
  })
  