import React from 'react'
import PropTypes from 'prop-types'

const ProjectUseCell = ({updateUtilization, week, project, resource, percentage, id}) => {
  let input;
  
  return (
    <td className='px-0 py-0'>
      {/* <div id="A1" contentEditable suppressContentEditableWarning={true}>
        0
      </div> */}

        <input 
          ref={node => input = node}
          className='form-control form-control-sm' 
          type='number' min='0' max='1' step='0.1' 
          placeholder='0'
          id={id}
          onInput={() => updateUtilization(week, project, resource, input.value)}
          value={percentage}  
        />
    </td>
  )
}

ProjectUseCell.propTypes = {
    onClick: PropTypes.func,
    collapsed: PropTypes.bool,
    text: PropTypes.string
}

export default ProjectUseCell