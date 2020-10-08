import Axios from 'axios';
import { API_URL } from '../../Support/API_URL';
import {
    TUESDAY_START,
    TUESDAY_SUCCESS,
    TUESDAY_INPUT,
    TUESDAY_FAILED,
} from '../Cases';

export const getTuesday = () => {
    return async dispatch => {
        dispatch({
            type: TUESDAY_START,
        });
        try {
            let res = await Axios.get(`${API_URL}/tuesday/get`);
            dispatch({
                type: TUESDAY_SUCCESS,
                payload: res.data.data,
            });
        } catch {
            dispatch({
                type: TUESDAY_FAILED,
            });
        }
    };
};

export const createTuesday = (id, form) => {
    return async dispatch => {
        dispatch({
            type: TUESDAY_START,
        });
        try {
            let res = await Axios.post(`${API_URL}/tuesday/create-meet/${id}`, form);
            dispatch({
                type: TUESDAY_INPUT,
                payload: res.data.data,
            });
        } catch {
            dispatch({
                type: TUESDAY_FAILED,
            });
        }
    };
};

export const clearTuesday = (id) => {
    return async dispatch => {
        dispatch({
            type: TUESDAY_START,
        });
        try {
            let res = await Axios.delete(`${API_URL}/tuesday/clear-meet/${id}`);
            dispatch({
                type: TUESDAY_SUCCESS,
                payload: res.data.data,
            });
        } catch {
            dispatch({
                type: TUESDAY_FAILED,
            });
        }
    };
};
