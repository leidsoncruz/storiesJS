
class Stories extends HTMLElement {
  constructor({ stories }, loadStories) {
    super();
    this.stories = stories;
    this.loadStories = loadStories;
  }

  connectedCallback() {
    this.loadStories(this.stories);
  }

}

customElements.define('stories-js', Stories);

export default Stories;
