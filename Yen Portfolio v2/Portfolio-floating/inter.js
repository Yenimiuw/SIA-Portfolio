/* ==========================================================================
   PORTFOLIO — inter.js
   --------------------------------------------------------------------------
   PART 1  CONFIG      ← the ONLY part you normally need to edit
   PART 2  HELPERS     small utilities (no need to touch)
   PART 3  RENDERERS   turn CONFIG into page content
   PART 4  BEHAVIOUR   carousel, contact pop-up, scroll effects, loader
   ========================================================================== */


/* ==========================================================================
   PART 1 — CONFIG
   Edit the text between the quotes. Keep the quotes, commas and brackets.

   Shortcuts you can use inside any text:
     {name}  → your site.name        {year} → the current year

   Images: put files in the Assets/ folder and write the path, e.g.
     src: 'Assets/profile.webp'
   Leave src as '' to keep the grey placeholder.
   Links: use '#section-id' for on-page links or a full 'https://…' address.
   ========================================================================== */
const CONFIG = {

  /* ---------------- Site-wide ---------------- */
  site: {
    name: 'Yen Labasa',                       // nav logo, footer, and {name}
  },

  /* ---------------- Intro loader ---------------- */
  loader: {
    enabled: true,                           // false = skip the loader entirely
    text: 'Getting things ready',
    minDurationMs: 1000,                     // shortest time it stays on screen
    showOncePerSession: true,                // true = only on the first visit per browser tab
  },

  /* ---------------- Top navigation ---------------- */
  nav: {
    links: [
      { label: 'Home',     href: '#top' },
      { label: 'About',    href: '#about' },
      { label: 'Projects', href: '#projects' },
    ],
    buttonLabel: 'Get in touch',              // opens the contact pop-up
  },

  /* ---------------- Hero (first screen) ---------------- */
  hero: {
    greeting: "Hello, I'm a",
    title: ['Project', 'Manager'],            // each item is one line of the big headline

    philosophy: {
      heading: 'To Strive for Innovation',
      text: 'I believe in the art of preparation and the fruit of hard work. Anything can be met and will be met in due time with strong persistence toward your goals.',
      buttonLabel: 'Learn more',
      buttonLink: '#about',
    },

    // Cut-out portrait (transparent PNG/WebP, 3:4 ratio works best)
    photo: {
      src: 'Assets/Yen_Bannerv2.png',                               // e.g. 'Assets/hero-photo.png'
      alt: 'Portrait of {name}',
      placeholder: 'Your photo (cut-out PNG / WebP)',
    },

    // Floating chips. Numbers (#01, #02…) are added automatically.
    roles: [
      'AWS Cloud Cadet',
      'Brand Ambassador',
      'Chief Deputy Marketing Director',
      'GDG Tech Lead',
    ],

    // Two logo groups. Set src to show a logo; leave '' for a "Logo" placeholder chip.
    organizations: [
      {
        heading: "Organizations I've been with",
        logos: [
          { name: 'AWS', src: 'Assets/AWS-logo.png' },          // e.g. { name: 'GDG', src: 'Assets/logos/gdg.png' }
          { name: 'GDG', src: 'Assets/GDG-logo.png' },
          { name: 'Flaremula', src: 'Assets/FL-logo.png' },
        ],
      },
      {
        heading: "Organizations I've collaborated with",
        logos: [
          { name: 'AWS', src: 'Assets/AWS-logo.png' },          // e.g. { name: 'GDG', src: 'Assets/logos/gdg.png' }
          { name: 'GDG', src: 'Assets/GDG-logo.png' },
          { name: 'Flaremula', src: 'Assets/FL-logo.png' },
        ],
      },
    ],
  },

  /* ---------------- About ---------------- */
  about: {
    heading: "I'm {name}",
    text: "I'm a project manager who keeps people, deadlines and details moving in the same direction. Outside of management, I'm a bubbly and outgoing person who enjoys collaborating with individuals who has a strong passion for their fields. I also love turtles and food.",
    stats: [
      { value: '6+',  label: 'Projects Lead' },
      { value: '6+',  label: 'Completed projects' },
      { value: '21+', label: 'Years old' },
    ],
    // Square photo works best
    photo: {
      src: 'Assets/PortfolioPic.png',                               // e.g. 'Assets/about-photo.jpg'
      alt: 'Photo of {name}',
      placeholder: 'Your photo',
    },
  },

  /* ---------------- Skills ----------------
     Each group has a title and one or more scrolling rows.
     Each row: speed (seconds per loop — bigger = slower),
               reverse (true = scrolls the other way),
               items: name, label (small text), icon (1–3 letters),
                      image (optional: 'Assets/icons/js.svg' replaces the letters)  */
  skills: {
    heading: 'Skills',
    iconColors: ['#ddfad4'],  // cycled across tiles

    groups: [
      {
        title: 'Project management tools',
        rows: [
          {
            speed: 36,
            reverse: false,
            items: [
              { name: 'Google Calendar', label: 'Planning',        image: 'Assets/icons8-google-calendar-48.png' },
              { name: 'Google Sheets',   label: 'Tracking',        image: 'Assets/icons8-google-sheets-48.png' },
              { name: 'Google Docs',     label: 'Documents',       image: 'Assets/icons8-google-docs-48.png' },
              { name: 'GitHub',          label: 'Version control', image: 'Assets/icons8-github-50.png' },
              { name: 'Notion',          label: 'Workspace',       image: 'Assets/icons8-notion-50.png' },
              { name: 'MS Teams',        label: 'Communication',   image: 'Assets/icons8-microsoft-teams-2019-48.png' },
              { name: 'Excel',           label: 'Analysis',        image: 'Assets/icons8-excel-50.png'  },
            ],
          },
        ],
      },
      {
        title: 'Tech skills',
        rows: [
          {
            speed: 44,
            reverse: true,
            items: [
              { name: 'JavaScript', label: 'Language', image: 'Assets/icons8-javascript-50.png' },
              { name: 'Node.js',    label: 'Backend',  image: 'Assets/icons8-nodejs-50.png' },
              { name: 'React.js',   label: 'Frontend', image: 'Assets/icons8-react-native-50.png' },
              { name: 'Next.js',    label: 'Frontend', image: 'Assets/icons8-next.js-50.png' },
              { name: 'HTML',       label: 'Language', image: 'Assets/icons8-html-5-50.png' },
              { name: 'CSS',        label: 'Styling',  image: 'Assets/icons8-css3-50.png' },
              { name: 'Java',       label: 'Language', image: 'Assets/icons8-java-50.png' },
            ],
          },
          {
            speed: 40,
            reverse: false,
            items: [
              { name: 'C',        label: 'Language', image: 'Assets/icons8-c-50.png'  },
              { name: 'C++',      label: 'Language', image: 'Assets/icons8-c++-50.png' },
              { name: 'Python',   label: 'Language', image: 'Assets/icons8-python-50.png' },
              { name: 'MySQL',    label: 'Database', image: 'Assets/icons8-mysql-logo-50.png' },
              { name: 'Supabase', label: 'Database', image: 'Assets/icons8-supabase-50.png' },
              { name: 'Vercel',   label: 'Hosting',  image: 'Assets/icons8-vercel-50.png'  },
              { name: 'Figma',    label: 'Design',   image: 'Assets/icons8-figma-50.png' },
              { name: 'PHP',    label: 'Language',   image: 'Assets/icons8-php-logo-50.png' },
            ],
          },
        ],
      },
    ],
  },

  /* ---------------- Featured project (big card) ---------------- */
  featured: {
    heading: 'Featured project',
    // 16:11 screenshot works best
    image: {
      src: 'Assets/5.png',                               // e.g. 'Assets/featured.png'
      alt: 'Screenshot of the featured project',
      placeholder: 'Project screenshot',
    },
    category: 'Project management',
    title: 'eMSME: eGOV PH',
    description: 'A centralized loaning platform that is partnered with the government to make requirement exchange easier for MSME owners.',
    button: { label: 'View project', url: 'https://github.com/myrson2/eMSME.git' },
  },

  /* ---------------- More projects (3D carousel) ---------------- */
  more: {
    heading: 'More projects',
    autoplayMs: 4200,                        // time between automatic slides; 0 = never auto-advance
    thumbnailPlaceholder: 'Thumbnail',
    projects: [
      {
        title: 'ICare+',
        description: 'A web based system that allows you to see the other information of other hospitals easily.',
        thumbnail: 'Assets/1.png',                       // 16:10 image, e.g. 'Assets/projects/one.png'
        tags: ['React.js', 'Node.js', 'Google Sheets', 'Vercel'],
        links: [{ label: 'Code', url: 'https://github.com/mave-o/Break2rue-ICare' }],
      },
      {
        title: 'AudSie',
        description: 'A block chain wallet that allows MSME owners to easily audit their transactions, and identify that a transaction did.',
        thumbnail: 'Assets/3.png',
        tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'React.js', 'Rust', 'Vercel'],
        links: [{ label: 'Code', url: 'https://github.com/mave-o/AudSie-Stellar' }],
      },
      {
        title: 'Isee',
        description: 'Monitors Student\'s activity while they are in an online lecture.',
        thumbnail: 'Assets/Isee.png',
        tags: ['Node.js', 'React.js', 'Supabase', 'Vercel'],
        links: [{ label: 'Code', url: 'https://github.com/Yenimiuw/Isee' }, { label: 'Live demo', url: 'https://isee-frontend.vercel.app/' }],
      },
      {
        title: 'FinProject: Payroll Utility',
        description: 'A small Java payroll utility that calculates base pay and deductions and integrates with a MySQL database for storage and configuration.',
        thumbnail: 'Assets/Payroll.png',
        tags: ['Java', 'MySQL'],
        links: [{ label: 'Code', url: 'https://github.com/Yenimiuw/Salary-Calculator' }],
      },
      {
        title: 'eMSME: eGOV PH',
        description: 'A centralized loaning platform that is partnered with the government to make requirement exchange easier for MSME owners.',
        thumbnail: 'Assets/5.png',
        tags: ['Javascript', 'Node.js', 'React.js', 'Supabase'],
        links: [{ label: 'Code', url: 'https://github.com/myrson2/eMSME.git'}],
      },
    ],
    viewMore: { label: 'View more on GitHub', url: 'https://github.com/Yenimiuw' },
  },

  /* ---------------- Footer ---------------- */
  footer: {
    blurb: 'Project manager based in your city, working with teams anywhere.',
    talkLabel: 'Prefer to talk now?',         // opens the contact pop-up
    links: [
      { label: 'About',    href: '#about' },
      { label: 'Skills',   href: '#skills' },
      { label: 'Projects', href: '#projects' },
    ],
    // Round social buttons. "text" is the 1–2 letters shown inside the circle.
    socials: [
      { label: 'LinkedIn',  image: 'Assets/icons8-linked-in-50.png', url: 'https://www.linkedin.com/in/danielle-pauleen-labasa-99313332a/' },
      { label: 'Instagram', image: 'Assets/icons8-instagram-50.png', url: 'https://www.instagram.com/yeneneney/' },
      { label: 'Facebook',  image: 'Assets/icons8-facebook-50.png',  url: 'https://www.facebook.com/yenyen.labasa.3' },
    ],
    phone:  { label: '+63 969 286 2066', href: 'tel:+630000000000' },   // set label: '' to hide
    github: { label: 'GitHub profile', url: '#' },                      // set url: '' to hide
    copyright: '© 2026 Danielle Labasa',
    note: '',
  },

  /* ---------------- Contact pop-up ---------------- */
  contact: {
    heading: 'Get in touch',
    intro: "Send a message and I'll reply by email.",
    submitLabel: 'Send message',
    cancelLabel: 'Cancel',
    // Paste your Formspree address here to receive real messages,
    // e.g. 'https://formspree.io/f/abcdwxyz'. Leave '' for demo mode.
    formEndpoint: '',
    messages: {
      demo:    'Thanks! Your message is on its way. (Demo only. Connect Formspree later.)',
      sending: 'Sending…',
      success: 'Thanks! Your message is on its way.',
      error:   'Something went wrong. Please try again or email me directly.',
    },
  },
};


