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
        <input
            type='number'
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          add Resource
        </button>
      </form>
    </div>
  )
}


export default connect()(AddResourceToProject)