import React, {Component} from 'react';
import NewTask from '../Tasks/NewTask';
import TaskControls from './TaskControls';
import {deleteTask} from '../../models/tasks';

export default class ProjectTasks extends Component {
    constructor(props) {
        super(props);
        this.onDeleteSuccess=this.onDeleteSuccess.bind(this);
        this.onDelete=this.onDelete.bind(this);
    }

    onDelete(id) {
        deleteTask(id, this.onDeleteSuccess);
    }

    onDeleteSuccess(result) {
        if (result === true) {
            this.context.router.push("/projects");
        }
    }

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
                    <th>Actions</th>
                </tr></thead>
                <tbody>
                    {this.props.tasks.map((p, i) => {
                    return (
                        <tr key={i}>
                        <td>{i+1}</td>
                        <td>{p.task}</td>
                        <td>{p.date}</td>
                        <td>{p.location}</td>
                        <td>
                            <TaskControls author={p._acl.creator}
                                          taskId={p._id}
                                          onDelete={this.onDelete}/>
                        </td>
                        </tr>
                    )
                })}
                </tbody>
                </table>
            </div>
            
        )
    }
}

ProjectTasks.contextTypes = {
    router: React.PropTypes.object
};