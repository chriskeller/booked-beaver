import React from 'react'
import PropTypes from 'prop-types'
import ProjectDetailsRow from './ProjectDetailsRow'

const ProjectDetailsList = ({ projects, weeks, toggleProject, updateUtilization }) => {
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
            <ProjectDetailsRow key={index} {...project} weeks={weeks} onClick={() => toggleProject(index)} updateUtilization={updateUtilization} />
          ))}
        </tbody>
      </table>
  )
}

ProjectDetailsList.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      collapsed: PropTypes.bool,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleProject: PropTypes.func
}

export default ProjectDetailsList