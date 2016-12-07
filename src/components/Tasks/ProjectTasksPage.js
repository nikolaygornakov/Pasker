import React, {Component} from 'react';
import {loadProject, loadTasks} from '../../models/tasks';
import ProjectTasks from '../Tasks/Task'
import {create} from '../../models/tasks'


export default class ProjectView extends Component {
    constructor(props) {
        super(props);
        this.state ={
            projectname:'',
            description: '',
            tasks: [],
            taskid: '',
            newtask:'',
            newdate:'',
            newlocation:"",
            p_id: this.props.params.p_id,
            ownTeam: sessionStorage.getItem('teamId') === this.props.params.teamId
        };

        this.bindEventHandlers();
    }

    bindEventHandlers() {
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
        this.onUsersSuccess = this.onUsersSuccess.bind(this);
        this.statusChange = this.statusChange.bind(this);

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onSubmitResponse = this.onSubmitResponse.bind(this);
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
        };

        this.setState(newState);
       
    }

    onUsersSuccess(response) {
        this.setState({
            tasks: response
        });
    }

     onChangeHandler(event) {
        event.preventDefault();
        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    }
//begin For New Task
    onSubmitHandler(event) {
        event.preventDefault();
        this.setState({submitDisabled: true});

        create(this.props.params.p_id, this.state.newtask, this.state.newdate, this.state.newlocation, this.onSubmitResponse);
        //console.log(this.state.projectname, this.state.description, this.onSubmitResponse);
    }
     onSubmitResponse(response) {
        if (response === true) {
         loadTasks(this.props.params.p_id, this.onUsersSuccess);
        } else {
            // Something went wrong, let the user try again
            this.setState({submitDisabled: true});
        }
    }
    // end For New Task
    render() {
        let title = 'Project tasks info';
        if (this.state.projectname !== '') {
            title = this.state.projectname;
        }
         this.state.tasks = [...this.state.tasks].sort((a, b) => a['date'] > b['date'])

        return (
            <ProjectTasks newtask={this.state.newtask}
                          onChangeHandler={this.onChangeHandler}
                          onSubmitHandler={this.onSubmitHandler}
                          newlocation={this.state.newlocation}
                          newdate={this.state.newdate}
                          tasks={this.state.tasks}
                          p_id={this.props.params.p_id}
                          projectname={title} description={this.state.description}>
            </ProjectTasks>
        )
    }
}

ProjectView.contextTypes = {
    router: React.PropTypes.object
};