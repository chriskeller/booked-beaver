import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Picker from '../components/Picker'
import Resource from '../components/Resource'

import {addResource} from '../actions/resourcesActions'
import ProjectList from '../components/ProjectList';
import VisibleProjectList from '../containers/VisibleProjectList';
import ResourceList from '../components/ResourceList';
import AddProject from './AddProject';

class App extends Component {
  constructor(props) {
    super(props)
    //this.handleChange = this.handleChange.bind(this)
    //this.handleRefreshClick = this.handleRefreshClick.bind(this)
    this.fn = this.fn.bind(this)
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
  fn() {
    return 1;
  }

  projects = [{
    id: 1,
    completed: true,
    text: 'Project 1'
  },{
    id: 2, 
    completed: false,
    text: 'Project 2'
  },{
    id: 3, 
    completed: false,
    text: 'Project 3'
  },{
    id: 4, 
    completed: false,
    text: 'Project 4'
  }]

  resources = [{
    id: 1,
    completed: true,
    text: 'Resource 1'
  },{
    id: 2, 
    completed: false,
    text: 'Resource 2'
  },{
    id: 3, 
    completed: false,
    text: 'Resource 3'
  },{
    id: 4, 
    completed: false,
    text: 'Resource 4'
  }]

  render() {
    return (
      <div>
      <div>
        <h2>Resources:</h2>
        <ResourceList
        resources={this.resources}
        onResourceClick={this.fn}
        />
      </div>
        <div>
          <h2>Projects:</h2>
          <AddProject />
          <VisibleProjectList
          projects={this.projects}
          onProjectClick={this.fn}
          />
        </div>
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