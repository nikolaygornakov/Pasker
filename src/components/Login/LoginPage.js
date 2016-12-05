import React, { Component } from 'react';
import LoginForm from './LoginForm';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            inputDisabled: false
        };

        this.bindEventHandlers();
    }

    bindEventHandlers() {
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onLoginSuccess = this.onLoginSuccess.bind(this);
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
    }

    onLoginSuccess(result){
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
                <h1>Login</h1>
                <LoginForm
                    username={this.state.username}
                    password={this.state.password}
                    onChange={this.onChangeHandler}
                    onSubmit={this.onSubmitHandler}
                    inputDisabled={this.state.inputDisabled}
                />
            </div>
        );
    }
}

Login.contextTypes = {
    router: React.PropTypes.object
};