export default (state = {user:{}, errors: [] }, {type, payload}) => {
    switch (type){
        case 'SET_USER':
            // console.log(payload)
            return {...state, user: payload, errors: []};
        case 'CLEAR_USER':
            return {};
        case "SET_ERRORS":
            // console.log(payload)
            return {...state, errors:payload}
        default:
            return state;
    }
}