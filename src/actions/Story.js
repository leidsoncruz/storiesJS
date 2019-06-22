import EventEmitter from './EventEmitter';
import { ACTIONS } from '../constants/Story';

export const setActiveStory = (story) => {
  EventEmitter.dispatch({ type: ACTIONS.SET_ACTIVE_STORY, payload: story });
};

export default {
  type: 1,
};
