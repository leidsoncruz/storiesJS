import { createStore } from 'redux';
import reducers from '../reducers/index';

/* eslint-disable no-underscore-dangle */
export default createStore(
  reducers, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */
