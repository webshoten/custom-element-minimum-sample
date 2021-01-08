class HelloWorld extends HTMLElement {
  constructor() {
    super();
  }
  attributeChangedCallback(name, oldValue, newValue) {
    this._updateRendering();
  }
  connectedCallback() {
    this._updateRendering();
  }

  _updateRendering() {
    this.innerHTML = '<h1 >Hello,</h1> '
  }
}