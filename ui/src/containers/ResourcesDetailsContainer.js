import { connect } from 'react-redux'
import { toggleResource } from '../actions/resourcesActions'
import ResourcesDetailsList from '../components/ResourcesDetailsList'
import { getVisibleResources } from './ResourcesListContainer'



const mapStateToProps = state => {
  return {
    resources: getVisibleResources(state),
    weeks: state.weeks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleResource: id => dispatch(toggleResource(id))
    }
  }

const ResourcesDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResourcesDetailsList)

export default ResourcesDetailsContainer