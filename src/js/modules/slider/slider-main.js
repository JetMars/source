import Slider from "./slider";

export default class MainSlider extends Slider {
  constructor(btns) {
    super(btns);
  }

  showSlider(n) {
    if (n > this.sliders.length) {
      this.slideIndex = 1;
    }

    if (n < 1) {
      this.slideIndex = this.sliders.length;
    }

    this.sliders.forEach(slider => {
      slider.style.display = 'none';
    });

    try {
      this.hanson.style.opacity = '0';
      if (n === 3) {
        this.hanson.classList.add('animated');
        setTimeout(() => {
          this.hanson.style.opacity = '1';
          this.hanson.classList.add('slideInUp');
        }, 3000);
      } else {
        this.hanson.classList.remove('slideInUp');
      }
    } catch (e) { }
    this.sliders[this.slideIndex - 1].style.display = 'block';
  }


  plusIndex(n) {
    this.showSlider(this.slideIndex += n);
  }


  render() {
    try {
      this.hanson = document.querySelector('.hanson');
    } catch (e) { }

    this.showSlider(this.slideIndex);

    this.btns.forEach(btn => {
      btn.addEventListener('click', () => {
        this.plusIndex(1);
      });

      btn.parentElement.previousElementSibling.addEventListener('click', (e) => {
        e.preventDefault();
        this.slideIndex = 1;
        this.showSlider(this.slideIndex);
      });
    });
  }
}