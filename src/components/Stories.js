import Modal from './Modal';
import StoriesList from './StoriesList';

class Stories extends HTMLElement {
  constructor({ stories }, loadStories) {
    super();
    this.stories = stories;
    this.loadStories = loadStories;
  }

  connectedCallback() {
    this.loadStories(this.stories);
    this.render();
  }

  render() {
    const modal = new Modal();
    const storiesList = new StoriesList();
    this.appendChild(storiesList);
    this.appendChild(modal);
  }
}

customElements.define('stories-js', Stories);

export default Stories;
