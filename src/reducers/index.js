import { combineReducers } from 'redux';
import projectsCurrent from './projectsCurrent';
import linkSection from './linkSection';
import menu from './menu';
import filterMasterpieces from './filterMasterpieces';

const myReducer = combineReducers({
    projectsCurrent : projectsCurrent,
    linkSection     : linkSection,
    menu            : menu,
    filterMasterpieces : filterMasterpieces
});
export default myReducer;