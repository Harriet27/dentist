import Axios from 'axios';
import { API_URL } from '../../Support/API_URL';
import {
    SATURDAY_START,
    SATURDAY_SUCCESS,
    SATURDAY_INPUT,
    SATURDAY_FAILED,
} from '../Cases';

export const getSaturday = () => {
    return async dispatch => {
        dispatch({
            type: SATURDAY_START,
        });
        try {
            let res = await Axios.get(`${API_URL}/saturday/get`);
            dispatch({
                type: SATURDAY_SUCCESS,
                payload: res.data.data,
            });
        } catch {
            dispatch({
                type: SATURDAY_FAILED,
            });
        }
    };
};

export const createSaturday = (id, form) => {
    return async dispatch => {
        dispatch({
            type: SATURDAY_START,
        });
        try {
            let res = await Axios.post(`${API_URL}/saturday/create-meet/${id}`, form);
            dispatch({
                type: SATURDAY_INPUT,
                payload: res.data.data,
            });
        } catch {
            dispatch({
                type: SATURDAY_FAILED,
            });
        }
    };
};

export const clearSaturday = (id) => {
    return async dispatch => {
        dispatch({
            type: SATURDAY_START,
        });
        try {
            let res = await Axios.delete(`${API_URL}/saturday/clear-meet/${id}`);
            dispatch({
                type: SATURDAY_SUCCESS,
                payload: res.data.data,
            });
        } catch {
            dispatch({
                type: SATURDAY_FAILED,
            });
        }
    };
};
