import { getApi } from '../utils/api';
import { apikey, apiurl } from '../utils/conf';

export const getList = urlQuery => {
    return dispatch => {
        let url = `${apiurl}${urlQuery}&apiKey=${apikey}`;
        getApi(url)
        .then(res => {
            dispatch({type: 'ListReceived', payload: res.data});
        })
        .catch(err => {
            console.log('error in getting list', err);
            alert('error in getting content', err);
        })
    }
}