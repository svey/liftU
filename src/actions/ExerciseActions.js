import firebase from 'firebase';
import {
  EXERCISES_FETCH_SUCCESS,
  EXERCISE_SELECT,
  EXERCISE_DESELECT
} from './types';

export const exercisesFetch = () => {
  return (dispatch) => {
    firebase.database().ref('/exercises')
      .on('value', snapshot => {
        dispatch({ type: EXERCISES_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const exerciseSelect = (exercise) => {
  return {
    type: EXERCISE_SELECT,
    payload: exercise
  };
};

export const exerciseDeselect = () => {
  return {
    type: EXERCISE_DESELECT
  };
};
