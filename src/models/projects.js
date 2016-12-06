import * as requester from './requester';

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
            callback(true)
            });
}

function edit() {
    
}

export {
    loadProjects,
    create,
    edit
};