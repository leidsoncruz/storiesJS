import screenfull from 'screenfull';
import { setActiveStory } from '../actions/Story';


const request = el => screenfull.request(el);

const onChange = () => screenfull.on('change', () => {
  if (!screenfull.isFullscreen) {
    setActiveStory({ slides: [] });
  }
});


export default {
  request,
  onChange,
};
