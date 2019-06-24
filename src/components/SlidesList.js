import EventEmitter from '../actions/EventEmitter';
import ProgressBar from './ProgressBar/index';
import Slide from './Slide';
import { removeChildren } from '../utils/functions';


class SlidesList extends HTMLElement {
  constructor() {
    super();
    this.activeStory = { slides: [] };
    EventEmitter.subscribe(this.updateState.bind(this));
  }

  connectedCallback() {
    this.updateState();
  }

  updateState() {
    removeChildren(this);
    this.activeStory = EventEmitter.getState('stories', 'activeStory');
    this.render();
  }

  createSlide(slideData, index) {
    const slide = new Slide(slideData, index);
    this.appendChild(slide);
  }

  render() {
    const { slides } = this.activeStory;
    const progressBar = new ProgressBar(slides.length);
    slides.map(this.createSlide.bind(this));
    this.appendChild(progressBar);
  }
}

customElements.define('stories-slides-list', SlidesList);

export default SlidesList;
