# hannahcam — personal website

A static personal site for Hannah Cam, accounting student at Ontario Tech University. Plain HTML, CSS and a small amount of JavaScript. No build step, no framework, no backend. It is designed to be hosted on GitHub Pages.

## Structure

```
/
├── index.html          Home: headline, portrait, tax band, why tax, approach, summaries
├── tax.html            Filing seasons, tax items worked on, T1 workflow
├── experience.html     Work experience timeline and leadership
├── work.html           Four mini case studies (problem → what I did → result)
├── education.html      Degree, coursework, frameworks, software, languages
├── about.html          About, context, direction
├── resume.html         Contact details, PDF links, text version of the résumé
├── contact.html        Email, LinkedIn, location
├── 404.html            GitHub Pages "not found" page
├── robots.txt / sitemap.xml
├── assets/
│   ├── documents/      Hannah-Cam-Resume.pdf
│   ├── icons/          favicon.svg, favicon-32.png, apple-touch-icon.png
│   └── images/         og-image.png (social share preview, 1200×630); put hannah-cam.jpg here
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

### Live address

The repository is `hannahcamwork-dot/hannahcamwork-dot.github.io`, so the site is served at https://hannahcamwork-dot.github.io/. Canonical links, `og:url`, `og:image`, `robots.txt` and `sitemap.xml` all use that address. If the repository is ever renamed or moved to a custom domain, update those.

## Updating content

- **Portrait.** The homepage hero has a photo placeholder. Save a 4:5 portrait (at least 960 × 1200 px) as `assets/images/hannah-cam.jpg`, then in `index.html` replace the `<div class="portrait__placeholder" …>…</div>` with `<img src="assets/images/hannah-cam.jpg" alt="Hannah Cam" width="960" height="1200">`. The comment above the placeholder has the exact line.
- **Résumé PDF.** Export page 1 of the résumé from Word (File → Save As → PDF, pages 1 to 1) and replace `assets/documents/Hannah-Cam-Resume.pdf`, keeping the same filename. Then update the text version in `resume.html` to match.
- **Header and footer.** These are repeated in each HTML file (there is no build step). If you change a navigation link or the footer, update all eight pages.
- **Availability.** "Winter or Summer 2027 co-op" appears in `index.html` (hero facts and closing section), `about.html` and `contact.html`.
- **Tally chart.** The 400 marks in the homepage tax band are an inline SVG (80 groups of five). If the headline number changes, regenerate or edit the `<use>` elements.
- **Copyright year.** In the footer of each page.

## Design notes

- **Toolkit logos.** Small full-colour marks stored in `assets/icons/tools/`: QuickBooks and Intuit (for ProFile) from Simple Icons v16.34.0 (CC0) in their brand colours; Excel, Word and Outlook from vscode-icons (MIT); Tableau, Adobe and SAP from SVG Logos (CC0). They are used only to name software she has worked with. UFile has no freely available mark, so it keeps a typographic "T1" label.

- **Type.** Source Serif 4 for headings, figures and reflective text; IBM Plex Sans for body, labels and data. Both load from Google Fonts with system fallbacks.
- **Colour.** Baby-blue paper `#e4eef8`, navy ink `#12213a`, one blue accent `#24508f`, slate `#4b5b74` for secondary text. Tax sections and the T1 workflow sit on a navy field (`#13284a`) with faint ledger ruling. All text meets WCAG AA contrast.
- **Details.** Numbered section markers in the left rail, thin rules, double rules where a statement would underline a total, a hand-tally chart (one mark per return), CRA line references on the tax page, footnotes for where software was used, and an "Exhibit" treatment for the T1 workflow.
- **Motion.** Subtle fade-and-rise on load and on scroll, plus underline and arrow transitions. All of it is disabled under `prefers-reduced-motion`, and content is fully visible without JavaScript.
- **Accessibility.** Semantic landmarks and heading order, skip link, visible focus states, keyboard-operable menu (Escape closes it; the page behind it becomes inert), and labelled external links.

## Previewing locally

Any static server works, for example:

```
python -m http.server 8000
```

Then open http://localhost:8000.
