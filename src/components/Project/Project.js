import React, {Component} from 'react';

export default class Project extends Component {
    render() {
        return (
            <div>
            <div className="panel panel-info col-sm-6 col-md-4">
                <div className="panel-heading"><h3 className="panel-title">Project: {this.props.projectname}</h3> </div>
                <div className="panel-body">Description: {this.props.description}</div>
               </div>
            </div>
        )
    }
}