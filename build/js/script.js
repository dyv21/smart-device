// smooth scroll to anchor
const anchors = document.querySelectorAll('a[href^="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body';
    document.querySelector(goto).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}

const accordeonList = document.querySelectorAll('.accordeon__item');

accordeonList.forEach((item) => {
  item.addEventListener('click', function () {
    this.classList.toggle('accordeon__item');
    this.classList.toggle('accordeon__item--active');
  });
});

const modal = document.querySelector('.modal')
const modalShow = document.querySelector('.main-nav__item:last-child');
const modalClose = modal.querySelector('.modal__close')

const closePopup = () => {
  if (modal.classList.contains('modal--show')) {
    modal.classList.remove('modal--show');
  };
}

modalShow.addEventListener('click', () => {
  modal.classList.add('modal--show');
});

modal.addEventListener ('click', (evt) => {
  if (!evt.target.closest('.modal__window')) {
    closePopup();
  };
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePopup();
  };
});

modalClose.addEventListener('click', closePopup);
