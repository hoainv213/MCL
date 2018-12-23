import { combineReducers } from 'redux';
import projectsCurrent from './projectsCurrent';

const myReducer = combineReducers({
    projects: projectsCurrent
});
export default myReducer;