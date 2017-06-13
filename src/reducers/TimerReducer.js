import { TIMER_STOP, TIMER_TICK } from '../actions/types';

const initialState = {
  time: 'Tap to start'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TIMER_STOP:
      return { ...initialState };
    case TIMER_TICK:
      return { ...state, time: action.payload };
    default:
      return state;
  }
};
