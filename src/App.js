import React, { Component } from 'react';
import {Link } from 'react-router';

import Header from './components/Header';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="container">
                <Header>
                    <Link to="/" className="btn btn-default">Home</Link>
                    <Link to="/projects" className="btn btn-default">Projects</Link>
                    <Link to="/login" className="btn btn-default">Login</Link>
                    <Link to="/register" className="btn btn-default">Register</Link>
                    <Link to="/logout" className="btn btn-default">Logout</Link>
                </Header>
                {this.props.children}
            </div>
        );
    }
}

export default App;