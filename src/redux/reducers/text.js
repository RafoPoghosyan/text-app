
const textReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TEXT':
            return [
                ...state,
                action.data
            ]
        default:
            return state
    }
}

export default textReducer