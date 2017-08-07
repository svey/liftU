import { NOTE_UPDATE } from '../actions/types';

const initialState = {
  title: '',
  text: '',
  date: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NOTE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
