import Axios from 'axios';
import { API_URL } from '../../Support/API_URL';
import {
    WEDNESDAY_START,
    WEDNESDAY_SUCCESS,
    WEDNESDAY_INPUT,
    WEDNESDAY_FAILED,
} from '../Cases';

export const getWednesday = () => {
    return async dispatch => {
        dispatch({
            type: WEDNESDAY_START,
        });
        try {
            let res = await Axios.get(`${API_URL}/wednesday/get`);
            dispatch({
                type: WEDNESDAY_SUCCESS,
                payload: res.data.data,
            });
        } catch {
            dispatch({
                type: WEDNESDAY_FAILED,
            });
        }
    };
};

export const createWednesday = (id, form) => {
    return async dispatch => {
        dispatch({
            type: WEDNESDAY_START,
        });
        try {
            let res = await Axios.post(`${API_URL}/wednesday/create-meet/${id}`, form);
            dispatch({
                type: WEDNESDAY_INPUT,
                payload: res.data.data,
            });
        } catch {
            dispatch({
                type: WEDNESDAY_FAILED,
            });
        }
    };
};

export const clearWednesday = (id) => {
    return async dispatch => {
        dispatch({
            type: WEDNESDAY_START,
        });
        try {
            let res = await Axios.delete(`${API_URL}/wednesday/clear-meet/${id}`);
            dispatch({
                type: WEDNESDAY_SUCCESS,
                payload: res.data.data,
            });
        } catch {
            dispatch({
                type: WEDNESDAY_FAILED,
            });
        }
    };
};
