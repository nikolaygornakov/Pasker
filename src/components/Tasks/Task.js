import React, {Component} from 'react';

export default class ProjectTasks extends Component {
    render() {
        return (
           
            <div className="panel panel-info">
                <div className="panel-heading"><h3 className="panel-title">{this.props.projectname}</h3> </div>
                <div>Description: {this.props.description}</div>
                <h2>Project's task table</h2>
                <table className="table table-condensed">
                <thead> <tr>
                <th>#</th>
                <th>Task</th>
                <th>Date</th>
                <th>Location</th>
                </tr></thead>
                    {this.props.tasks.map((p, i) => {

                    return (
                        <tr key={i}>
                        <td>{i+1}</td>
                        <td>{p.task}</td>
                        <td>{p.date}</td>
                        <td>{p.location}</td>
                        </tr>

                    )
                })}
                </table>
            </div>
            
        )
    }
}