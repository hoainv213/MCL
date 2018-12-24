import { combineReducers } from 'redux';
import projectsCurrent from './projectsCurrent';
import linkSection from './linkSection';
import menu from './menu';

const myReducer = combineReducers({
    projectsCurrent : projectsCurrent,
    linkSection     : linkSection,
    menu            : menu,
});
export default myReducer;