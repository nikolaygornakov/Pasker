import React, {Component} from 'react';
import CreateForm from './CreateForm'
import {create} from '../../models/projects';

export default class CreatePage extends Component {
     constructor(props) {
        super(props);
        this.state = {
            projectname: '',
            description: '',
            inputDisabled: false
        };
             this.bindEventHandlers();
    }

    bindEventHandlers() {
        // Make sure event handlers have the correct context
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onSubmitResponse = this.onSubmitResponse.bind(this);
    }

    onChangeHandler(event) {
        event.preventDefault();
        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    }

    onSubmitHandler(event) {
        event.preventDefault();
        this.setState({submitDisabled: true});
         create(this.state.projectname, this.state.description, this.onSubmitResponse);
      //console.log(this.state.projectname, this.state.description, this.onSubmitResponse);
    }
     onSubmitResponse(response) {
        if (response === true) {
            // Navigate away from login page
            this.context.router.push('/projects');
        } else {
            // Something went wrong, let the user try again
            this.setState({submitDisabled: true});
        }
    }
    render() {
        if (!sessionStorage.getItem('username')) {
            this.context.router.push("/");
            return null;
        } else {
            return ( <div className='content-mid'>
                    <h1>Create Project</h1>
                    <CreateForm
                        projectname={this.state.projectname}
                        description={this.state.description}
                        onChange={this.onChangeHandler}
                        onSubmit={this.onSubmitHandler}
                        inputDisabled={this.state.inputDisabled}
                    />
                </div>
            )
        }
    }
}
CreatePage.contextTypes = {
    router: React.PropTypes.object
};