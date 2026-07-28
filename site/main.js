/* Akumal Turtle Co. — nav, FAQ and booking form wiring */
(function () {
  'use strict';

  /* Swap these for the real business details before going live.
     WHATSAPP must be digits only, including country code (52 = Mexico). */
  var WHATSAPP = '529840000000';
  var EMAIL = 'hola@akumalturtle.co';

  /* ---------- hero video ---------- */

  // Autoplaying footage is exactly what "reduce motion" is asking us not to do,
  // so fall back to the poster frame.
  var heroVideo = document.querySelector('.hero__media');
  if (heroVideo && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    heroVideo.removeAttribute('autoplay');
    heroVideo.pause();
  }

  /* ---------- mobile nav ---------- */

  var toggle = document.querySelector('.nav__toggle');
  var menu = document.getElementById('nav-menu');

  function closeMenu() {
    menu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', function () {
    var open = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  // Tapping a link should navigate *and* dismiss the panel.
  menu.addEventListener('click', function (e) {
    if (e.target.closest('a')) closeMenu();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav')) closeMenu();
  });

  /* ---------- FAQ: only one answer open at a time ---------- */

  var faqItems = document.querySelectorAll('.faq__item');
  faqItems.forEach(function (item) {
    item.addEventListener('toggle', function () {
      if (!item.open) return;
      faqItems.forEach(function (other) {
        if (other !== item) other.open = false;
      });
    });
  });

  /* ---------- booking form ---------- */

  var form = document.getElementById('booking-form');
  var status = document.getElementById('form-status');
  var details = document.getElementById('f-details');

  // "Book" on a tour card pre-fills which tour the guest wants.
  document.querySelectorAll('[data-tour]').forEach(function (link) {
    link.addEventListener('click', function () {
      var tour = link.getAttribute('data-tour');
      if (!details.value.trim()) details.value = tour + ' — ';
      // Focus after the anchor jump so the caret lands in view.
      setTimeout(function () {
        details.focus();
        details.setSelectionRange(details.value.length, details.value.length);
      }, 400);
    });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var fields = [
      { el: document.getElementById('f-name'), label: 'your name' },
      { el: document.getElementById('f-contact'), label: 'an email or WhatsApp number' },
      { el: details, label: 'a preferred date and group size' }
    ];

    var missing = fields.filter(function (f) { return !f.el.value.trim(); });
    fields.forEach(function (f) {
      f.el.setAttribute('aria-invalid', String(!f.el.value.trim()));
    });

    if (missing.length) {
      status.textContent = 'Please add ' + missing[0].label + '.';
      missing[0].el.focus();
      return;
    }

    var message =
      'Hi! I\'d like to book a turtle tour.\n\n' +
      'Name: ' + fields[0].el.value.trim() + '\n' +
      'Contact: ' + fields[1].el.value.trim() + '\n' +
      'Date & group size: ' + fields[2].el.value.trim();

    var url = WHATSAPP
      ? 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(message)
      : 'mailto:' + EMAIL +
        '?subject=' + encodeURIComponent('Tour booking request') +
        '&body=' + encodeURIComponent(message);

    status.textContent = WHATSAPP
      ? 'Opening WhatsApp with your request — press send to reach us.'
      : 'Opening your email app with the request — press send to reach us.';
    window.open(url, '_blank', 'noopener');
  });
})();
