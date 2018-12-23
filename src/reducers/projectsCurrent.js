import * as types from './../const/ActionTypes';
import callApi from './../utils/callApi';

var initialState = [];
callApi('slide_home','GET',null).then( response => {
    initialState = response.data.data;
});


var myReducer = (state = null , action) => {

    switch (action.type) {
        case types.LIST_PROJECTS_CURRENT:
            return state;
        default: return state;
    }
};
export default myReducer;