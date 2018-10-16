import React from 'react'
import PropTypes from 'prop-types'
import ResourceUse from './ResourceUse'

const ResourceUseList = ({ resources, weeks, toggleResource }) => {
  let thStyle = {
    width: '60px',
    minWidth: '60px'
  } 

  return (
    <table className='table table-sm table-bordered table-hover'>
      <thead className='thead-light'>
        <tr>
          {weeks.map((week, index) => (
            <th style={thStyle} scope='col' key={index}>{week}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {resources.map((resource, index) => (
          <ResourceUse key={index} {...resource} weeks={weeks} onClick={() => toggleResource(index)} />
        ))}
      </tbody>
    </table>
  )
}

ResourceUseList.propTypes = {
  resources: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      collapsed: PropTypes.bool,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onResourceClick: PropTypes.func
}

export default ResourceUseList