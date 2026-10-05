# hannahcam — personal website

A static personal site for Hannah Cam, accounting student at Ontario Tech University. Plain HTML, CSS and a small amount of JavaScript. No build step, no framework, no backend. It is designed to be hosted on GitHub Pages.

## Structure

```
/
├── index.html          Home
├── about.html          About, context, direction
├── experience.html     Work experience timeline and leadership
├── work.html           Tax experience, T1 workflow, three case studies
├── education.html      Degree, coursework, frameworks, software, languages
├── resume.html         Contact details, PDF links, text version of the résumé
├── contact.html        Email, LinkedIn, location
├── 404.html            GitHub Pages "not found" page
├── assets/
│   ├── documents/      Hannah-Cam-Resume.pdf
│   ├── icons/          favicon.svg, favicon-32.png, apple-touch-icon.png
│   └── images/         og-image.png (social share preview, 1200×630)
├── css/
│   ├── reset.css       Minimal reset
│   ├── variables.css   Colours, type scale, spacing, motion tokens
│   ├── global.css      Base type, layout grid, header, navigation, footer, motion, print
│   └── components.css  Page components (hero, ledger, timeline, workflow, cases, etc.)
├── js/
│   └── main.js         Mobile menu, scroll reveal, copy-email button
└── .nojekyll           Tells GitHub Pages to serve files as-is
```

Every path is relative, so the site works at a user site root (`username.github.io`) and under a project path (`username.github.io/repo-name/`).

## Deploying to GitHub Pages

1. Create a repository on GitHub and push these files to the `main` branch.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, then pick `main` and `/ (root)`.
4. The site will be live at the URL GitHub shows on that page, usually within a minute or two.

The original `.docx` résumé is excluded by `.gitignore`. It also contains cover-letter drafts and should stay off the public repository.

### After the URL is known

Social previews (LinkedIn, iMessage, Slack) need absolute URLs. Once the site is live, on each page:

- change `<meta property="og:image" content="assets/images/og-image.png">` to the full URL, e.g. `https://username.github.io/assets/images/og-image.png`
- add `<link rel="canonical" href="https://username.github.io/page.html">` and `<meta property="og:url" content="…">`

## Updating content

- **Résumé PDF.** Export page 1 of the résumé from Word (File → Save As → PDF, pages 1 to 1) and replace `assets/documents/Hannah-Cam-Resume.pdf`, keeping the same filename. Then update the text version in `resume.html` to match.
- **Header and footer.** These are repeated in each HTML file (there is no build step). If you change a navigation link or the footer, update all seven pages.
- **Availability.** "Winter or Summer 2027 co-op" appears in `index.html` (hero facts and contact band), `about.html` and `contact.html`.
- **Copyright year.** In the footer of each page.

## Design notes

- **Type.** Newsreader (editorial serif) for headings, figures and longer reflective text; IBM Plex Sans for body, labels and data. Both load from Google Fonts with system fallbacks.
- **Colour.** Ink `#1b1917`, paper `#f4efe5`, oxblood `#6e2c2c` as the single accent, stone `#645e55` for secondary text. All text meets WCAG AA contrast.
- **Details.** Section indices in the left rail, thin rules, a double rule under the figures strip (the way totals are underlined in a statement), footnotes for where software was used, and an "Exhibit" treatment for the T1 workflow.
- **Motion.** Subtle fade-and-rise on load and on scroll, plus underline and arrow transitions. All of it is disabled under `prefers-reduced-motion`, and content is fully visible without JavaScript.
- **Accessibility.** Semantic landmarks and heading order, skip link, visible focus states, keyboard-operable menu (Escape closes it; the page behind it becomes inert), and labelled external links.

## Previewing locally

Any static server works, for example:

```
python -m http.server 8000
```

Then open http://localhost:8000.
