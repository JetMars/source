import MainSlider from "./modules/slider/slider-main";
import MiniSlider from "./modules/slider/slider-mini";
import VideoPlayer from "./modules/playVideo";
import ShowDifference from "./modules/showDifference";
import Form from "./modules/form";

window.addEventListener('DOMContentLoaded', () => {
  const slider = new MainSlider({ container: '.page', btns: '.next' });
  slider.render();

  const showUpSlider = new MiniSlider({
    container: '.showup__content-slider',
    next: '.showup__next',
    prev: '.showup__prev',
    active: 'card-active',
    animate: true
  });
  showUpSlider.init();

  const modulesSlider = new MiniSlider({
    container: '.modules__content-slider',
    next: '.modules__info .slick-next',
    prev: '.modules__info .slick-prev',
    active: 'card-active',
    animate: true
  });
  modulesSlider.init();

  const feedSlider = new MiniSlider({
    container: '.feed__slider',
    next: '.feed__slider .slick-next',
    prev: '.feed__slider .slick-prev',
    active: 'feed__item-active',
    autoPlay: true,
  });
  feedSlider.init();


  const player = new VideoPlayer('.play__circle', '.overlay');
  player.init();

  const officerold = new ShowDifference('.officerold .plus', '.officerold .officer__card-item');
  officerold.render();

  const officernew = new ShowDifference('.officernew .plus', '.officernew .officer__card-item');
  officernew.render();

  new Form('.form').init();
});