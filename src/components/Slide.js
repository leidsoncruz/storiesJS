import EventEmitter from '../actions/EventEmitter';

class Slide extends HTMLElement {
  constructor({ src, title, type }, index) {
    super();
    this.src = src;
    this.title = title;
    this.type = type;
    this.index = index;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const { src, title } = this;
    const img = document.createElement('img');
    img.setAttribute('src', src);
    img.setAttribute('alt', title);
    this.appendChild(img);
  }
}

customElements.define('stories-slide', Slide);

export default Slide;
