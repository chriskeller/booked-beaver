import React from 'react'
import PropTypes from 'prop-types'

class ProjectDetailCell extends React.Component {

    //= ({updateUtilization, week, project, resource, percentage, id}) => {
    constructor(props) {
        super(props);
        this.state = { 
            value: typeof this.props.percentage === 'undefined' ? 0 : this.props.percentage, 
            id: '' 
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidUpdate(prevProps) {
        if( this.props.week !== prevProps.week ) {
            this.setState({ value: typeof this.props.percentage === 'undefined' ? 0 : this.props.percentage });
        }
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.updateUtilization(this.props.week, this.props.project, this.props.resource, event.target.value);
    }

    render() {
        return (
            <td className='px-0 py-0'>

                <input 
                    className='form-control form-control-sm' 
                    type='number' min='0' max='1' step='0.1' 
                    
                    id={this.props.week}

                    value={this.state.value}

                    onChange={this.handleChange}
                    onBlur={this.handleSubmit}
                />
            </td>
        )
    }
}

ProjectDetailCell.propTypes = {
    onClick: PropTypes.func,
    collapsed: PropTypes.bool,
    text: PropTypes.string
}

export default ProjectDetailCell