/* ==========================================================================
   PART 2 — HELPERS  (no need to edit)
   ========================================================================== */
const $  = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

/* Make text safe to place inside HTML */
const escapeHTML = (value) =>
  String(value ?? '').replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/* Replace {name} and {year} shortcuts */
const fill = (value) =>
  String(value ?? '')
    .replace(/\{name\}/g, CONFIG.site.name)
    .replace(/\{year\}/g, new Date().getFullYear());

/* fill + escape: use for any text that goes into an HTML template */
const txt = (value) => escapeHTML(fill(value));

/* Read a value from CONFIG by path, e.g. get('about.heading') */
const get = (path) => {
  const value = path.split('.').reduce((obj, key) => (obj == null ? obj : obj[key]), CONFIG);
  if (value === undefined) console.warn(`[inter.js] Missing CONFIG value: ${path}`);
  return value;
};

/* Links that start with http open in a new tab */
const isExternal = (url) => /^https?:/i.test(url || '');
const linkAttrs = (url) =>
  `href="${escapeHTML(url || '#')}"${isExternal(url) ? ' target="_blank" rel="noopener noreferrer"' : ''}`;

/* Placeholder "person" icon shown in empty photo slots */
const ICON_PERSON =
  '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="8" r="4.5"/><path d="M3 22c0-5 4-8 9-8s9 3 9 8z"/></svg>';

