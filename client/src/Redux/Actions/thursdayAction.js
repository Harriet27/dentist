import Axios from 'axios';
import { API_URL } from '../../Support/API_URL';
import {
    THURSDAY_START,
    THURSDAY_SUCCESS,
    THURSDAY_INPUT,
    THURSDAY_FAILED,
} from '../Cases';

export const getThursday = () => {
    return async dispatch => {
        dispatch({
            type: THURSDAY_START,
        });
        try {
            let res = await Axios.get(`${API_URL}/thursday/get`);
            dispatch({
                type: THURSDAY_SUCCESS,
                payload: res.data.data,
            });
        } catch {
            dispatch({
                type: THURSDAY_FAILED,
            });
        }
    };
};

export const createThursday = (id, form) => {
    return async dispatch => {
        dispatch({
            type: THURSDAY_START,
        });
        try {
            let res = await Axios.post(`${API_URL}/thursday/create-meet/${id}`, form);
            dispatch({
                type: THURSDAY_INPUT,
                payload: res.data.data,
            });
        } catch {
            dispatch({
                type: THURSDAY_FAILED,
            });
        }
    };
};

export const clearThursday = (id) => {
    return async dispatch => {
        dispatch({
            type: THURSDAY_START,
        });
        try {
            let res = await Axios.delete(`${API_URL}/thursday/clear-meet/${id}`);
            dispatch({
                type: THURSDAY_SUCCESS,
                payload: res.data.data,
            });
        } catch {
            dispatch({
                type: THURSDAY_FAILED,
            });
        }
    };
};
