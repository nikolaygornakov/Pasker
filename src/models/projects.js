import * as requester from './requester';
import observer from '../models/observer';

function loadProjects(callback) {
    requester.get('appdata', 'projects', 'kinvey')
        .then(callback);
}

function create(name, description, callback) {
    let projectData = {
        "projectname": name,
        "description": description
    };

    requester.post('appdata', 'projects', 'kinvey', projectData)
        .then((response) => {
            callback(true);
            observer.showSuccess('Project successfully created!');
            });

}

function edit() {
    
}

export {
    loadProjects,
    create,
    edit
};