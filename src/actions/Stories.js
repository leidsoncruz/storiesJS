import EventEmitter from './EventEmitter';
import { ACTIONS } from '../constants/Stories';

export const loadStories = (data) => {
  EventEmitter.dispatch({ type: ACTIONS.LOAD_STORIES, payload: data });
};

export default {
  type: 1,
};
