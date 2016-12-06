import * as requester from './requester';
import observer from './observer';


function saveSession(userInfo) {
    let userAuth = userInfo._kmd.authtoken;
    sessionStorage.setItem('authToken', userAuth);
    let userId = userInfo._id;
    sessionStorage.setItem('userId', userId);
    let username = userInfo.username;
    sessionStorage.setItem('username', username);

    observer.onSessionUpdate();
}

// User login
function login(username, password, callback) {
    let userData = {
        username,
        password
    };

    requester.post('user', 'login', 'basic', userData)
        .then(loginSuccess);

    function loginSuccess(userInfo) {
        saveSession(userInfo);
        callback(true);
    }
}

// User register
function register(username, password, callback) {
    let userData = {
        username,
        password
    };

    requester.post('user', '', 'basic', userData)
        .then(registerSuccess);

    function registerSuccess(userInfo) {
        observer.showSuccess('Successful registration.');
        saveSession(userInfo);
        callback(true);
    }
}

// User logout
function logout(callback) {
    requester.post('user', '_logout', 'kinvey', null)
        .then(logoutSuccess);


    function logoutSuccess(response) {
        sessionStorage.clear();
        observer.onSessionUpdate();
        callback(true);
    }
}

export {
    login,
    register,
    logout
}