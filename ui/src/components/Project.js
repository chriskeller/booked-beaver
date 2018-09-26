import React from 'react'
import PropTypes from 'prop-types'

const Project = ({ onClick, collapsed, text }) => (
  <React.Fragment>
  <tr
    onClick={onClick}
    style={ { border: '1px solid black' }}
  >
    <td style={ { border: '1px solid black' }}>{text}</td>
    <td>({collapsed ? 'collapsed' : 'visible'})</td>
  </tr>
  <tr style={ { visibility: collapsed ? 'collapse' : 'visible'}}>
    <td style={ { border: '1px dotted black' }}>a</td>
    <td style={ { border: '1px dotted black' }}>a</td>
  </tr>
  </React.Fragment>
)

Project.propTypes = {
  onClick: PropTypes.func.isRequired,
  collapsed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Project