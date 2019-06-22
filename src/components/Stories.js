import Modal from './Modal';

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
    this.appendChild(modal);
  }
}

customElements.define('stories-js', Stories);

export default Stories;
