import types from './types';
import axios from 'axios';

const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=c118demouser';

export function getList(){
    const response = axios.get(`${BASE_URL}/todos${API_KEY}`);

    return {
        type: types.GET_LIST_DATA,
        payload: response
    }
}

export function addNewItem(item){
    const response = axios.post(`${BASE_URL}/todos${API_KEY}`, item);

    return {
        type: types.ADD_ITEM,
        payload: response
    }
}

export function getSingleItem(id){
    const response = axios.get(`${BASE_URL}/todos/${id + API_KEY}`);

    return {
        type: types.GET_SINGLE_ITEM,
        payload: response
    }
}

export function deleteItem(id){
    const response = axios.delete(`${BASE_URL}/todos/${id + API_KEY}`);

    return {
        type: types.DELETE_SINGLE_ITEM,
        payload: response
    }
}

export function toggleComplete(id){
    const response = axios.put(`${BASE_URL}/todos/${id + API_KEY}`);

    return {
        type: types.TOGGLE_COMPLETE,
        payload: response
    }
}

//delete Item:
//axios.delete(`${BASE_URL}/todos/${id + API_KEY}`);

//Toggle Complete:
//axios.put(`${BASE_URL}/todos/${id + API_KEY}`);

//WHEN WORKING ON THIS:
//make new branches and delete them as you add new features