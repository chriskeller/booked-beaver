import React from 'react'
import PropTypes from 'prop-types'
import ResourceDetailCell from './ResourceDetailCell'

const ResourceDetailsRow = ({ id, onClick, collapsed, text, projects, weeks }) => (
  <React.Fragment>
  <tr onClick={onClick} className='table-primary'>
      {weeks.map((week, index) => (
          <td key={index}>-</td>
        ))}
  </tr>

  {/* Iterate over all projects assigned to this resource */}
  {projects.map((project, index) => {
    return (
      <tr key={index} style={ { visibility: collapsed ? 'collapse' : 'visible'}}>
        
        {/* Iterate over all utilizations*/}
        {project.utilizations.map((utilization, index) => {
          return (
            <ResourceDetailCell key={index} {...utilization}  />
          )
        })}

        
      </tr>
    )
  })} 
  </React.Fragment>
)

ResourceDetailsRow.propTypes = {
  onClick: PropTypes.func.isRequired,
  collapsed: PropTypes.bool,
  name: PropTypes.string.isRequired
}

export default ResourceDetailsRow