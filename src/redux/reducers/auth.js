
const initState = {};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {...state, ...action.payload, error: false};
        case 'LOGIN_ERROR':
            return {...state, ...action.payload, error: true};
        case 'REGISTER_SUCCESS':
            return {...state, ...action.payload, error: false};
        case 'LOGOUT_SUCCESS':
            return {};
        default:
            return state;
    }
};

export default authReducer;
  