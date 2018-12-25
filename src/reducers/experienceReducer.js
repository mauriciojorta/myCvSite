import { GET_EXPERIENCE } from '../actions/types';

const initialState = {
  experiences: [],
  experience: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_EXPERIENCE:
      return {
        ...state,
        experience: action.payload
      };
    default:
      return state;
  }
}
