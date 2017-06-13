import { TIMER_TICK, TIMER_STOP } from './types';

let timer = null;
let time;

export const timerStart = (duration) => {
  clearInterval(timer);
  return (dispatch) => {
    timer = setInterval(() => dispatch(tick(duration)), 1000);
    dispatch(tick());
  };
};

const tick = (duration) => {
  if (--time === 0) {
    return timerStop();
  }

  time = time || duration;
  let minutes = parseInt(time / 60, 10);
  let seconds = parseInt(time % 60, 10);
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;
  
  return { type: TIMER_TICK, payload: `${minutes}:${seconds}` };
};

export const timerStop = () => {
  time = NaN;
  clearInterval(timer);
  return { type: TIMER_STOP };
};

