/* eslint no-useless-constructor: "off" */
import EventEmitter from '../actions/EventEmitter';

class StoriesList extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const stories = EventEmitter.getState('stories', 'stories');
  }
}

customElements.define('stories-list', StoriesList);

export default StoriesList;
