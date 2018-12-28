import { combineReducers } from 'redux';

import experienceReducer from './experienceReducer';
import educationReducer from './educationReducer';
import certificationReducer from './certificationReducer';
import projectReducer from './projectReducer';

export default combineReducers({
  experience: experienceReducer,
  education: educationReducer,
  certification: certificationReducer,
  project: projectReducer
});
