import React, { Component } from 'react';
import {Link } from 'react-router';
import Logo from '../public/logo.png'
import Header from './components/Shared/Header';
import observer from './models/observer';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            username: ''
        };
        this.onSessionUpdate = this.onSessionUpdate.bind(this);
        observer.onSessionUpdate = this.onSessionUpdate.bind(this);
    }

    componentDidMount() {
        this.onSessionUpdate();
    }

    onSessionUpdate() {
        let name = sessionStorage.getItem("username");
        if (name) {
            this.setState({
                loggedIn: true,
                username: sessionStorage.getItem("username")
            });
        } else {
            this.setState({
                loggedIn: false,
                username: ''
            });
        }
    }

    render() {
        if (this.state.loggedIn) {
            return (
                <div className="container">
                    <Header>
                        <nav className="navbar navbar-inverse ">
                            <a href="#" className="navbar-brand"> <img className="logo-data" alt="Brand" height="80" src={Logo} width="80"/></a>
                            <ul className="nav navbar-nav right-data">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/projects">Projects</Link></li>
                                <li><Link to="/logout">Logout</Link></li>
                            </ul>
                        </nav>
                    </Header>
                    {this.props.children}
                </div>
            );
        } else {
            return (
                <div className="container">
                    <Header>
                        <nav className="navbar navbar-inverse ">
                            <a href="#" className="navbar-brand"> <img className="logo-data" alt="Brand" height="80" src={Logo} width="80"/></a>
                            <ul className="nav navbar-nav right-data">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/login">Login</Link></li>
                                <li><Link to="/register">Register</Link></li>
                                <li><Link to="/create">Create</Link></li>
                            </ul>
                        </nav>
                    </Header>
                    {this.props.children}
                </div>
            );
        }
    }
}

export default App;