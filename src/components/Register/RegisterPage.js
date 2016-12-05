import React, { Component } from 'react';
import RegisterForm from './RegisterForm';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
            inputDisabled: false
        };

        this.bindEventHandlers();
    }

    bindEventHandlers() {
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onRegisterSuccess = this.onRegisterSuccess.bind(this);
    }

    onChangeHandler(event) {
        event.preventDefault();
        let newState = {};
        newState[event.target.name] = event.target.value;

        this.setState(newState);
    }

    onSubmitHandler(event) {
        event.preventDefault();
        this.setState({
            inputDisabled: true
        });

        if (this.state.username !== this.state.password) {
            this.setState({
                inputDisabled: true
            });
        } else {
        }

    }

    onRegisterSuccess(result){
        this.setState({
            inputDisabled: false
        });
        this.context.router.push("/");
    }

    render() {
        if (sessionStorage.getItem('username')) {
            this.context.router.push("/");
        }
        return (
            <div className='content-mid'>
                <h1>Sign Up</h1>
                <RegisterForm
                    username={this.state.username}
                    password={this.state.password}
                    confirmPassword={this.state.confirmPassword}
                    onChange={this.onChangeHandler}
                    onSubmit={this.onSubmitHandler}
                    inputDisabled={this.state.inputDisabled}
                />
            </div>
        );
    }
}

Register.contextTypes = {
    router: React.PropTypes.object
};

export default Register;