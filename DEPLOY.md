# Akumal Turtle Co. — site

Static implementation of `project/Akumal Turtle Tours.dc.html` (the "Fresh Tropical / 1b"
direction the user picked in `chats/chat1.md`). No build step, no framework.

```
site/index.html    markup
site/styles.css    all styles
site/script.js     mobile nav, FAQ accordion, booking form
vercel.json        serves site/ as the output directory
```

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
| Hero video/image | `.hero__panel` — currently a striped teal block |
| 3 tour photos | `.tour__media` |
| 4 gallery photos | `.gallery__tile` |
| WhatsApp `+52 984 000 0000` | `index.html` contact block + `WHATSAPP` in `script.js` |
| Email `hola@akumalturtle.co` | `index.html` contact block + `EMAIL` in `script.js` |
| Prices ($45 / $160 / $95), tour copy, FAQ answers | `index.html` |
| `https://akumalturtle.co/` canonical URL | `<link rel="canonical">` in `index.html` |

Image prompts for generating the photos are at the end of `chats/chat1.md`.

To drop in a real hero, replace the placeholder `<span>` and `.hero__panel`
background with a `<video>`/`<img>` set to `position:absolute; inset:0;
width:100%; height:100%; object-fit:cover` — the gradient scrim above it
(`.hero__scrim`) already keeps the headline legible.

## Booking form

The form has no backend. On submit it opens a prefilled WhatsApp message
(`wa.me`), falling back to `mailto:` if `WHATSAPP` in `script.js` is blank.
For real form submissions, point it at Formspree/Basin or a Vercel serverless
function instead.