/* Inner HTML of an image slot: the real image, or the grey placeholder */
function mediaHTML(image, { icon = false, eager = false } = {}) {
  if (image.src) {
    return `<img src="${escapeHTML(image.src)}" alt="${txt(image.alt)}"${eager ? '' : ' loading="lazy"'}>`;
  }
  return (icon ? ICON_PERSON : '') + `<span>${txt(image.placeholder)}</span>`;
}

/* Fill an existing element with an image slot */
function setMedia(el, image, options) {
  el.classList.toggle('has-img', Boolean(image.src));
  el.innerHTML = mediaHTML(image, options);
}


/* ==========================================================================
   PART 3 — RENDERERS  (build the page from CONFIG)
   ========================================================================== */

/* ---- Simple text / link bindings from index.html ---- */
function bindStaticContent() {
  $$('[data-text]').forEach((el) => { el.textContent = fill(get(el.dataset.text)); });

  $$('[data-lines]').forEach((el) => {
    el.innerHTML = (get(el.dataset.lines) || []).map(txt).join('<br>');
  });

  $$('[data-href]').forEach((el) => {
    const url = get(el.dataset.href);
    el.setAttribute('href', url || '#');
    if (isExternal(url)) { el.target = '_blank'; el.rel = 'noopener noreferrer'; }
  });
}

