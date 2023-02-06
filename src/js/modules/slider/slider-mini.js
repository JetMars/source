import Slider from "./slider";

export default class MiniSlider extends Slider {
  constructor(container, next, prev, active, animate, autoPlay) {
    super(container, next, prev, active, animate, autoPlay);
  }

  activeSlider() {
    if (this.animate) {

      this.container.children.forEach(el => {
        el.querySelector('.card__title').style.opacity = '0.4';
        el.querySelector('.card__controls-arrow').style.opacity = '0';
      });

      this.container.children[0].querySelector('.card__title').style.opacity = '1';
      this.container.children[0].querySelector('.card__controls-arrow').style.opacity = '1';
    }
  }

  nextSlide() {
    this.sliders = Array.from(this.container.children).filter(element => {
      if (element.nodeName === "BUTTON") {
        return;
      }
      element.classList.remove(this.active);
      element.classList.remove('animated', 'fadeIn');
      return element;
    });

    this.container.append(this.sliders[0]);

    if (this.container.children[0].nodeName !== 'BUTTON') {
      this.container.children[0].classList.add(this.active);
      this.container.children[0].classList.add('animated', 'fadeIn');
    } else {
      this.container.children[2].classList.add(this.active);
      this.container.children[2].classList.add('animated', 'fadeIn');
    }

    this.activeSlider();
  }

  bindTrigger() {

    this.next.addEventListener('click', () => this.nextSlide());

    this.prev.addEventListener('click', () => {
      this.sliders = Array.from(this.container.children).filter(element => {
        if (element.nodeName === "BUTTON") {
          return;
        }
        element.classList.remove(this.active);
        element.classList.remove('animated', 'fadeIn');
        return element;
      });

      this.container.prepend(this.sliders[this.sliders.length - 1]);
      this.container.children[0].classList.add(this.active);
      this.container.children[0].classList.add('animated', 'fadeIn');
      this.activeSlider();
    });
  }

  init() {
    this.container.style.cssText = `
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
      align-items: flex-start;
    `;

    this.bindTrigger();
    this.activeSlider();

    if (this.autoPlay) {
      setInterval(() => this.nextSlide(), 5000);
    }
  }
}