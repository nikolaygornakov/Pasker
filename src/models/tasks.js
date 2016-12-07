import * as requester from './requester';

function create(p_id, task, date, location, callback) {
    let taskData = {
        "p_id": p_id,
        "task": task,
        "date": date,
        "location":location,

    };

    requester.post('appdata', 'tasks', 'kinvey', taskData)
        .then((response) => {
            callback(true)
            });
}

function edit(taskid, p_id, date, location, callback) {
    let taskData = {
        "p_id": p_id,
        "date": date,
        "location":location,

    };

    requester.post('appdata', 'tasks/'+taskid, 'kinvey', taskData)
        .then((response) => {
            callback(true)
            });
}



function loadProject(p_id, callback) {
    // Request teams from db
    requester.get('appdata', `projects/${p_id}`, 'kinvey')
        .then(callback);
}

function loadTasks(p_id, callback) {
    // Request teams from db
    requester.get('appdata', `tasks/?query={"p_id": "${p_id}"}`, 'kinvey')
        .then(callback);
}

function loadTaskPriority(t_id, onPrioritySuccess) {
    requester.get('user', `?query={"t_id": "${t_id}"}`, 'kinvey')
        .then(onPrioritySuccess);
}

export {
    create,
    edit,
    loadProject,
    loadTasks,
    loadTaskPriority
};