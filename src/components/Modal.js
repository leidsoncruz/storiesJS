/* eslint no-useless-constructor: "off" */
import screenfull from 'screenfull';
import EventEmitter from '../actions/EventEmitter';


class Modal extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
    EventEmitter.subscribe(this.render.bind(this));
  }

  render() {
    screenfull.request(this);
  }
}

customElements.define('stories-modal', Modal);

export default Modal;
