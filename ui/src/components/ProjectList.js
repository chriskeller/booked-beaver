import React from 'react'
import PropTypes from 'prop-types'
import Project from './Project'

const ProjectList = ({ projects, onProjectClick }) => (
  <ul>
    {projects.map((project, index) => (
      <Project key={index} {...project} onClick={() => onProjectClick(index)} />
    ))}
  </ul>
)

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onProjectClick: PropTypes.func.isRequired
}

export default ProjectList