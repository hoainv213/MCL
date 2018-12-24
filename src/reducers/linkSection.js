import * as Types from './../const/ActionTypes'


let initialState = [];

var myReducer = (state = initialState , action) => {

    switch (action.type) {
        case Types.LINK_SECTION:
            state = action.data;
            return [...state];
        default:
            return [...state];
    }
};
export default myReducer;