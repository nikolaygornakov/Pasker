import React, { Component } from 'react';

export default class RegisterForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <div className="form-group">
                    <label>
                        Username:
                    </label>
                    <input
                        type="text"
                        name="username"
                        value={this.props.username}
                        onChange={this.props.onChange}
                        className="form-control"
                        disabled={this.props.inputDisabled}
                    />
                </div>
                <div className="form-group">
                    <label>
                        Password:
                    </label>
                    <input
                        type="password"
                        name="password"
                        value={this.props.password}
                        onChange={this.props.onChange}
                        className="form-control"
                        disabled={this.props.inputDisabled}
                    />
                </div>
                <div className="form-group">
                    <label>
                        Re-enter password:
                    </label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={this.props.confirmPassword}
                        onChange={this.props.onChange}
                        className="form-control"
                        disabled={this.props.inputDisabled}
                    />
                </div>

                <input
                    type="submit"
                    name="btnRegister"
                    value="Register"
                    className="btn btn-default"
                    disabled={this.props.inputDisabled}
                />
            </form>
        );
    }
}