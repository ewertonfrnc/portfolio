///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation
document.querySelector('.header').addEventListener('click', e => {
  if (e.target.classList.contains('nav-cta')) return;

  e.preventDefault();

  if (e.target.closest('.logo-img')) {
    const href = e.target.closest('.logo-img').getAttribute('href');

    // Scroll back to top
    if (href === '#')
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
  }

  if (e.target.classList.contains('main-nav-link')) {
    const href = e.target.getAttribute('href');

    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    document.querySelector('.header').classList.toggle('nav-open');
  }
});

document.querySelector('.btn--text').addEventListener('click', e => {
  e.preventDefault();

  const href = e.target.getAttribute('href');
  document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
});

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector('.section-hero');

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add('sticky');
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove('sticky');
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: '-80px',
  }
);
obs.observe(sectionHeroEl);
