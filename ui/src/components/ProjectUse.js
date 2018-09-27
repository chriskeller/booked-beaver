import React from 'react'
import PropTypes from 'prop-types'

const ProjectUse = ({ id, onClick, collapsed, text, resources }) => (
  <React.Fragment>
  <tr onClick={onClick} className='table-light'>
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
  {resources.map((resource, index) => {
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

ProjectUse.propTypes = {
  onClick: PropTypes.func.isRequired,
  collapsed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default ProjectUse