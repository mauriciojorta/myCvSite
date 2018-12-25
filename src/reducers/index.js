import { combineReducers } from 'redux';

import experienceReducer from './experienceReducer';

export default combineReducers({
  experience: experienceReducer
});