/* ---- Navigation ---- */
function renderNav() {
  $('#nav-links').innerHTML = CONFIG.nav.links
    .map((l) => `<li><a href="${escapeHTML(l.href)}">${txt(l.label)}</a></li>`)
    .join('');
}

/* ---- Hero ---- */
function renderHero() {
  setMedia($('#hero-photo'), CONFIG.hero.photo, { icon: true, eager: true });

  $('#hero-roles').innerHTML = CONFIG.hero.roles
    .map((role, i) =>
      `<li class="role tag" style="--i:${i}"><em>#${String(i + 1).padStart(2, '0')}</em>${txt(role)}</li>`)
    .join('');

  $('#hero-orgs').innerHTML = CONFIG.hero.organizations
    .map((group) => `
      <div>
        <h3>${txt(group.heading)}</h3>
        <div class="logos">${group.logos.map(logoHTML).join('')}</div>
      </div>`)
    .join('');
}

function logoHTML(logo) {
  return logo.src
    ? `<div class="tag has-img"><img src="${escapeHTML(logo.src)}" alt="${txt(logo.name)}"></div>`
    : `<div class="tag">${txt(logo.name)}</div>`;
}

/* ---- About ---- */
function renderAbout() {
  $('#about-stats').innerHTML = CONFIG.about.stats
    .map((s) => `<li><b>${txt(s.value)}</b><span>${txt(s.label)}</span></li>`)
    .join('');
  setMedia($('#about-photo'), CONFIG.about.photo, { icon: true });
}

