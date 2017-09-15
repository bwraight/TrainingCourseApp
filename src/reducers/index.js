import { combineReducers } from 'redux';
import courses from './courseReducer';
import numAjaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  numAjaxCallsInProgress
});

export default rootReducer;
