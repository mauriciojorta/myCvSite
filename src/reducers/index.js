import { combineReducers } from 'redux';

import experienceReducer from './experienceReducer';
import educationReducer from './educationReducer';

export default combineReducers({
  experience: experienceReducer,
  education: educationReducer
});
