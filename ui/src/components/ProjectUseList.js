import React from 'react'
import PropTypes from 'prop-types'
import ProjectUse from './ProjectUse'

const ProjectUseList = ({ projects, weeks, toggleProject, updateUtilization }) => {
  let thStyle = {
    width: '60px',
    minWidth: '60px'
  }

  return (
      <table className='table table-sm table-bordered table-hover'>
        <thead className='thead-light'>
          <tr>
            {weeks.map((week, index) => (
              <th style={thStyle} scope='col' key={index}>{week}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <ProjectUse key={index} {...project} weeks={weeks} onClick={() => toggleProject(index)} updateUtilization={updateUtilization} />
          ))}
        </tbody>
      </table>
  )
}

ProjectUseList.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      collapsed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleProject: PropTypes.func
}

export default ProjectUseList