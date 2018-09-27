import React from 'react'
import PropTypes from 'prop-types'
import Project from './Project'

const ProjectList = ({ projects, toggleProject }) => {
  return (
    <table className='table table-sm table-bordered table-hover'>
    <thead className='thead-light'>
      <tr>
        <th scope='col'>#</th>
        <th scope='col'>Project</th>
        <th scope='col'>Details</th>
      </tr>
    </thead>
      <tbody>
        {projects.map((project, index) => {
          return <Project key={index} {...project} onClick={() => toggleProject(index)} />;
        })}
      </tbody>
    </table>
      
  );
}

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      collapsed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onProjectClick: PropTypes.func
}

export default ProjectList