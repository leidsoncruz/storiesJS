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
    this.toggleClass();
    EventEmitter.subscribe(this.toggleClass.bind(this));
  }

  toggleClass() {
    const activeBar = EventEmitter.getState('progressBar', 'activeBar');
    const method = activeBar === this.index ? 'add' : 'remove';
    this.classList[method]('active');
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
