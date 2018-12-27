import { GET_EDUCATIONS } from '../actions/types';

const initialState = {
  educations: [],
  education: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_EDUCATIONS:
      return {
        ...state,
        educations: action.payload
      };
    default:
      return state;
  }
}
