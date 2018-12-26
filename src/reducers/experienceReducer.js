import { GET_EXPERIENCES } from '../actions/types';

const initialState = {
  experiences: [],
  experience: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_EXPERIENCES:
      return {
        ...state,
        experiences: action.payload
      };
    default:
      return state;
  }
}
