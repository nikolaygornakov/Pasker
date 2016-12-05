import $ from 'jquery';

const baseUrl = "https://baas.kinvey.com/";
const appId = "kid_HybBLfXme";
const appSecret = "08687a3bfb3d4909943827381ed77558";

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
        contentType: 'application/json',
        data: JSON.stringify(data)
    });
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
    post
}