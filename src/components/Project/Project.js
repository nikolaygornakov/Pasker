import React, {Component} from 'react';

export default class Project extends Component {
    render() {
        return (
            <div>
                <div>Project</div>
                <div>{this.props.projectname}</div>
                <div>Description</div>
                <div>{this.props.description}</div>
            </div>
        )
    }
}