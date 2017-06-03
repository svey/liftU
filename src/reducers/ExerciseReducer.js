import {
  EXERCISES_FETCH_SUCCESS
} from '../actions/types';

const initialState = { routine: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case EXERCISES_FETCH_SUCCESS:
      return { ...state, routine: action.payload };
    default:
      return state;
  }
};
