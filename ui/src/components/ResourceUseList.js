import React from 'react'
import PropTypes from 'prop-types'
import ResourceUse from './ResourceUse'

const ResourceUseList = ({ resources, toggleResource }) => (
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
      {resources.map((resource, index) => (
        <ResourceUse key={index} {...resource} onClick={() => toggleResource(index)} />
      ))}
    </tbody>
  </table>
)

ResourceUseList.propTypes = {
  resources: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      collapsed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onResourceClick: PropTypes.func
}

export default ResourceUseList