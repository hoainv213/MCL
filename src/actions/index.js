import * as types from './../const/ActionTypes';
import callApi from '../utils/callApi';


export const fetchCurrentProjects = () => {
    return dispatch => {
        return callApi('slide_home','GET').then(res =>{
            dispatch(actionFetchCurrentProjects(res.data));
        });
    }

};
export const actionFetchCurrentProjects = (currentProjects) => {
    return{
        type: types.LIST_PROJECTS_CURRENT,
        ...currentProjects
    }
};

export const fetchLinkSection = () =>{
    return dispatch => {
        return callApi('links','GET').then(res=>{
            dispatch(actionFetchLinkSection(res.data));
        });
    }
};

export const actionFetchLinkSection = (linkSection) =>{
    return{
        type: types.LINK_SECTION,
        ...linkSection
    }
};

export const fetchMenu = () =>{
    return dispatch =>{
        return callApi('menu','GET').then(res=>{
            dispatch(actionMenu(res.data));
        })
    }
};

export const actionMenu = (menu) =>{
    return{
        type: types.MENU,
        ...menu
    }
};

export const fetchFilterMasterpieces = () =>{
    return dispatch =>{
        return callApi('properties-project','GET').then(res=>{
            dispatch(actionFilterMasterpieces(res.data));
        })
    }
};

export const actionFilterMasterpieces = (masterpieces) =>{
    return{
        type: types.FILTER_MASTERPIECES,
        ...masterpieces
    }
};