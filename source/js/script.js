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
    this.classList.toggle('accordeon__item--active');

  });
});

