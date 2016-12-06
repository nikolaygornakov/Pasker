import React, {Component} from 'react';
import Project from './Project';
import { loadProjects } from '../../models/projects';

export default class ProjectPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            projects: []
        };

        this.onLoadSuccess = this.onLoadSuccess.bind(this);
    }

    componentDidMount() {
        loadProjects(this.onLoadSuccess);
    }

    onLoadSuccess(response) {
        this.setState({projects: response});
    }

    render() {
        return (
            <div >
                <h1 className='content-mid'>Projects Page</h1>
                {this.state.projects.map((p, i) => {
                   
                    return (
                        <Project key={i} id={p._id} projectname={p.projectname} description={p.description}/>

                    )
                })}

            </div>
        )
    }
}