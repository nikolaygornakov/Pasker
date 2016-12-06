import * as requester from './requester';

function create(p_id, date, location, callback) {
    let taskData = {
        "p_id": p_id,
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



function loadTasks(p_id, callback) {
    // Request teams from db
    get('appdata', `tasks/?query={"p_id": "${p_id}"}`, 'kinvey')
        .then(callback);
}

function loadTaskInfo(t_id, onTaskSuccess) {
    get('appdata', 'tasks/' + t_id, 'kinvey')
        .then(onTeamSuccess);
}

function loadTaskPriority(t_id, onPrioritySuccess) {
    get('user', `?query={"t_id": "${t_id}"}`, 'kinvey')
        .then(onUsersSuccess);
}

export {
    create,
    edit,
    loadTasks,
    loadTaskInfo,
    loadTaskPriority
};