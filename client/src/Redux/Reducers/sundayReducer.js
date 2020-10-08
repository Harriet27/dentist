import {
    SUNDAY_START,
    SUNDAY_SUCCESS,
    SUNDAY_INPUT,
    SUNDAY_FAILED,
} from '../Cases';

const INITIAL_STATE = {
    sundayList: [],
    sundayInput: [],
    loading: false,
};

export const sundayReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SUNDAY_START:
            return {
                ...state,
                loading: true,
            };
        case SUNDAY_SUCCESS:
            return {
                ...state,
                sundayList: action.payload,
                loading: false,
            };
        case SUNDAY_INPUT:
            return {
                ...state,
                sundayInput: action.payload,
                loading: false,
            };
        case SUNDAY_FAILED:
            return {
                ...state,
                loading: false,
            };
        default: return state;
    };
};
