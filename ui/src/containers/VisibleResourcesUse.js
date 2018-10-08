import { connect } from 'react-redux'
import { toggleResource } from '../actions/resourcesActions'
import ResourceUseList from '../components/ResourceUseList'
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

const VisibleResourcesUse = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResourceUseList)

export default VisibleResourcesUse