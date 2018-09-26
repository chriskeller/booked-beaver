import React from 'react'
import PropTypes from 'prop-types'
import Resource from './Resource'

const ResourceList = ({ resources, onResourceClick }) => (
  <ul>
    {resources.map((resource, index) => (
      <Resource key={index} {...resource} onClick={() => onResourceClick(index)} />
    ))}
  </ul>
)

ResourceList.propTypes = {
  resources: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onResourceClick: PropTypes.func.isRequired
}

export default ResourceList