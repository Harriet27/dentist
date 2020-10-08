import {
    THURSDAY_START,
    THURSDAY_SUCCESS,
    THURSDAY_INPUT,
    THURSDAY_FAILED,
} from '../Cases';

const INITIAL_STATE = {
    thursdayList: [],
    thursdayInput: [],
    loading: false,
};

export const thursdayReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case THURSDAY_START:
            return {
                ...state,
                loading: true,
            };
        case THURSDAY_SUCCESS:
            return {
                ...state,
                thursdayList: action.payload,
                loading: false,
            };
        case THURSDAY_INPUT:
            return {
                ...state,
                thursdayInput: action.payload,
                loading: false,
            };
        case THURSDAY_FAILED:
            return {
                ...state,
                loading: false,
            };
        default: return state;
    };
};
