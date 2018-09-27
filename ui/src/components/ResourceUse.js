import React from 'react'
import PropTypes from 'prop-types'

const ResourceUse = ({ id, onClick, collapsed, text, projects }) => (
  <React.Fragment>
  <tr onClick={onClick} className='table-primary'>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
    <td>0</td>
  </tr>
  {projects.map((project, index) => {
    return (
      <tr key={index} style={ { visibility: collapsed ? 'collapse' : 'visible'}}>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>


        {/* { 
            project.utilizations.map((utilization, index) => { 
                return (
                    <td key={index}>
                    {utilization.percentage}
                    </td>
                )
            })
        } */}
        
      </tr>
    )
  })} 
  </React.Fragment>
)

ResourceUse.propTypes = {
  onClick: PropTypes.func.isRequired,
  collapsed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default ResourceUse