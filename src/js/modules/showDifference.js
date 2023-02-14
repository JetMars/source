export default class ShowDifference {
  constructor(trigger, cardsSelector) {
    this.btn = document.querySelector(trigger);
    this.cards = document.querySelectorAll(cardsSelector);
    this.counter = 0;
  }

  hideCards() {
    this.cards.forEach((item, index, arr) => {
      if (index !== arr.length - 1) {
        item.style.display = 'none';
      }
    });
  }

  addCards(items, counter) {
    try {
      this.btn.addEventListener('click', () => {
        items[counter].classList.add('animated', 'fadeIn');
        items[counter++].style.display = 'flex';
        if (counter >= items.length - 1) {
          items[items.length - 1].remove();
        }
      });
    } catch (error) { }
  }

  render() {
    this.hideCards();
    this.addCards(this.cards, this.counter);
  }
}