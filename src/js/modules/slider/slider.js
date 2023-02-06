export default class Slider {
  constructor({
    container = null,
    btns = null,
    next = null,
    prev = null,
    active = '',
    animate = false,
    autoPlay = false
  } = {}) {
    this.container = document.querySelector(container);
    this.sliders = this.container.children;
    this.btns = document.querySelectorAll(btns);
    this.next = document.querySelector(next);
    this.prev = document.querySelector(prev);
    this.slideIndex = 1;
    this.active = active;
    this.animate = animate;
    this.autoPlay = autoPlay;
  }
}