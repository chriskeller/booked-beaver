import React from 'react'
import PropTypes from 'prop-types'
import ProjectUseCell from './ProjectUseCell'

const ProjectUse = ({ id, onClick, collapsed, text, resources, weeks, updateUtilization }) => (
  <React.Fragment>
  <tr onClick={onClick} className='table-light'>
  
    {weeks.map((week, index) => (
          <td key={index}>-</td>
        ))}
  </tr>

  {/* Iterate over all resources assigned to this project */}
  {resources.map((resource, index) => {
    return (
        <tr key={index} className='table-primary' style={ { visibility: collapsed ? 'collapse' : 'visible'}}>

        {/* Iterate over all utilizations*/}
        {resource.utilizations.map((utilization, index) => {
          return (
            <ProjectUseCell key={index} {...utilization} project={id} resource={resource.id} week={utilization.period} updateUtilization={updateUtilization} />
          )
        })}
          
        </tr>
    )
  })}
  <tr style={ { visibility: collapsed ? 'collapse' : 'visible'}}>
      <td colSpan='12'> 
        {/* add a hidden button to take up same space as in left project column*/}
        <form>
          <div className='form-row' >
            <div className='col' >
              <input className='form-control form-control-sm invisible' placeholder='Resource name'/>
            </div>
            <div className='col'>
              <button type="submit" className='btn btn-outline-primary btn-sm invisible'>
                Add Resource
              </button>
            </div>
          </div>
        </form>
      </td>
  </tr> 
  </React.Fragment>
)

ProjectUse.propTypes = {
  onClick: PropTypes.func.isRequired,
  collapsed: PropTypes.bool,
  name: PropTypes.string.isRequired
}

export default ProjectUse