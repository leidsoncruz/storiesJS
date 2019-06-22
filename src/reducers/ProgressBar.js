import { ACTIONS as PROGRESS_BAR_ACTION } from '../constants/ProgressBar';

const INITIAL_STATE = {
  activeBar: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PROGRESS_BAR_ACTION.START_PROGRESS:
      return {
        ...state,
        activeBar: action.payload,
      };
    default:
      return state;
  }
};
