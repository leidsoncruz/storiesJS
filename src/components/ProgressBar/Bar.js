class Bar extends HTMLElement {
  constructor(index) {
    super();
    this.index = index;
  }
}

customElements.define('stories-progress-bar', Bar);

export default Bar;
