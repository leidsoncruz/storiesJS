import { setActiveStory } from '../actions/Story';

class Story extends HTMLElement {
  constructor(story) {
    super();
    this.story = story;
  }

  connectedCallback() {
    this.render();
    this.addEventListener('click', () => setActiveStory(this.story));
  }

  render() {
    const preview = this.story.preview || this.story.slides[0].preview || this.story.slides[0].src;
    const { title } = this.story;
    const img = document.createElement('img');
    img.setAttribute('src', preview);
    img.setAttribute('alt', title);
    this.appendChild(img);
  }
}

customElements.define('stories-story', Story);

export default Story;
