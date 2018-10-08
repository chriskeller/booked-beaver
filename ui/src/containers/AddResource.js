import React from 'react'
import { connect } from 'react-redux'
import { createResource, createResourceSuccess, createResourceFailure } from '../actions/resourcesActions'

let AddResource = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(createResource(input.value)).then((response) => {
            !response.error ? dispatch(createResourceSuccess(response.payload.data)) : dispatch(createResourceFailure(response.payload.data))
          })
          input.value = ''
        }}
      >

      <div className='form-row'>
        <div className='col'>
          <input ref={node => input = node} className='form-control form-control-sm' placeholder='Resource name'/>
        </div>
        <div className='col'>
          <button type="submit" className='btn btn-outline-primary btn-sm'>
            Add Resource
          </button>
        </div>
      </div>

      </form>
    </div>
  )
}


export default connect()(AddResource)