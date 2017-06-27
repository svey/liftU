import {
  EXERCISES_FETCH_SUCCESS,
  EXERCISE_SELECT,
  EXERCISE_DESELECT,
  EXERCISE_REMOVE,
  EXERCISE_COMPLETE,
} from '../actions/types';

const initialState = {
  routine: [],
  exercise: '',
  rowID: null,
  modalVisible: false,
  completed: 0,
  skipped: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EXERCISES_FETCH_SUCCESS:
      return { ...state, routine: action.payload };
    case EXERCISE_SELECT:
      return {
        ...state,
        exercise: action.payload.exercise,
        rowID: action.payload.rowID,
        modalVisible: true
      };
    case EXERCISE_DESELECT:
      return { ...state, exercise: '', modalVisible: false };
    case EXERCISE_REMOVE:
      return {
        ...state,
        exercise: '',
        modalVisible: false,
        rowID: null,
        routine: action.payload,
        skipped: state.skipped + 1
      };
    case EXERCISE_COMPLETE:
      return {
        ...state,
        exercise: '',
        modalVisible: false,
        rowID: null,
        routine: action.payload,
        completed: state.completed + 1
      };
    default:
      return state;
  }
};
