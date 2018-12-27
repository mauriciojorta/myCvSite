import { GET_EXPERIENCES } from './types';
import axios from 'axios';

export const getExperiences = () => async dispatch => {
  console.log('Flag');
  const res = await axios.get('collections/experienceList.json');

  dispatch({
    type: GET_EXPERIENCES,
    payload: res.data
  });
};
