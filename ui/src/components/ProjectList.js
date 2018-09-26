import React from 'react'
import PropTypes from 'prop-types'
import Project from './Project'

const ProjectList = ({ projects, toggleProject }) => {
  return (
    <ul>
      {projects.map((project, index) => {
        return <Project key={index} {...project} onClick={() => toggleProject(index)} />;
      })}
    </ul>
  );
}

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