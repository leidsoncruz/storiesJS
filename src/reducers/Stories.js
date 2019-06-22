import { ACTIONS as STORIES_ACTION } from '../constants/Stories';
import { ACTIONS as STORY_ACTION } from '../constants/Story';

const INITIAL_STATE = {
  stories: [],
  activeStory: { slides: [] },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STORIES_ACTION.LOAD_STORIES:
      return {
        ...state,
        stories: action.payload,
      };

    case STORY_ACTION.SET_ACTIVE_STORY:
      return {
        ...state,
        activeStory: action.payload,
      };

    default:
      return state;
  }
};
