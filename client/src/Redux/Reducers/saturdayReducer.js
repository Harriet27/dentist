import {
    SATURDAY_START,
    SATURDAY_SUCCESS,
    SATURDAY_INPUT,
    SATURDAY_FAILED,
} from '../Cases';

const INITIAL_STATE = {
    saturdayList: [],
    saturdayInput: [],
    loading: false,
};

export const saturdayReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SATURDAY_START:
            return {
                ...state,
                loading: true,
            };
        case SATURDAY_SUCCESS:
            return {
                ...state,
                saturdayList: action.payload,
                loading: false,
            };
        case SATURDAY_INPUT:
            return {
                ...state,
                saturdayInput: action.payload,
                loading: false,
            };
        case SATURDAY_FAILED:
            return {
                ...state,
                loading: false,
            };
        default: return state;
    };
};
