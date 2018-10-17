import React from 'react'
import PropTypes from 'prop-types'

const ResourceDetailCell = ({percentage, id}) => (
  <td key={id}>
    {typeof percentage === 'undefined' ? 0 : percentage}
  </td>
)

ResourceDetailCell.propTypes = {
    onClick: PropTypes.func,
    collapsed: PropTypes.bool,
    text: PropTypes.string
}

export default ResourceDetailCell