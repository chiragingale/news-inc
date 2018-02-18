import axios from 'axios';

export const getApi = url => {
    return new Promise((resolve, reject) => {
        axios.get(url)
        .then(res => resolve(res))
        .catch(err => reject(err))
    });
}

export const postApi = (url, data) => {
    return new Promise((resolve, reject) => {
        axios.post(url, data)
        .then(res => resolve(res))
        .catch(err => reject(err))
    })
}