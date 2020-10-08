import {
    TUESDAY_START,
    TUESDAY_SUCCESS,
    TUESDAY_INPUT,
    TUESDAY_FAILED,
} from '../Cases';

const INITIAL_STATE = {
    tuesdayList: [],
    tuesdayInput: [],
    loading: false,
};

export const tuesdayReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TUESDAY_START:
            return {
                ...state,
                loading: true,
            };
        case TUESDAY_SUCCESS:
            return {
                ...state,
                tuesdayList: action.payload,
                loading: false,
            };
        case TUESDAY_INPUT:
            return {
                ...state,
                tuesdayInput: action.payload,
                loading: false,
            };
        case TUESDAY_FAILED:
            return {
                ...state,
                loading: false,
            };
        default: return state;
    };
};
