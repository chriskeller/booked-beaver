import React from 'react'
import PropTypes from 'prop-types'
import Resource from './Resource'

const ResourceList = ({ resources, toggleResource }) => (
  <table className='table table-sm table-bordered table-hover'>
    <thead className='thead-light'>
      <tr>
        <th scope='col'>#</th>
        <th scope='col'>Resource</th>
        <th scope='col'>Details</th>
      </tr>
    </thead>
    <tbody>
      {resources.map((resource, index) => (
        <Resource key={index} {...resource} onClick={() => toggleResource(index)} />
      ))}
    </tbody>
  </table>
)

ResourceList.propTypes = {
  resources: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      collapsed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onResourceClick: PropTypes.func
}

export default ResourceList