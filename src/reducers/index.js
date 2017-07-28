import * as consts from '../actions/constans';
const initialState = {
    counter: 0
};

function appReducer(state = initialState, action) {
    switch(action.type) {
        case consts.INC:
            return {
                ...state,
                counter: state.counter + 1
            }
        case consts.DEC:
            return {
                ...state,
                counter: state.counter - 1
            }
        default:
            return state;
    }
}

export default appReducer;