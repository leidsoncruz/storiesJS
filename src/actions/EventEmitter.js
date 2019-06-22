import store from '../store/index';


const getState = (reducer, state) => store.getState()[reducer][state];

const subscribe = fn => store.subscribe(fn);

const dispatch = ({ type, payload = null }) => {
  store.dispatch({ type, payload });
};

export default {
  dispatch,
  subscribe,
  getState,
};
