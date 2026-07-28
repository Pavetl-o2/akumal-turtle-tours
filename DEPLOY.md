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
| ~~Hero video~~ | done — `site/media/hero.mp4` + `hero-poster.jpg` |
| 3 tour photos | `.tour__media` |
| 4 gallery photos | `.gallery__tile` |
| WhatsApp `+52 984 000 0000` | `index.html` contact block + `WHATSAPP` in `script.js` |
| Email `hola@akumalturtle.co` | `index.html` contact block + `EMAIL` in `script.js` |
| Prices ($45 / $160 / $95), tour copy, FAQ answers | `index.html` |
| `https://akumalturtle.co/` canonical URL | `<link rel="canonical">` in `index.html` |

Image prompts for generating the photos are at the end of `chats/chat1.md`.

Remaining tiles work the same way: drop an `<img>` into `.tour__media` /
`.gallery__tile` with `width:100%; height:100%; object-fit:cover` and delete the
`<span class="ph-label">`.

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
