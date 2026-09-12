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
  var tour = document.getElementById('f-tour');
  var details = document.getElementById('f-details');

  // "Book" on a tour card preselects that tour in the dropdown.
  document.querySelectorAll('[data-tour]').forEach(function (link) {
    link.addEventListener('click', function () {
      tour.value = link.getAttribute('data-tour');
      tour.setAttribute('aria-invalid', 'false');
      // Focus after the anchor jump so the form lands in view — the name field
      // rather than the select, which would pop a picker open on mobile.
      setTimeout(function () { document.getElementById('f-name').focus(); }, 400);
    });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var t = window.__t || function (k) { return k; };

    var fields = [
      { el: document.getElementById('f-name'), need: t('form.f.name'), label: t('form.l.name') },
      { el: document.getElementById('f-contact'), need: t('form.f.reach'), label: t('form.l.contact') },
      // The select carries a code as its value; send the tour's name instead.
      { el: tour, need: t('form.f.tour'), label: t('form.l.tour'),
        text: tour.value ? tour.options[tour.selectedIndex].textContent : '' },
      { el: details, need: t('form.f.details'), label: t('form.l.details') }
    ];

    var missing = fields.filter(function (f) { return !f.el.value.trim(); });
    fields.forEach(function (f) {
      f.el.setAttribute('aria-invalid', String(!f.el.value.trim()));
    });

    if (missing.length) {
      status.textContent = t('form.need') + missing[0].need + '.';
      missing[0].el.focus();
      return;
    }

    var message = t('form.greeting') + '\n\n' + fields.map(function (f) {
      return f.label + ': ' + (f.text || f.el.value.trim());
    }).join('\n');

    var url = WHATSAPP
      ? 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(message)
      : 'mailto:' + EMAIL +
        '?subject=' + encodeURIComponent(t('form.greeting')) +
        '&body=' + encodeURIComponent(message);

    status.textContent = WHATSAPP ? t('form.wa') : t('form.mail');
    window.open(url, '_blank', 'noopener');
  });
})();
