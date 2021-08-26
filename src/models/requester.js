import $ from 'jquery';

const baseUrl = "https://baas.kinvey.com/";
const appId = "kid_BJK2fGBbF";
const appSecret = "72fb2de302a14ff5b2e986679deab34e";

function get(module, collection, auth) {
    let hostUrl = baseUrl + module + "/" + appId + "/" + collection;
    let headerData = getAuthData(auth);

    return $.ajax({
        method: "GET",
        url: hostUrl,
        headers: headerData
    });
}

function post(module, collection, auth, data) {
    let hostUrl = baseUrl + module + "/" + appId + "/" + collection;
    let headerData = getAuthData(auth);

    return $.ajax({
        method: "POST",
        url: hostUrl,
        headers: headerData,
        data: data
    });
}

function remove(module, taskId, auth) {
    let hostUrl = baseUrl + module + "/" + appId + "/" + taskId;
    let headerData = getAuthData(auth);

    let request = {
        method: "DELETE",
        url: hostUrl,
        headers: headerData
    };

    return $.ajax(request);
}

function getAuthData(auth) {
    let header = { "Authorization" : ''};

    switch (auth) {
        case "basic":
            header['Authorization']="Basic " + btoa(appId + ":" + appSecret);
            break;
        case "kinvey":
            header['Authorization']="Kinvey " + sessionStorage.getItem('authToken');
            break;
        default: break;
    }

    return header;
}

export {
    get,
    post,
    remove
}
