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
        .then(loginSuccess)
        .catch(err);

    function loginSuccess(userInfo) {
        saveSession(userInfo);
        callback(true);
        observer.showSuccess('Login successful.');
    }

    function err(data) {
        callback(false);
        observer.showError('Invalid user data!');
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
        saveSession(userInfo);
        observer.onSessionUpdate();
        callback(true);
        observer.showSuccess('Register successful.');
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
        observer.showSuccess('Logout successful.');
    }
}

export {
    login,
    register,
    logout
}