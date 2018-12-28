import { GET_EXPERIENCES, GET_EDUCATIONS, GET_CERTIFICATIONS } from './types';
import axios from 'axios';

export const getExperiences = () => async dispatch => {
  console.log('Flag');
  const res = await axios.get('collections/experienceList.json');

  dispatch({
    type: GET_EXPERIENCES,
    payload: res.data
  });
};

export const getEducations = () => async dispatch => {
  console.log('Flag');
  const res = await axios.get('collections/educationList.json');

  dispatch({
    type: GET_EDUCATIONS,
    payload: res.data
  });
};

export const getCertifications = () => async dispatch => {
  console.log('Flag');
  const res = await axios.get('collections/certificationList.json');

  dispatch({
    type: GET_CERTIFICATIONS,
    payload: res.data
  });
};
