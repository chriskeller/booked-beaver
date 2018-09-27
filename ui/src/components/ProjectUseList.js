import React from 'react'
import PropTypes from 'prop-types'
import ProjectUse from './ProjectUse'

const ProjectUseList = ({ projects, toggleProject }) => (
  <table className='table table-sm table-bordered table-hover'>
    <thead className='thead-light'>
      <tr>
        <th scope='col'>1</th>
        <th scope='col'>2</th>
        <th scope='col'>3</th>
        <th scope='col'>4</th>
        <th scope='col'>5</th>
        <th scope='col'>6</th>
        <th scope='col'>7</th>
        <th scope='col'>8</th>
        <th scope='col'>9</th>
        <th scope='col'>10</th>
        <th scope='col'>11</th>
        <th scope='col'>12</th>
      </tr>
    </thead>
    <tbody>
      {projects.map((project, index) => (
        <ProjectUse key={index} {...project} onClick={() => toggleProject(index)} />
      ))}
    </tbody>
  </table>
)

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