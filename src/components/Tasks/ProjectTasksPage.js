import React, {Component} from 'react';
import {loadProject, loadTasks} from '../../models/tasks';
import ProjectTasks from '../Tasks/Task'

export default class ProjectView extends Component {
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
            title = this.state.projectname;
        }
        return (
            <ProjectTasks tasks={this.state.tasks} id={this.props.params.p_id} projectname={title} description={this.state.description}>             
            </ProjectTasks>
        )
    }
}

ProjectView.contextTypes = {
    router: React.PropTypes.object
};