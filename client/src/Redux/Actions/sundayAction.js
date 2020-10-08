import Axios from 'axios';
import { API_URL } from '../../Support/API_URL';
import {
    SUNDAY_START,
    SUNDAY_SUCCESS,
    SUNDAY_INPUT,
    SUNDAY_FAILED,
} from '../Cases';

export const getSunday = () => {
    return async dispatch => {
        dispatch({
            type: SUNDAY_START,
        });
        try {
            let res = await Axios.get(`${API_URL}/sunday/get`);
            dispatch({
                type: SUNDAY_SUCCESS,
                payload: res.data.data,
            });
        } catch {
            dispatch({
                type: SUNDAY_FAILED,
            });
        }
    };
};

export const createSunday = (id, form) => {
    return async dispatch => {
        dispatch({
            type: SUNDAY_START,
        });
        try {
            let res = await Axios.post(`${API_URL}/sunday/create-meet/${id}`, form);
            dispatch({
                type: SUNDAY_INPUT,
                payload: res.data.data,
            });
        } catch {
            dispatch({
                type: SUNDAY_FAILED,
            });
        }
    };
};

export const clearSunday = (id) => {
    return async dispatch => {
        dispatch({
            type: SUNDAY_START,
        });
        try {
            let res = await Axios.delete(`${API_URL}/sunday/clear-meet/${id}`);
            dispatch({
                type: SUNDAY_SUCCESS,
                payload: res.data.data,
            });
        } catch {
            dispatch({
                type: SUNDAY_FAILED,
            });
        }
    };
};
