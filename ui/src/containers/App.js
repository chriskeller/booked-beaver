import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {addResource} from '../actions/resourcesActions'
import VisibleProjectsList from './VisibleProjectsList';
import VisibleProjectsUse from './VisibleProjectsUse';
import VisibleResourcesList from './VisibleResourcesList';
import VisibleResourcesUse from './VisibleResourcesUse';
import AddProject from './AddProject';
import AddResource from './AddResource'
import Header from '../components/Header'

class App extends Component {
  constructor(props) {
    super(props)
    //this.handleChange = this.handleChange.bind(this)
    //this.handleRefreshClick = this.handleRefreshClick.bind(this)
    //this.fn = this.fn.bind(this)
  }
/*
  componentDidMount() {
    const { dispatch, selectedProject } = this.props
    dispatch(fetchResourcesIfNeeded(selectedProject))
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedProject !== prevProps.selectedProject) {
      const { dispatch, selectedProject } = this.props
      dispatch(fetchResourcesIfNeeded(selectedProject))
    }
  }

  handleChange(nextProject) {
    this.props.dispatch(selectProject(nextProject))
    this.props.dispatch(fetchResourcesIfNeeded(nextProject))
  }

  handleRefreshClick(e) {
    e.preventDefault()

    const { dispatch, selectedProject } = this.props
    dispatch(invalidateProject(selectedProject))
    dispatch(fetchResourcesIfNeeded(selectedProject))
  }
  */

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col'><Header /></div>
        </div>

        { /* resource row */ }
        <div className='row'>

          {/* left column */ }
          <div className='col-sm-4'> 
            <div className='row'>
              <div className='col-sm-1'></div>
              <div className='col'><VisibleResourcesList /></div>
            </div>
            <div className='row'>
              <div className='col-sm-1'></div>
              <div className='col'><AddResource /></div>
            </div>
            <div className='row'>
              <div className='col-sm-1'></div>
              <div className='col'> <br/></div>
            </div>
          </div>
          {/* right column */}
          <div className='col-sm-8'>          
            <div className='row'>
              <div className='col'><VisibleResourcesUse /></div>
            </div>
          </div>
        
        </div> { /* end resource row */ }

        { /* projects row */ }
        <div className='row'>
          
          {/* left column */ }
          <div className='col-sm-4'> 
            <div className='row'>
              <div className='col-sm-1'></div>
              <div className='col'><VisibleProjectsList /></div>
            </div>
            <div className='row'>
              <div className='col-sm-1'></div>
              <div className='col'><AddProject /></div>
            </div>    
          </div>
          
          {/* right column */}
          <div className='col-sm-8'> 
            <div className='row'>
              <div className='col'><VisibleProjectsUse /></div>
            </div>
          </div>
        </div> { /* end projects row */ }
        

        
      </div>
    )
  }
}

App.propTypes = {
  selectedProject: PropTypes.number,
  resources: PropTypes.array,
  isFetching: PropTypes.bool,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func
}

function mapStateToProps(state) {
    return {
    selectedProject: 0,
    resources: [],
    isFetching: false,
    lastUpdated: 0
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addResource: (resource) => {
      dispatch(addResource(resource))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)