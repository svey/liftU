import {
  EXERCISES_FETCH_SUCCESS,
  EXERCISE_SELECT,
  EXERCISE_DESELECT,
  TIMER_UPDATE
} from '../actions/types';

const initialState = { routine: [], exercise: '', modalVisible: false, time: 'Tap to start', timerStop: true };

export default (state = initialState, action) => {
  switch (action.type) {
    case EXERCISES_FETCH_SUCCESS:
      return { ...state, routine: action.payload };
    case EXERCISE_SELECT:
      return { ...state, exercise: action.payload, modalVisible: true, time: 'Tap to start', timerStop: true };
    case EXERCISE_DESELECT:
      return { ...state, exercise: '', modalVisible: false };
    case TIMER_UPDATE:
      return { ...state, time: action.payload, timerStop: false };
    default:
      return state;
  }
};
