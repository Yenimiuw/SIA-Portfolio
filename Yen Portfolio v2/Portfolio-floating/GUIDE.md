# Portfolio Guide

How to change the details, images and look of your website — no coding experience needed.

---

## 1. What's in the folder

```
Portfolio/
├── Assets/        ← your images go here (photos, logos, icons, screenshots)
├── index.html     ← page structure (you rarely need to open this)
├── style.css      ← colours, fonts, spacing, animations
├── inter.js       ← ALL your text/links/images live at the top of this file
└── GUIDE.md       ← this guide
```

| File | Open it when you want to… |
|---|---|
| `inter.js` | change any **text, link, image, skill, project or contact detail** |
| `style.css` | change **colours or fonts** |
| `index.html` | change the **browser tab title**, favicon, or reorder/remove whole sections |
| `Assets/` | add or replace **images** |

> **The golden rule:** 95% of the time you only edit the `CONFIG` block at the very top of `inter.js`.

---

## 2. Previewing your changes

1. Double-click `index.html` to open it in your browser.
2. After editing and saving a file, **refresh the page** (`Ctrl+R` / `Cmd+R`).
3. If a change doesn't show, do a hard refresh (`Ctrl+Shift+R` / `Cmd+Shift+R`).
4. The intro loader only plays once per browser tab. Open a new tab to see it again.

Use a code editor like **VS Code** (free). Plain Notepad works but is harder to read.

---

## 3. How the CONFIG block works

Open `inter.js`. At the top you'll see:

```js
const CONFIG = {
  site: {
    name: 'Your Name',
  },
  ...
```

Edit only the text **inside the quotes**. Keep the quotes `' '`, commas `,` and brackets `{ } [ ]`.

```js
name: 'Your Name',        // ✅ before
name: 'Maria Santos',     // ✅ after
name: Maria Santos,       // ❌ missing quotes — will break the page
```

