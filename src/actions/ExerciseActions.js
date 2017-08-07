import firebase from 'firebase';
import {
  EXERCISES_FETCH_SUCCESS,
  EXERCISE_SELECT,
  EXERCISE_DESELECT,
  EXERCISE_REMOVE,
  EXERCISE_COMPLETE,
} from './types';

export const exercisesFetch = () => {
  return (dispatch) => {
    firebase.database().ref('/exercises')
      .on('value', snapshot => {
        dispatch({ type: EXERCISES_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const exerciseSelect = (exercise, rowID) => {
  return {
    type: EXERCISE_SELECT,
    payload: { exercise, rowID }
  };
};

export const exerciseDeselect = () => {
  return {
    type: EXERCISE_DESELECT
  };
};

export const exerciseRemove = (array, rowID, complete) => {
  array.splice(rowID, 1);
  if (complete) {
    console.log('complete');
    return {
      type: EXERCISE_COMPLETE,
      payload: array
    };
  }
  console.log('skip');
  return {
    type: EXERCISE_REMOVE,
    payload: array
  };
};
