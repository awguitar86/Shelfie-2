const axios = require('axios');
const baseURL = '/api';

function postBin (id, body) {
    return axios
        .post(baseURL + `/bins/${id}`, body)
        .then ( res => res);
}

function getShelfList() {
    return axios
        .get( baseURL + `/get_shelves`)
        .then( shelfList => shelfList.data);
}

function getBinList(id) {
    return axios
        .get( baseURL + `/shelf/${id}`)
        .then( binList => binList.data );
}

function getBin(id) {
    return axios
        .get( baseURL + `/bins/${id}`)
        .then( bin => bin.data[0]);
}

function updateBin(id, body) {
    return axios
        .put( baseURL + `/bin/${id}`, body)
        .then( res => res);
}

function deleteBin(id) {
    return axios
        .delete( baseURL + `/bin/${id}`)
        .then( res => res );
}

export {
    postBin,
    getShelfList,
    getBinList,
    getBin,
    updateBin,
    deleteBin,
}