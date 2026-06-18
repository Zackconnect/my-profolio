document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.nav a');
  const contactForm = document.querySelector('.contact-form');

  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      nav.classList.toggle('active');
      navToggle.classList.toggle('open');
    });
  }

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (nav.classList.contains('active')) {
        nav.classList.remove('active');
        navToggle.classList.remove('open');
      }
    });
  });

  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
      alert('Thank you! Your message has been sent.');
      contactForm.reset();
    });
  }
});
