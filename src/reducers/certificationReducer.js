import { GET_CERTIFICATIONS } from '../actions/types';

const initialState = {
  certifications: [],
  certification: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CERTIFICATIONS:
      return {
        ...state,
        certifications: action.payload
      };
    default:
      return state;
  }
}
