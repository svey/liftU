import {
  EXERCISES_FETCH_SUCCESS,
  EXERCISE_SELECT,
  EXERCISE_DESELECT
} from '../actions/types';

const initialState = { routine: [], exercise: '', modalVisible: false };

export default (state = initialState, action) => {
  switch (action.type) {
    case EXERCISES_FETCH_SUCCESS:
      return { ...state, routine: action.payload };
    case EXERCISE_SELECT:
      return { ...state, exercise: action.payload, modalVisible: true };
    case EXERCISE_DESELECT:
      return { ...state, exercise: '', modalVisible: false };
    default:
      return state;
  }
};
