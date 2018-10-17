import React from 'react'
import PropTypes from 'prop-types'
import Project from './Project'

class ProjectsList extends React.Component {

  componentDidMount() {
      this.props.fetchProjects();
  };

  renderProjects(projects) {
      return projects.map((project, index) => {
          return (
              <Project 
                  key={index} 
                  {...project} 
                  onClick={() => this.props.toggleProject(project.id)} 
                  />
          );
      }
          
      )
  }

  render() {
      const { projects, loading, error } = this.props;
      if( loading ){
        // show loading
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
                    <tr>
                        <td colSpan='3'>loading...</td>
                    </tr>
                </tbody>
            </table>
        );
    } else if ( error ) {
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
                    <tr>
                        <td colSpan='3' className="alert alert-danger">Error: {error.message}</td>
                    </tr>
                </tbody>
            </table>
        );
    }

      return (
          <table className='table table-sm table-bordered table-hover'>
              <thead className='thead-light'>
                  <tr>
                      <th scope='col'>#</th>
                      <th scope='col'>Project</th>
                      <th scope='col'>Details</th>
                  </tr>
              </thead>
              <tbody>
                  {this.renderProjects(projects)}
              </tbody>
          </table>
      );
  };
}

ProjectsList.propTypes = {
  projects: PropTypes.arrayOf(
      PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          collapsed: PropTypes.bool,
          projects: PropTypes.array
      }).isRequired
  ).isRequired,
  loading: PropTypes.bool.isRequired,
  toggleProject: PropTypes.func.isRequired
}

export default ProjectsList
