/* eslint no-useless-constructor: "off" */
import screenfull from 'screenfull';
import EventEmitter from '../actions/EventEmitter';

import SlidesList from './SlidesList';

class Modal extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
    EventEmitter.subscribe(this.render.bind(this));
  }

  render() {
    const activeStory = EventEmitter.getState('stories', 'activeStory');

    if (activeStory.slides.length <= 0) {
      return;
    }

    const slidesList = new SlidesList();
    this.appendChild(slidesList);

    screenfull.request(this);
  }
}

customElements.define('stories-modal', Modal);

export default Modal;
