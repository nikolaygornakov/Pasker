import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Home from './components/Home/HomePage';
import ProjectPage from './components/Project/ProjectPage';
import Login from './components/Login/LoginPage';
import Register from './components/Register/RegisterPage';
import Logout from './components/Logout/Logout';
import Create from './components/Create/CreatePage'
import ProjectTasks from './components/Tasks/ProjectTasksPage'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import { Router, browserHistory } from 'react-router';
import { Route, IndexRoute } from 'react-router';

// Index route for adding home page link view
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/projects">
                <IndexRoute component={ProjectPage}/>
                <Route path=":p_id" component={ProjectTasks}/>
            </Route>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/logout" component={Logout}/>
            <Route path="/create" component={Create}/>
        </Route>
    </Router>,
    document.getElementById('root')
);