/* ---- Skills (scrolling rows) ---- */
function skillTiles(items, colors, isDuplicate) {
  return items.map((item, i) => {
    const icon = item.image
      ? `<img src="${escapeHTML(item.image)}" alt="">`
      : txt(item.icon);
    return `<li class="tile"${isDuplicate ? ' aria-hidden="true"' : ''}>` +
             `<span class="tile-icon" style="background:${colors[i % colors.length]}">${icon}</span>` +
             `<b>${txt(item.name)}</b><small>${txt(item.label)}</small>` +
           `</li>`;
  }).join('');
}

/* The row is repeated 4× so the loop never shows a gap */
function skillTrack(items, colors) {
  return `<ul class="track">${skillTiles(items, colors, false)}` +
         `${skillTiles(items, colors, true)}${skillTiles(items, colors, true)}${skillTiles(items, colors, true)}</ul>`;
}

function renderSkills() {
  const colors = CONFIG.skills.iconColors;
  $('#skills-groups').innerHTML = CONFIG.skills.groups.map((group) => `
    <div class="wrap"><h3 class="skills-subheading">${txt(group.title)}</h3></div>
    ${group.rows.map((row) =>
      `<div class="marquee${row.reverse ? ' reverse' : ''}" style="--t:${Number(row.speed) || 40}s">${skillTrack(row.items, colors)}</div>`
    ).join('')}`).join('');
}

/* ---- Featured project ---- */
function renderFeatured() {
  setMedia($('#featured-image'), CONFIG.featured.image);
}

/* ---- More projects (cards) ---- */
function projectCardHTML(project) {
  const thumb = { src: project.thumbnail, alt: project.title, placeholder: CONFIG.more.thumbnailPlaceholder };
  return `
    <article class="card" aria-roledescription="slide">
      <div class="skeleton${project.thumbnail ? ' has-img' : ''}">${mediaHTML(thumb)}</div>
      <div class="card-body">
        <h3>${txt(project.title)}</h3>
        <p>${txt(project.description)}</p>
        <ul class="tags">${project.tags.map((t) => `<li class="tag">${txt(t)}</li>`).join('')}</ul>
        <div class="card-links">${project.links.map((l) => `<a ${linkAttrs(l.url)}>${txt(l.label)}</a>`).join('')}</div>
      </div>
    </article>`;
}

function renderProjects() {
  $('#cards').innerHTML = CONFIG.more.projects.map(projectCardHTML).join('');
}

/* ---- Footer ---- */
function renderFooter() {
  const f = CONFIG.footer;

  $('#footer-links').innerHTML = f.links
    .map((l) => `<li><a href="${escapeHTML(l.href)}">${txt(l.label)}</a></li>`)
    .join('');

  const socials = f.socials
    .map((s) => {
      const content = s.image
        ? `<img src="${escapeHTML(s.image)}" alt="">`
        : txt(s.text);
      return `<a${s.image ? ' class="social-icon"' : ''} ${linkAttrs(s.url)} aria-label="${txt(s.label)}">${content}</a>`;
    })
    .join('');
  const phone = f.phone && f.phone.label
    ? `<a class="social-phone" href="${escapeHTML(f.phone.href)}">${txt(f.phone.label)}</a>` : '';
  const github = f.github && f.github.url
    ? `<a class="social-github" ${linkAttrs(f.github.url)} aria-label="${txt(f.github.label)}">${ICON_PERSON}</a>` : '';

  $('#socials').innerHTML = socials + phone + github;
}

/* Build everything (runs before the carousel and effects start) */
bindStaticContent();
renderNav();
renderHero();
renderAbout();
renderSkills();
renderFeatured();
renderProjects();
renderFooter();


/* ==========================================================================
   PART 4 — BEHAVIOUR  (no need to edit)
   ========================================================================== */
const prefersReducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- 3D project carousel ---------- */
const cards = $$('#cards .card');
const cardCount = cards.length;
const dotsBox = $('#dots');
const carousel = $('#carousel');
const cardStage = $('#cards');
let current = 0, paused = false, inView = false, swipeStartX = null;

dotsBox.innerHTML = cards.map((_, i) => `<button aria-label="Show project ${i + 1}"></button>`).join('');
const dotButtons = [...dotsBox.children];

/* Position every card relative to the one in the middle */
function showCard(index) {
  current = (index + cardCount) % cardCount;
  cards.forEach((card, i) => {
    let offset = i - current;
    if (offset > cardCount / 2) offset -= cardCount;
    if (offset < -cardCount / 2) offset += cardCount;
    const distance = Math.abs(offset);
    card.style.setProperty('--o', offset);
    card.style.setProperty('--a', Math.min(distance, 3));
    card.classList.toggle('far', distance > 2);
    card.toggleAttribute('inert', offset !== 0);
    card.setAttribute('aria-hidden', offset !== 0);
  });
  dotButtons.forEach((dot, i) => dot.setAttribute('aria-current', i === current));
}

if (cardCount) {
  dotButtons.forEach((dot, i) => { dot.onclick = () => showCard(i); });
  $('#prev').onclick = () => showCard(current - 1);
  $('#next').onclick = () => showCard(current + 1);

  carousel.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') showCard(current - 1);
    if (e.key === 'ArrowRight') showCard(current + 1);
  });

  /* Swipe / drag */
  cardStage.addEventListener('pointerdown', (e) => { swipeStartX = e.clientX; });
  addEventListener('pointerup', (e) => {
    if (swipeStartX === null) return;
    const dx = e.clientX - swipeStartX;
    swipeStartX = null;
    if (Math.abs(dx) > 45) showCard(current + (dx < 0 ? 1 : -1));
  });

  /* Auto-advance (pauses on hover/focus, when off-screen, or in a hidden tab) */
  ['mouseenter', 'focusin'].forEach((ev) => carousel.addEventListener(ev, () => { paused = true; }));
  ['mouseleave', 'focusout'].forEach((ev) => carousel.addEventListener(ev, () => { paused = false; }));
  new IntersectionObserver((entries) => { inView = entries[0].isIntersecting; }).observe(carousel);

  if (!prefersReducedMotion && CONFIG.more.autoplayMs > 0) {
    setInterval(() => {
      if (!paused && inView && !document.hidden) showCard(current + 1);
    }, CONFIG.more.autoplayMs);
  }

  showCard(0);
}

/* ---------- Contact pop-up ---------- */
const dialog = $('#contact');
const form = $('#contact-form');
const formStatus = $('#form-status');

$$('[data-open]').forEach((btn) => btn.addEventListener('click', (e) => {
  e.preventDefault();
  formStatus.textContent = '';
  dialog.showModal();
}));
$('#close-contact').onclick = () => dialog.close();
dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const { formEndpoint, messages } = CONFIG.contact;

  /* No endpoint set → demo mode */
  if (!formEndpoint) {
    formStatus.textContent = messages.demo;
    form.reset();
    return;
  }

  formStatus.textContent = messages.sending;
  try {
    const response = await fetch(formEndpoint, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: new FormData(form),
    });
    if (!response.ok) throw new Error(response.statusText);
    formStatus.textContent = messages.success;
    form.reset();
  } catch (err) {
    formStatus.textContent = messages.error;
  }
});

/* ---------- Scroll effects ----------
   Drives the progress bar, the hero "cover" effect and the featured
   screenshot motion. Uses transforms only, so it stays smooth. */
const hero = $('.hero');
const progressBar = $('#progress-bar');
const motionTargets = $$('[data-y],[data-s]');
const isWideScreen = matchMedia('(min-width:861px) and (min-height:561px)');
let scrollQueued = false;

/* Scale the hero content up on big screens so it fills the banner.
   HERO_DESIGN_WIDTH / HERO_DESIGN_HEIGHT = the screen size where the hero
   looks "normal" (scale 1). Bigger screens scale up proportionally;
   smaller screens never scale down. */
