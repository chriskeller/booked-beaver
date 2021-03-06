import React from 'react'
import PropTypes from 'prop-types'

const Resource = ({ id, onClick, collapsed, name, projects }) => (
  <React.Fragment>
  <tr onClick={onClick} className='table-primary'>
    <th scope='row'>{id}</th>
    <td>{name}</td>
    <td>({collapsed ? 'collapsed' : 'visible'})</td>
  </tr>
  {projects.map((project, index) => {
    return (
      <tr key={index} style={ { visibility: collapsed ? 'collapse' : 'visible'}}>
        <th scope='row'> {project.id}</th>
        <td>{project.name}</td>
        <td></td>
      </tr>
    )
  })} 
  </React.Fragment>
)

Resource.propTypes = {
  onClick: PropTypes.func.isRequired,
  collapsed: PropTypes.bool,
  name: PropTypes.string.isRequired
}

export default Resource