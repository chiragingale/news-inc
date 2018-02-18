const getListReducer = (state = {listData: [], listReceived: false}, action) => {
    switch(action.type) {
        case 'ListReceived':
        state = {
            ...state,
            listData: action.payload.articles,
            listReceived: true
        }
        break;
        default: 
        break;
    }
    return state;
}

export default getListReducer;