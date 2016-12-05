import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Home from './components/Home/HomePage';
import Project from './components/Project/Project';
import Login from './components/Login/LoginPage';
import Register from './components/Register/RegisterPage';
import Logout from './components/Logout/Logout';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import { Router, browserHistory } from 'react-router';
import { Route, IndexRoute } from 'react-router';

// Index route for adding home page link view
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/projects" component={Project}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/logout" component={Logout}></Route>
        </Route>
    </Router>,
    document.getElementById('root')
);