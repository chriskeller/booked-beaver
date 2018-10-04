import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import VisibleProjectsList from './VisibleProjectsList';
import VisibleProjectsUse from './VisibleProjectsUse';
import VisibleResourcesList from './VisibleResourcesList';
import VisibleResourcesUse from './VisibleResourcesUse';
import AddProject from './AddProject';
import AddResource from './AddResource'
import Header from '../components/Header'
import VisibleWeekFilter from './VisibleWeekFilter';
import {weekFilter} from '../actions/weeksActions';
import {getWeeksFilter} from './VisibleWeekFilter';

class App extends Component {
  constructor(props) {
    super(props);
    this.setDefaultWeekFilter = this.setDefaultWeekFilter.bind(this);

    this.setDefaultWeekFilter();
    //this.handleChange = this.handleChange.bind(this)
    //this.handleRefreshClick = this.handleRefreshClick.bind(this)
    //this.fn = this.fn.bind(this)
  }

  setDefaultWeekFilter() {
    const { weekFilter, filter } = this.props
    weekFilter(filter)
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
      <div className='container-fluid'>
        <div className='row align-items-center'>
          <div className='col-xl-10'><Header /></div>
          <div className='col-xl-2'><VisibleWeekFilter /></div>
        </div>

        { /* resource row */ }
        <div className='row'>

          {/* left column */ }
          <div className='col-3'> 
            <div className='row'>
              <div className='col'><VisibleResourcesList /></div>
            </div>
            <div className='row'>
              <div className='col'><AddResource /></div>
            </div>
            <div className='row'>
              <div className='col'> <br/></div>
            </div>
          </div>
          {/* right column */}
          <div className='col-9'>          
            <div className='row'>
              <div className='col'><VisibleResourcesUse /></div>
            </div>
          </div>
        
        </div> { /* end resource row */ }

        { /* projects row */ }
        <div className='row'>
          
          {/* left column */ }
          <div className='col-sm-3'> 
            <div className='row'>
              <div className='col'><VisibleProjectsList /></div>
            </div>
            <div className='row'>
              <div className='col'><AddProject /></div>
            </div>    
          </div>
          
          {/* right column */}
          <div className='col-sm-9'> 
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
    filter: getWeeksFilter(),
    selectedProject: 0,
    resources: [],
    isFetching: false,
    lastUpdated: 0
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    weekFilter: filter => dispatch(weekFilter(filter))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)