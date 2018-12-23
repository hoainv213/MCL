import axios from 'axios';
import * as config from './../const/config';

export default function callApi(endpoint, method = 'GET', data) {
    return axios({
        methor: method,
        url: `${config.API_URL}/${endpoint}`,
        data: data
    }).catch(error =>{
        console.log(error)
    });
}