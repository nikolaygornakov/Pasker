import React, {Component} from 'react';
import CreateForm from './CreateForm'

export default class CreatePage extends Component {
     constructor(props) {
        super(props);
        this.state = {
            projectname: '',
            description: '',
            inputDisabled: false
        };
     }
    render() {
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