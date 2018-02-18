import _ from 'lodash';

const getQuery = (params) => {
    params = _.pickBy(params, _.identity);
    let keyArr = Object.keys(params);
    let query = `${params.type}?`;
    keyArr.splice(keyArr.indexOf('type'), 1);
    for(let i in keyArr){
        query = `${query}${keyArr[i]}=${params[keyArr[i]]}&`;
    }
    query = query.substring(0, query.length - 1);
    //console.log(query);
    return query;
}

export default getQuery;