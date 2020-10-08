import {
    WEDNESDAY_START,
    WEDNESDAY_SUCCESS,
    WEDNESDAY_INPUT,
    WEDNESDAY_FAILED,
} from '../Cases';

const INITIAL_STATE = {
    wednesdayList: [],
    wednesdayInput: [],
    loading: false,
};

export const wednesdayReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case WEDNESDAY_START:
            return {
                ...state,
                loading: true,
            };
        case WEDNESDAY_SUCCESS:
            return {
                ...state,
                wednesdayList: action.payload,
                loading: false,
            };
        case WEDNESDAY_INPUT:
            return {
                ...state,
                wednesdayInput: action.payload,
                loading: false,
            };
        case WEDNESDAY_FAILED:
            return {
                ...state,
                loading: false,
            };
        default: return state;
    };
};
