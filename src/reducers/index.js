import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import NoteFormReducer from './NoteFormReducer';
import ExerciseReducer from './ExerciseReducer';
import TimerReducer from './TimerReducer';

export default combineReducers({
  auth: AuthReducer,
  noteForm: NoteFormReducer,
  exercises: ExerciseReducer,
  timer: TimerReducer
});