**Apostrophes:** if your text contains `'` (like *I'm*), wrap the text in double quotes instead:

```js
greeting: "Hey, I'm a",   // ✅
greeting: 'Hey, I'm a',   // ❌ breaks
```

**Shortcuts** you can type inside any text:

| Type this | You get |
|---|---|
| `{name}` | the value of `site.name` |
| `{year}` | the current year (updates itself every January) |

Example: `copyright: '© {year} {name}'` → *© 2026 Maria Santos*

**If something breaks:** press `F12` in your browser → **Console** tab. A red error shows the line number in `inter.js` with the mistake (usually a missing quote or comma). Undo your last change and try again.

---

## 4. Where to change each part of the website

| What you see on the page | Where to edit in `CONFIG` |
|---|---|
| Name in the top bar & footer | `site.name` |
| Top menu links | `nav.links` |
| "Get in touch" button text | `nav.buttonLabel` |
| "Hey, I'm a" + big headline | `hero.greeting`, `hero.title` |
| Philosophy text + button | `hero.philosophy` |
| Hero photo | `hero.photo` |
| Floating role chips | `hero.roles` |
| Organization logos | `hero.organizations` |
| About heading, paragraph, numbers | `about.heading`, `about.text`, `about.stats` |
| About photo | `about.photo` |
| Skills (tools & tech) | `skills.groups` |
| Big featured project | `featured` |
| Carousel projects | `more.projects` |
| Footer text, links, socials, phone | `footer` |
| Contact pop-up | `contact` |
| Intro loader | `loader` |

---

## 5. Adding images

### Step 1 — Put the file in `Assets/`

Suggested structure (create the subfolders if you like):

```
Assets/
├── hero-photo.png
├── about-photo.jpg
├── featured.png
├── logos/       gdg.png, aws.png …
├── projects/    one.png, two.png …
└── icons/       js.svg, react.svg …
```

### Step 2 — Write the path in `CONFIG`

Paths start with `Assets/` and are **case-sensitive** online (`Assets/Photo.png` ≠ `Assets/photo.png`). Avoid spaces in file names — use `-` instead.

```js
photo: {
  src: 'Assets/hero-photo.png',   // ← was ''
  alt: 'Portrait of {name}',      // describes the image for screen readers
  placeholder: '...',             // only shown when src is ''
},
```

To go back to the placeholder, set `src: ''`.

### Recommended image sizes

| Image | Where | Shape | Suggested size | Format |
|---|---|---|---|---|
| Hero portrait | `hero.photo` | 3:4 portrait, **transparent background (cut-out)** | 900 × 1200 px | PNG / WebP |
| About photo | `about.photo` | square | 1000 × 1000 px | JPG / WebP |
| Featured screenshot | `featured.image` | 16:11 landscape | 1600 × 1100 px | JPG / PNG / WebP |
| Project thumbnails | `more.projects[].thumbnail` | 16:10 landscape | 1200 × 750 px | JPG / PNG / WebP |
| Organization logos | `hero.organizations[].logos[].src` | small wide chip (88 × 42) | 176 × 84 px | PNG / SVG, transparent |
| Skill icons (optional) | `skills…items[].image` | square | 96 × 96 px | SVG / PNG |

Tips: keep each file under ~500 KB (use [squoosh.app](https://squoosh.app) to compress). The about photo is automatically cropped into a blob shape; logos turn colourful when hovered.

---

## 6. Common edits (copy-paste recipes)

### Change the big headline
```js
title: ['Product', 'Manager'],     // each item = one line
```

### Add or remove a role chip
```js
roles: [
  'AWS Cloud Cadet',
  'Brand Ambassador',
  'Scrum Master',                  // ← new
],
```
Numbers (#01, #02 …) are added automatically. The layout is designed for **4** chips per row; more will wrap to the next row.

### Add an organization logo
```js
logos: [
  { name: 'GDG', src: 'Assets/logos/gdg.png' },   // ← real logo
  { name: 'Logo', src: '' },                      // ← placeholder
],
```
`name` is the image's description. Keep the two groups (been with / collaborated with).

### Change the three stats
```js
stats: [
  { value: '5+',  label: 'Years of experience' },
  { value: '20+', label: 'Completed projects' },
  { value: '30+', label: 'Happy clients' },
],
```

### Add a skill
Find the row you want in `skills.groups` and add a line:
```js
{ name: 'Jira', label: 'Tracking', icon: 'Ji' },
```
- `icon` = 1–3 letters shown in the coloured square.
- Want a real logo instead? Add `image: 'Assets/icons/jira.svg'`.
- Tile colours cycle automatically (change them in `skills.iconColors`).

### Add a new skills row or group
Copy a whole `{ speed: …, reverse: …, items: [ … ] }` block into `rows`, or copy a whole `{ title: …, rows: [ … ] }` block into `groups`.
- `speed` = seconds per loop (bigger = slower).
- `reverse: true` makes it scroll the other way.
- A row looks best with **6 or more** tiles.

### Add a project to the carousel
Copy one block and paste it after the last one (don't forget the comma between blocks):
```js
{
  title: 'My new project',
  description: 'What it does and why it matters.',
  thumbnail: 'Assets/projects/new.png',
  tags: ['Figma', 'Notion'],
  links: [
    { label: 'Code', url: 'https://github.com/you/repo' },
    { label: 'Live demo', url: 'https://example.com' },
  ],
},
```
To remove a project, delete its whole `{ … },` block. The dots and arrows update by themselves.
Remove a link by deleting its `{ label…, url… }` line (e.g. no live demo).

### Slow down / stop the carousel auto-play
```js
autoplayMs: 6000,   // 6 seconds
autoplayMs: 0,      // never auto-advance
```

### Footer socials, phone and GitHub
```js
socials: [
  { label: 'LinkedIn', text: 'in', url: 'https://linkedin.com/in/you' },
],
phone:  { label: '+63 912 345 6789', href: 'tel:+639123456789' },
github: { label: 'GitHub profile', url: 'https://github.com/you' },
```
- `label` is read by screen readers; `text` is what appears in the circle.
- Hide the phone with `label: ''`; hide the GitHub button with `url: ''`.
- Links beginning with `https://` open in a new tab automatically.

### Turn off the intro loader
```js
loader: { enabled: false, ... }
```

### Remove the footer's "Placeholder content" note
```js
note: '',
```

---

## 7. Making the contact form send real emails

By default the form is a **demo** (it shows a thank-you message but sends nothing).

1. Create a free account at [formspree.io](https://formspree.io) and make a new form.
2. Copy the form URL, e.g. `https://formspree.io/f/abcdwxyz`.
3. Paste it into `inter.js`:
   ```js
   formEndpoint: 'https://formspree.io/f/abcdwxyz',
   ```
4. Open the site **from a real web address or a local server** (Formspree may not accept submissions from files opened directly from your computer). Send yourself a test message and confirm it in Formspree.

You can reword the messages visitors see in `contact.messages`.

---

## 8. Changing the look

### Colours — `style.css`, top of the file (section 1)
```css
:root {
  --forest: #0d5709;   /* main dark green */
  --leaf:   #3FE330;   /* bright green accent */
  ...
}
```
Change a hex value (e.g. `#0d5709` → `#1a3d8f`) and it updates everywhere. Use [coolors.co](https://coolors.co) to pick colours. Keep strong contrast between text and background so it stays readable.

| Variable | Used for |
|---|---|
| `--paper` | light page background, light text |
| `--mint` | soft green cards & secondary text |
| `--sun` | yellow accents, focus ring on dark areas |
| `--forest` | main dark green (hero, skills, footer, text) |
| `--leaf` | bright green buttons / progress bar |
| `--moss` | dark panels (cards, skill tiles, projects background) |
| `--olive` | hero gradient, input borders |
| `--lime` | lime highlights, links |
| `--gold` | featured screenshot gradient |

### Fonts
1. Pick fonts at [fonts.google.com](https://fonts.google.com) and copy the `<link>` they give you.
2. In `index.html`, replace the existing Google Fonts `<link href="https://fonts.googleapis.com/css2?…">`.
3. In `style.css` section 1, update `--head` (headings) and `--body` (text):
   ```css
   --head: 'Your Heading Font', 'Trebuchet MS', system-ui, sans-serif;
   --body: 'Your Body Font', system-ui, sans-serif;
   ```

### Hero photo position
If your cut-out photo doesn't sit where you want, edit `.hero-photo` in `style.css` (section 7): `left: 52%` moves it sideways, `bottom: -36px` moves it up/down, `width` changes its size.

### Hero size on large screens
On big monitors the hero content scales up automatically so it fills the banner. In `inter.js`, search for `HERO_DESIGN_WIDTH` / `HERO_DESIGN_HEIGHT` (default 1540 × 740 = the screen size where the hero looks "normal"):
- Make the hero **bigger** on large screens → lower these numbers (e.g. `1300` / `640`).
- Make it **smaller** → raise them (e.g. `1800` / `900`).
- Turn scaling **off** → set both to a very large number like `99999`.

Smaller screens and phones are never scaled down.

---

## 9. Page title, description and tab icon — `index.html`

At the top of `index.html`:
```html
<title>Portfolio Mockup 3 | Project Manager</title>
<meta name="description" content="Portfolio of a project manager.">
```
Change both to your own text. They control the browser-tab title and what Google shows.

For a tab icon: save a small square PNG as `Assets/favicon.png`, then remove the `<!--` and `-->` around the `<link rel="icon" …>` line.

---

## 10. Reordering or removing a section — `index.html`

Each section is clearly labelled with a comment banner (`<!-- ===== ABOUT ===== -->`).

- **Remove** a section: delete everything from its `<section …>` to its `</section>`. If you remove one, also remove its link from `nav.links` / `footer.links` in `inter.js`.
- **Reorder** sections: cut and paste whole `<section>` blocks. The sections that "slide up" over each other have the class `sheet`; keep each block together.
- Removing the **hero, about, skills, featured or carousel** section entirely will cause a console error, because `inter.js` expects them. To hide one safely, add `style="display:none"` to its opening tag instead.

---

## 11. Publishing your site

Upload the whole `Portfolio` folder (keep the structure the same) to any static host, for example:
- **GitHub Pages** (free) · **Netlify** (drag-and-drop the folder) · **Vercel** · **Cloudflare Pages**

`index.html` must stay at the top level of the folder.

---

## 12. Troubleshooting

| Problem | Likely fix |
|---|---|
| Page is blank / stuck on the loader | A typo in `inter.js`. Press `F12` → Console for the line number. Most common: missing quote or comma. |
| My image doesn't show | Check the path and spelling (case-sensitive), file is inside `Assets/`, and there are no spaces in the file name. |
| Hero photo looks cropped or off-centre | Use a 3:4 cut-out PNG/WebP; adjust `.hero-photo` in `style.css` (see section 8). |
| Fonts look different | You're offline or the Google Fonts link was changed — fonts load from the internet. |
| Changes don't appear | Save the file, then hard-refresh (`Ctrl+Shift+R`). |
| Text shows `&amp;` or odd characters | Not needed — just type `&` normally; the site handles it. |
| Visitors with "reduced motion" see no animation | That's intentional (accessibility). |

---

## 13. Quick reference: what NOT to rename

- Element `id`s and `data-…` attributes in `index.html` (e.g. `id="hero-photo"`, `data-text="…"`) — `inter.js` uses them.
- The class names `hero`, `sheet`, `reveal`, `skeleton`, `hero-in` — the styles and animations rely on them.
- The file names `style.css` and `inter.js` — unless you also update the `<link>` / `<script>` lines in `index.html`.
