import Slider from "./modules/sliders";
import VideoPlayer from "./modules/playVideo";

window.addEventListener('DOMContentLoaded', () => {
  const slider = new Slider('.page', '.next');
  slider.render();

  const player = new VideoPlayer('.play__circle', '.overlay');
  player.init();
});