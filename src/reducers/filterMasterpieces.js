import * as Types from './../const/ActionTypes'


let initialState = {};

let myReducer = (state = initialState , action) => {

    switch (action.type) {
        case Types.FILTER_MASTERPIECES:
            state = {...action.data};
            return state;
        default:
            return state;
    }
};
export default myReducer;