const HERO_DESIGN_WIDTH = 1540;
const HERO_DESIGN_HEIGHT = 740;

function updateHeroScale() {
  const scale = Math.max(1, Math.min(innerWidth / HERO_DESIGN_WIDTH, innerHeight / HERO_DESIGN_HEIGHT));
  hero.style.setProperty('--hero-scale', scale.toFixed(3));
}

function updateScrollEffects() {
  scrollQueued = false;
  const vh = innerHeight, y = scrollY;

  progressBar.style.transform =
    `scaleX(${Math.min(1, y / Math.max(1, document.documentElement.scrollHeight - vh))})`;

  if (prefersReducedMotion) return;

  hero.style.top = isWideScreen.matches ? Math.min(12, vh - hero.offsetHeight - 12) + 'px' : '';
  hero.style.setProperty('--p', isWideScreen.matches ? Math.min(1, y / vh).toFixed(3) : 0);

  for (const el of motionTargets) {
    const rect = el.parentElement.getBoundingClientRect();
    if (rect.bottom < -300 || rect.top > vh + 300) continue;
    const progress = Math.max(-1, Math.min(1, (rect.top + rect.height / 2 - vh / 2) / vh));
    const data = el.dataset;
    const scale = data.s ? 1 - data.s * Math.max(0, progress) : 1;
    el.style.transform = `translate3d(0,${(data.y || 0) * progress}px,0) scale(${scale})`;
  }
}

addEventListener('scroll', () => {
  if (!scrollQueued) { scrollQueued = true; requestAnimationFrame(updateScrollEffects); }
}, { passive: true });
addEventListener('resize', () => { updateHeroScale(); updateScrollEffects(); });
updateHeroScale();
updateScrollEffects();

/* ---------- Fade-in when scrolled into view ---------- */
const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) {
    entry.target.classList.add('visible');
    revealObserver.unobserve(entry.target);
  }
}), { threshold: .12 });
$$('.reveal').forEach((el) => revealObserver.observe(el));

/* ---------- Loader ---------- */
const loader = $('#loader');
const loaderCount = $('#count');

/* Remove the shimmer from an image slot (waits for its image to load) */
function revealSkeleton(el) {
  const img = el.querySelector('img');
  if (img && !img.complete) {
    const done = () => el.classList.add('loaded');
    img.addEventListener('load', done, { once: true });
    img.addEventListener('error', done, { once: true });
  } else {
    el.classList.add('loaded');
  }
}

/* Hide the loader, start the hero animation, then reveal image slots one by one */
function finishLoading() {
  loader.classList.add('hidden');
  document.body.classList.add('ready');
  setTimeout(() => $$('.skeleton').forEach((el, i) => setTimeout(() => revealSkeleton(el), i * 90)), 350);
}

const SEEN_KEY = 'portfolioLoaderSeen';
let alreadySeen = false;
try { alreadySeen = sessionStorage.getItem(SEEN_KEY); } catch (e) {}

const skipLoader = !CONFIG.loader.enabled || prefersReducedMotion ||
                   (CONFIG.loader.showOncePerSession && alreadySeen);

if (skipLoader) {
  finishLoading();
  loader.remove();
} else {
  const minTime = CONFIG.loader.minDurationMs;
  const startTime = performance.now();

  /* Count 0 → 100% */
  (function tick(now) {
    const progress = Math.min(1, (now - startTime) / minTime);
    loaderCount.textContent = Math.round(progress * 100);
    if (progress < 1) requestAnimationFrame(tick);
  })(startTime);

  /* Wait for fonts (max 1.5s) AND the minimum time */
  Promise.all([
    Promise.race([document.fonts ? document.fonts.ready : 0, new Promise((r) => setTimeout(r, 1500))]),
    new Promise((r) => setTimeout(r, minTime)),
  ]).then(() => {
    loaderCount.textContent = 100;
    try { sessionStorage.setItem(SEEN_KEY, 1); } catch (e) {}
    finishLoading();
    setTimeout(() => loader.remove(), 600);
  });
}
