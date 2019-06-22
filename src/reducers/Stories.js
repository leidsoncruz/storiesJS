import { ACTIONS as STORIES_ACTION } from '../constants/Stories';

const INITIAL_STATE = {
  stories: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STORIES_ACTION.LOAD_STORIES:
      return {
        ...state,
        stories: action.payload,
      };


    default:
      return state;
  }
};
