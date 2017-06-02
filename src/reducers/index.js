import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import NoteFormReducer from './NoteFormReducer';

export default combineReducers({
  auth: AuthReducer,
  noteForm: NoteFormReducer
});
