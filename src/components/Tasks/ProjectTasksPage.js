import React, {Component} from 'react';
import {loadProject, loadTasks} from '../../models/tasks';

export default class ProjectTasks extends Component {
    constructor(props) {
        super(props);
        this.state ={
            projectname:'',
            description: '',
            tasks: [],
            taskid: '',
            ownTeam: sessionStorage.getItem('teamId') === this.props.params.teamId
        };

        this.bindEventHandlers();
    }

    bindEventHandlers() {
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
        this.onUsersSuccess = this.onUsersSuccess.bind(this);
        this.statusChange = this.statusChange.bind(this);
    }

   

    statusChange(response) {
        this.context.router.push('/');
    }

    componentDidMount() {
   
       loadProject(this.props.params.p_id, this.onLoadSuccess);
       loadTasks(this.props.params.p_id, this.onUsersSuccess);
    }

    onLoadSuccess(response) {
        
        let newState = {
            projectname: response.projectname,
            description: response.description
        }

        this.setState(newState);
       
    }

    onUsersSuccess(response) {
        this.setState({
            tasks: response
        });
    }

    render() {
        
        let title = 'Project tasks info';
        if (this.state.projectname !== '') {
            title = this.state.projectname + ' details';
        }
        
        let tasks = <p>No member info</p>;
        if (this.state.tasks.length > 0) {
            tasks = (
            <div>
                {this.state.tasks.map((e, i) => 
                    <div>
                    <span>{e.task}</span>
                    <span>{e.location}</span>
                    <span>{e.date}</span>
                    </div>
                )}
            </div>
            );
        }

        return (
            <div className="details-box">
                <span className="titlebar">{title}</span>
                <span className="spanner">Team tasks</span>
                {tasks}
                <span className="spanner">location</span>
               
            </div>
        )
    }
}

ProjectTasks.contextTypes = {
    router: React.PropTypes.object
};