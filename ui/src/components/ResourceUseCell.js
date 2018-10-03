import React from 'react'
import PropTypes from 'prop-types'

const ResourceUseCell = ({percentage, id}) => (
  <td key={id}>
    {typeof percentage === 'undefined' ? 0 : percentage}
  </td>
)

ResourceUseCell.propTypes = {
    onClick: PropTypes.func,
    collapsed: PropTypes.bool,
    text: PropTypes.string
}

export default ResourceUseCell