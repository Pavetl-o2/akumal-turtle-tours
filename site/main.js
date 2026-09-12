/* Akumal Turtle Co. — nav, FAQ and booking form wiring */
(function () {
  'use strict';

  /* Swap these for the real business details before going live.
     WHATSAPP must be digits only, including country code (52 = Mexico). */
  var WHATSAPP = '529840000000';
  var EMAIL = 'hola@akumalturtle.co';

  /* Stripe Payment Links, one per tour — create them in the Stripe dashboard
     and paste the https://buy.stripe.com/… URLs here (see DEPLOY.md).
     A blank link hides the pay button for that tour, so the WhatsApp request
     keeps working on its own until the links exist. */
  var PAYMENT_LINKS = {
    morning: '',
    yalkuito: ''
  };

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

  /* ---------- pay button ---------- */

  var payBlock = document.getElementById('pay-block');
  var payLink = document.getElementById('pay-link');

  // Stripe only accepts [A-Za-z0-9_-] here, and it is what ties the payment in
  // the dashboard back to the WhatsApp request.
  function reference(name) {
    return name.trim()
      // Strip the accents first, or "José" arrives as "Jos-".
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^A-Za-z0-9_-]+/g, '-').replace(/^-|-$/g, '').slice(0, 60);
  }

  function syncPayButton() {
    var url = PAYMENT_LINKS[tour.value];
    if (!url) {
      payBlock.hidden = true;
      return;
    }
    var params = [];
    var reach = document.getElementById('f-contact').value.trim();
    // The field takes a WhatsApp number too, so only pass it on as an email.
    if (/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(reach)) {
      params.push('prefilled_email=' + encodeURIComponent(reach));
    }
    var ref = reference(document.getElementById('f-name').value);
    if (ref) params.push('client_reference_id=' + ref);

    payLink.href = url + (params.length ? (url.indexOf('?') < 0 ? '?' : '&') + params.join('&') : '');
    payBlock.hidden = false;
  }

  tour.addEventListener('change', syncPayButton);
  document.getElementById('f-name').addEventListener('input', syncPayButton);
  document.getElementById('f-contact').addEventListener('input', syncPayButton);
  syncPayButton();

  // "Book" on a tour card preselects that tour in the dropdown.
  document.querySelectorAll('[data-tour]').forEach(function (link) {
    link.addEventListener('click', function () {
      tour.value = link.getAttribute('data-tour');
      tour.setAttribute('aria-invalid', 'false');
      syncPayButton(); // setting .value from script fires no change event
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
