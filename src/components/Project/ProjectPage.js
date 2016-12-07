import React, {Component} from 'react';
import Project from './Project';
import { loadProjects } from '../../models/projects';
//import observer from '../../models/observer';

export default class ProjectPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            projects: []
        };

        this.onLoadSuccess = this.onLoadSuccess.bind(this);
    }

    componentDidMount() {
        if (sessionStorage.getItem('username')) {
            loadProjects(this.onLoadSuccess);
        }
    }

    onLoadSuccess(response) {
        this.setState({projects: response});
    }

    render() {
        if (!sessionStorage.getItem('username')) {
            this.context.router.push("/");
        }
        return (
            <div >
                <h1 className='content-mid'>P R O J E C T S</h1>
                {this.state.projects.map((p, i) => {

                    return (
                        <Project key={i} id={p._id} projectname={p.projectname} description={p.description}/>

                    )
                })}

            </div>
        )
    }
}

ProjectPage.contextTypes = {
    router: React.PropTypes.object
};