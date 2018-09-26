import React from 'react'
import PropTypes from 'prop-types'
import AddResourceToProject from '../containers/AddResourceToProject';

const Project = ({ id, onClick, collapsed, text, resources }) => (
  <React.Fragment>
  <tr
    onClick={onClick}
    style={ { border: '1px solid black' }}
  >
    <td style={ { border: '1px solid black' }}>{text}</td>
    <td>({collapsed ? 'collapsed' : 'visible'})</td>
  </tr>
  {resources.map((resource, index) => {
          return (
            <tr key={index} style={ { visibility: collapsed ? 'collapse' : 'visible'}}>
              <td style={ { border: '1px dotted black' }}>{index}</td>
              <td style={ { border: '1px dotted black' }}>x</td>
            </tr>
          )
        })} 
  <tr style={ { visibility: collapsed ? 'collapse' : 'visible'}}>
      <td style={ { border: '1px dotted black' }}>   </td>
      <td style={ { border: '1px dotted black' }}> 
        <AddResourceToProject projectId={id}/>
      </td>
  </tr>
  </React.Fragment>
)

Project.propTypes = {
  onClick: PropTypes.func.isRequired,
  collapsed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  resources: PropTypes.array.isRequired
}

export default Project