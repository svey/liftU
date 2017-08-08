import firebase from 'firebase';
import {
  EXERCISES_FETCH_SUCCESS,
  EXERCISE_SELECT,
  EXERCISE_DESELECT,
  EXERCISE_REMOVE,
  EXERCISE_COMPLETE,
  EXERCISE_LOG_FETCH_SUCCESS
} from './types';

export const exercisesFetch = () => {
  return (dispatch) => {
    firebase.database().ref('/exercises')
      .on('value', snapshot => {
        dispatch({ type: EXERCISES_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const exercisesLogFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/workouts`)
      .on('value', snapshot => {
        dispatch({ type: EXERCISE_LOG_FETCH_SUCCESS, payload: snapshot.val() });
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
    return {
      type: EXERCISE_COMPLETE,
      payload: array
    };
  }
  return {
    type: EXERCISE_REMOVE,
    payload: array
  };
};

export const exerciseLog = ({ completed }) => {
  const { currentUser } = firebase.auth();
  
  const newDate = new Date();
  const month = newDate.getMonth() + 1; //months from 1-12
  const day = newDate.getDate();
  const date = `${month}-${day}`;

  return () => {
  firebase.database().ref(`/users/${currentUser.uid}/workouts`)
    .push({ completed, date });
  };
};
