import React from 'react'
import { connect } from 'react-redux'
import { addResourceToProject } from '../actions/utilizationsActions'

let AddResourceToProject = ({ dispatch, projectId }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addResourceToProject(projectId, Number(input.value)))
          input.value = ''
        }}
      >

        <div className='form-row'>
          <div className='col'>
            <input type='number' ref={node => input = node} className='form-control form-control-sm' placeholder='Resource id'/>
          </div>
          <div className='col'>
            <button type="submit" className='btn btn-outline-primary btn-sm'>
              add
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}


export default connect()(AddResourceToProject)