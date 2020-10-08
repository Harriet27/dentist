import Axios from 'axios';
import { API_URL } from '../../Support/API_URL';
import {
    FRIDAY_START,
    FRIDAY_SUCCESS,
    FRIDAY_INPUT,
    FRIDAY_FAILED,
} from '../Cases';

export const getFriday = () => {
    return async dispatch => {
        dispatch({
            type: FRIDAY_START,
        });
        try {
            let res = await Axios.get(`${API_URL}/friday/get`);
            dispatch({
                type: FRIDAY_SUCCESS,
                payload: res.data.data,
            });
        } catch {
            dispatch({
                type: FRIDAY_FAILED,
            });
        }
    };
};

export const createFriday = (id, form) => {
    return async dispatch => {
        dispatch({
            type: FRIDAY_START,
        });
        try {
            let res = await Axios.post(`${API_URL}/friday/create-meet/${id}`, form);
            dispatch({
                type: FRIDAY_INPUT,
                payload: res.data.data,
            });
        } catch {
            dispatch({
                type: FRIDAY_FAILED,
            });
        }
    };
};

export const clearFriday = (id) => {
    return async dispatch => {
        dispatch({
            type: FRIDAY_START,
        });
        try {
            let res = await Axios.delete(`${API_URL}/friday/clear-meet/${id}`);
            dispatch({
                type: FRIDAY_SUCCESS,
                payload: res.data.data,
            });
        } catch {
            dispatch({
                type: FRIDAY_FAILED,
            });
        }
    };
};
