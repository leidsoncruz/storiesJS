import { combineReducers } from 'redux';
import stories from './Stories';
import progressBar from './ProgressBar';

export default combineReducers({
  stories,
  progressBar,
});
