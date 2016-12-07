import React, {Component} from 'react';
import NewTask from '../Tasks/NewTask'

export default class ProjectTasks extends Component {
    render() {
        return (
           
            <div className="panel panel-info">
                <div className="panel-heading content-mid"><h1>{this.props.projectname}</h1></div>
                <div>Description: {this.props.description}</div>
                <row><h2 className='data-h2'>Project's tasks</h2>
                    <NewTask p_id={this.props.p_id}
                             onSubmitHandler={this.props.onSubmitHandler}
                             onChangeHandler={this.props.onChangeHandler}
                             newtask={this.props.newtask}
                             newlocation={this.props.newlocation}
                             newdate={this.props.newdate}
                             tasks={this.props.tasks}/></row>
                <table className="table table-condensed">
                <thead><tr>
                <th>#</th>
                <th>Task</th>
                <th>Date</th>
                <th>Location</th>
                </tr></thead>
                <tbody>
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
                </tbody>
                </table>
            </div>
            
        )
    }
}