import Bar from './Bar';
import EventEmitter from '../../actions/EventEmitter';

class Progress extends HTMLElement {
  constructor(length) {
    super();
    this.length = length;
  }

  connectedCallback() {
    this.render();
    this.activeBar = EventEmitter.getState('progressBar', 'activeBar');
  }

  createBar(index) {
    const bar = new Bar(index);
    this.appendChild(bar);
  }

  render() {
    [...Array(this.length).keys()].map(this.createBar.bind(this));
  }
}

customElements.define('stories-progress', Progress);

export default Progress;
