import * as Types from './../const/ActionTypes'


let initialState = [];

var myReducer = (state = initialState , action) => {

    switch (action.type) {
        case Types.MENU:
            state = action.data;
            return [...state];
        default:
            return [...state];
    }
};
export default myReducer;