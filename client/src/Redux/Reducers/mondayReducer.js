import {
    MONDAY_START,
    MONDAY_SUCCESS,
    MONDAY_INPUT,
    MONDAY_FAILED,
} from '../Cases';

const INITIAL_STATE = {
    mondayList: [],
    mondayInput: [],
    loading: false,
};

export const mondayReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MONDAY_START:
            return {
                ...state,
                loading: true,
            };
        case MONDAY_SUCCESS:
            return {
                ...state,
                mondayList: action.payload,
                loading: false,
            };
        case MONDAY_INPUT:
            return {
                ...state,
                mondayInput: action.payload,
                loading: false,
            };
        case MONDAY_FAILED:
            return {
                ...state,
                loading: false,
            };
        default: return state;
    }
};
