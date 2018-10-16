import React from 'react'
import PropTypes from 'prop-types'
import Resource from './Resource'

class ResourcesList extends React.Component {

    componentDidMount() {
        this.props.fetchResources();
    };

    renderResources(resources) {
        return resources.map((resource, index) => {
            return (
                <Resource 
                    key={index} 
                    {...resource} 
                    onClick={() => this.props.toggleResource(resource.id)} 
                    />
            );
        }
            
        )
    }

    render() {
        const { resources, loading, error } = this.props;
        if( loading ){
            // show loading
            return <div>loading...</div>
        } else if ( error ) {
            return <div className="alert alert-danger">Error: {error.message}</div>
        }

        return (
            <table className='table table-sm table-bordered table-hover'>
                <thead className='thead-light'>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Resource</th>
                        <th scope='col'>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderResources(resources)}
                </tbody>
            </table>
        );
    };
}

ResourcesList.propTypes = {
    resources: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            collapsed: PropTypes.bool,
            projects: PropTypes.array
        }).isRequired
    ).isRequired,
    loading: PropTypes.bool.isRequired,
    toggleResource: PropTypes.func.isRequired
}

export default ResourcesList
