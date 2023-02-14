export default class Slider {
  constructor({
    container = null,
    btns = null,
    next = null,
    prev = null,
    active = '',
    animate = false,
    autoPlay = false,
    nextmodules = null,
    prevmodules = null,
  } = {}) {
    this.container = document.querySelector(container);
    try {
      this.sliders = this.container.children;
    } catch (err) { }
    this.btns = document.querySelectorAll(btns);
    this.next = document.querySelector(next);
    this.prev = document.querySelector(prev);
    this.slideIndex = 1;
    this.active = active;
    this.animate = animate;
    this.autoPlay = autoPlay;
    this.nextmodules = document.querySelectorAll(nextmodules);
    this.prevmodules = document.querySelectorAll(prevmodules);
  }
}