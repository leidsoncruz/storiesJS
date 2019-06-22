import EventEmitter from '../actions/EventEmitter';


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

  render() {
    const { slides } = this.activeStory;
  }
}

customElements.define('stories-slides-list', SlidesList);

export default SlidesList;
