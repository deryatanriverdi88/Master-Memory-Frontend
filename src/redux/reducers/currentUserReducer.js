export default (state = {user:{}, errors: [] }, {type, payload}) => {
    switch (type){
        case 'SET_USER':
            return {...state, user: payload, errors: []};
        case 'CLEAR_USER':
            return {};
        case "SET_ERROR":
            return {...state, errors:payload}
        default:
            return state;
    }
}