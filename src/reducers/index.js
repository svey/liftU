import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import NoteFormReducer from './NoteFormReducer';
import ExerciseReducer from './ExerciseReducer';

export default combineReducers({
  auth: AuthReducer,
  noteForm: NoteFormReducer,
  exercises: ExerciseReducer
});
