import React, { Component } from 'react';
import {Link } from 'react-router';
import Logo from '../public/logo.png'
import Header from './components/Shared/Header';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="container">
                <Header>
                
                <nav className="navbar navbar-inverse ">
                <a href="#" className="navbar-brand logo-data"> <img alt="Brand" height="80" src={Logo} width="80"/></a>
                <ul className="nav navbar-nav right-data">
                   <li> <Link to="/">Home</Link> </li>
                   <li> <Link to="/projects">Projects</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                    </ul>
                    </nav>
                </Header>
                {this.props.children}
            </div>
        );
    }
}

export default App;