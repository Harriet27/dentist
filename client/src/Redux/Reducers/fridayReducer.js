import {
    FRIDAY_START,
    FRIDAY_SUCCESS,
    FRIDAY_INPUT,
    FRIDAY_FAILED,
} from '../Cases';

const INITIAL_STATE = {
    fridayList: [],
    fridayInput: [],
    loading: false,
};

export const fridayReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FRIDAY_START:
            return {
                ...state,
                loading: true,
            };
        case FRIDAY_SUCCESS:
            return {
                ...state,
                fridayList: action.payload,
                loading: false,
            };
        case FRIDAY_INPUT:
            return {
                ...state,
                fridayInput: action.payload,
                loading: false,
            };
        case FRIDAY_FAILED:
            return {
                ...state,
                loading: false,
            };
        default: return state;
    };
};
