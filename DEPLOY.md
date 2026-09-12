# Akumal Turtle Co. — site

Static implementation of `project/Akumal Turtle Tours.dc.html` (the "Fresh Tropical / 1b"
direction the user picked in `chats/chat1.md`). No build step, no framework.

```
site/index.html    markup
site/main.css      all styles
site/main.js       mobile nav, FAQ accordion, booking form
site/media/        hero video + poster
vercel.json        serves site/ as the output directory
```

## Languages

English, Spanish, French, Italian and German. All copy lives in `site/i18n.js`;
the markup carries only keys, so a wording change is edited once per language in
one file.

- Text: `data-i18n="key"` — replaces the element's text.
- Attributes: `data-i18n-attr="placeholder:key"` (comma-separate for several).
- Markup inside a string: add the key to `HTML_KEYS` — only `hero.title` uses
  it, for its `<br>` and the German soft hyphen.
- JS strings: `window.__t('key')`.

Language is chosen by `?lang=xx`, then a saved choice, then the browser's
`Accept-Language`, then English. Picking one updates `?lang=` so a page can be
shared in that language, and `<html lang>` so screen readers and hyphenation
follow. Missing keys fall back to English rather than rendering blank.

**SEO limitation.** Translation happens in the browser, so all five languages
share one URL and search engines index mainly the English text. For a business
that wants to rank on "tour tortugas akumal" or "schnorcheln akumal", the fix is
a real URL per language (`/es/`, `/de/`, …) with `hreflang` tags — which means
either five HTML files or a generator, and therefore the build step this site
currently avoids. Worth doing once the copy stops changing.

## Caching

Everything is served `public, max-age=0, must-revalidate`, so browsers
revalidate against the ETag on each load and a 304 costs almost nothing.

Do **not** put `immutable` / long `max-age` on these filenames. They carry no
content hash, so a browser that cached `main.css` under `immutable` will keep
serving the stale copy for the whole max-age and never ask for a new one — which
is exactly what happened when the hero video first went live: new HTML, year-old
CSS, video rendering unstyled at its native 848×478. If you want long-lived
caching later, add a content hash to the filenames first (`main.a1b2c3.css`),
which needs a build step this site deliberately does not have.

## Deploy to Vercel

**Drag & drop** — open <https://vercel.com/new>, drop the `site/` folder. Done.

**CLI** — from the repo root:

```sh
npx vercel --prod
```

**Git integration** — push this repo to GitHub, then import it at
<https://vercel.com/new>. `vercel.json` already points Vercel at `site/`, so leave
the build settings on their defaults.

## Placeholders still to replace

Everything below is filler from the design prototype, not real business data.

| What | Where |
| --- | --- |
| WhatsApp `+52 984 000 0000` | `index.html` contact block + `WHATSAPP` in `main.js` |
| Email `hola@akumalturtle.co` | `index.html` contact block + `EMAIL` in `main.js` |
| Prices ($65 / $450), tour copy, FAQ answers | `index.html` |
| Stripe payment links | `PAYMENT_LINKS` in `main.js` — see *Online payments* |
| `https://akumalturtle.co/` canonical URL | `<link rel="canonical">` in `index.html` |

All imagery is in place. To swap a photo, overwrite the file in `site/media/`
keeping the same name — but pre-crop it to the tile's aspect first, because
`object-fit: cover` centre-crops whatever you give it:

| Slot | File | Crop to |
| --- | --- | --- |
| Tour cards | `tour-morning.jpg`, `tour-reef.jpg` | 2:1 — exported at 900×450 |
| Gallery | `gallery-1…4.jpg` | 16:9 — exported at 800×450 |

The source photos were mostly 4:3 or portrait, so each was cropped around its
subject rather than centred — centring left nothing but water in the vertical
ones. `tour-private.jpg` is unused since the Private Encounter tour was
removed; it is kept in case the photo is wanted elsewhere.

## Online payments

The site takes card payments through **Stripe Payment Links** — hosted checkout
pages that live on Stripe's domain. Nothing but a URL is stored here: no API
keys, no card data, no backend, and the site stays a static deploy.

```js
// site/main.js
var PAYMENT_LINKS = {
  morning:  '',   // https://buy.stripe.com/…
  yalkuito: ''
};
```

A blank link hides the pay button for that tour, so until the links are pasted
in, the form behaves exactly as before (WhatsApp request only). Fill them in and
a **Pay now by card** button appears under the submit button as soon as the
guest picks that tour.

The button's URL carries two parameters, so the payment can be matched back to
the request in the Stripe dashboard:

- `prefilled_email` — only when the contact field holds an email, since it also
  accepts a WhatsApp number.
- `client_reference_id` — the guest's name, accents stripped and reduced to
  `[A-Za-z0-9_-]`, which is all Stripe accepts there.

### Creating the two links

In the Stripe dashboard, **Payment links → New**, one per tour:

| | Morning Snorkel | Yalkuito |
| --- | --- | --- |
| Price | 65 USD | 450 USD |
| Quantity | let the customer adjust it (1–6) — that is how a group of 4 pays 4 × $65 | fixed at 1, the price is per group |

For both: add custom fields for **tour date** and **meeting point / hotel**
(Payment Links support them, and it is the only place the date gets captured at
payment time), enable the emailed receipt, and set the after-payment redirect
back to the site. Link your cancellation and refund terms on the link's page —
Stripe asks for them and Mexican consumer law expects them to be visible before
the guest pays.

### What this does *not* do

Payment Links have no calendar: they will happily take two payments for the same
morning. Keep confirming the date over WhatsApp — either before sending the link
(safest) or right after the payment lands — and handle refunds by hand from the
dashboard. When the volume makes that painful, the next steps up are a Stripe
Checkout session behind a Vercel function (dynamic price per head, webhook
confirmation) or a tour-booking platform with real availability.

Two things worth checking with current figures before pricing: charging in USD
from a Mexican Stripe account settles in MXN with a currency-conversion fee on
top of the card fee, and international cards cost more than domestic ones.

## Hero video

`site/media/hero.mp4` — 848×478, 12.3s, 2.5 MB. Source was a WhatsApp clip; the
video stream is copied verbatim (no re-encode, no quality loss), with the audio
track stripped and `+faststart` applied so it streams instead of waiting for a
full download. `hero-poster.jpg` is the frame at 0.5s.

`.hero__scrim` is two stacked gradients rather than the design's single one: the
footage swings from a dark turtle to bright sunlit water, and at ~3s/9s/11s the
white lede paragraph washed out against the original scrim. The vertical layer
keeps the design's bottom fade; the horizontal one shades the left column where
the copy sits. **If you swap in different footage, re-check legibility across
the whole clip, not just the poster frame.**

Also note the source is 848×478 — it fills a 1400px-wide panel, so it is soft on
large screens. A higher-resolution capture would render noticeably sharper.

## Booking form

The form has no backend. On submit it opens a prefilled WhatsApp message
(`wa.me`), falling back to `mailto:` if `WHATSAPP` in `script.js` is blank.
For real form submissions, point it at Formspree/Basin or a Vercel serverless
function instead.
