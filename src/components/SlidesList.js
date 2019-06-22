import EventEmitter from '../actions/EventEmitter';
import Slide from './Slide';


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
    this.activeStory = EventEmitter.getState('stories', 'activeStory');
    this.render();
  }

  createSlide(slideData, index) {
    const slide = new Slide(slideData, index);
    this.appendChild(slide);
  }

  render() {
    const { slides } = this.activeStory;
    slides.map(this.createSlide.bind(this));
  }
}

customElements.define('stories-slides-list', SlidesList);

export default SlidesList;
