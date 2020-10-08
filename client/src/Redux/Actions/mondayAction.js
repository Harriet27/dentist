import Axios from 'axios';
import { API_URL } from '../../Support/API_URL';
import {
    MONDAY_START,
    MONDAY_SUCCESS,
    MONDAY_INPUT,
    MONDAY_FAILED,
} from '../Cases';

export const getMonday = () => {
    return async dispatch => {
        dispatch({
            type: MONDAY_START,
        });
        try {
            let res = await Axios.get(`${API_URL}/monday/get`);
            dispatch({
                type: MONDAY_SUCCESS,
                payload: res.data.data,
            });
        } catch {
            dispatch({
                type: MONDAY_FAILED,
            });
        }
    };
};

export const createMonday = (id, form) => {
    return async dispatch => {
        dispatch({
            type: MONDAY_START,
        });
        try {
            let res = await Axios.post(`${API_URL}/monday/create-meet/${id}`, form);
            dispatch({
                type: MONDAY_INPUT,
                payload: res.data.data,
            });
        } catch {
            dispatch({
                type: MONDAY_FAILED,
            });
        }
    };
};

export const clearMonday = (id) => {
    return async dispatch => {
        dispatch({
            type: MONDAY_START,
        });
        try {
            let res = await Axios.delete(`${API_URL}/monday/clear-meet/${id}`);
            dispatch({
                type: MONDAY_SUCCESS,
                payload: res.data.data,
            });
        } catch {
            dispatch({
                type: MONDAY_FAILED,
            });
        }
    };
};
