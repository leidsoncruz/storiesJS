/* eslint no-useless-constructor: "off" */
import EventEmitter from '../actions/EventEmitter';
import Story from './Story';

class StoriesList extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  createStory(storyObject) {
    const story = new Story(storyObject);
    this.appendChild(story);
  }

  render() {
    const stories = EventEmitter.getState('stories', 'stories');
    stories.map(this.createStory.bind(this));
  }
}

customElements.define('stories-list', StoriesList);

export default StoriesList;
