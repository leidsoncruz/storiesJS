import EventEmitter from './EventEmitter';
import { ACTIONS } from '../constants/ProgressBar';

export const startProgress = (index) => {
  EventEmitter.dispatch({ type: ACTIONS.START_PROGRESS, payload: index });
};

export default {
  type: 1,
};
