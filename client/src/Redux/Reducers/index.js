import { combineReducers } from 'redux';
import { mondayReducer } from './mondayReducer';
import { tuesdayReducer } from './tuesdayReducer';
import { wednesdayReducer } from './wednesdayReducer';
import { thursdayReducer } from './thursdayReducer';
import { fridayReducer } from './fridayReducer';
import { saturdayReducer } from './saturdayReducer';
import { sundayReducer } from './sundayReducer';

export default combineReducers({
    monday: mondayReducer,
    tuesday: tuesdayReducer,
    wednesday: wednesdayReducer,
    thursday: thursdayReducer,
    friday: fridayReducer,
    saturday: saturdayReducer,
    sunday: sundayReducer,
});
