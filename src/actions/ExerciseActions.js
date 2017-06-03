import firebase from 'firebase';
import {
  EXERCISES_FETCH_SUCCESS
} from './types';

export const exercisesFetch = () => {
  return (dispatch) => {
    firebase.database().ref('/exercises')
      .on('value', snapshot => {
        dispatch({ type: EXERCISES_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};
