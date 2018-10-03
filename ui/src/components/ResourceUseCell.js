import React from 'react'
import PropTypes from 'prop-types'

const ResourceUseCell = ({id}) => (
  <td key={id} className='px-0 py-0'>
    -
  </td>
)

ResourceUseCell.propTypes = {
    onClick: PropTypes.func,
    collapsed: PropTypes.bool,
    text: PropTypes.string
}

export default ResourceUseCell