import * as requester from './requester';

function create(name, description, callback) {
    let projectData = {
        "projectname": name,
        "descritpion": description
    };

    requester.post('appdata', 'projects', 'kinvey', projectData)
        .then((response) => {
            callback(true)
            });
}

export {create};