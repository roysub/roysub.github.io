# roysub.github.io

Personal portfolio site for **Subham Roy** — Technical Program & Delivery Professional.

Live at **[roysub.github.io](https://roysub.github.io/)**.

## Stack

- **React 19** + **Vite 8** — application and build tooling
- **Tailwind CSS 3.4** — styling, with a custom cool-blue palette and a LinkedIn-inspired dark theme
- **Framer Motion** — scroll-driven hero transitions, dock magnification, and section reveals
- **lucide-react** — icon set

## Getting started

```bash
npm install
npm run dev      # start the dev server at http://localhost:5173
```

Other scripts:

```bash
npm run build    # production build into dist/
npm run preview  # preview the production build locally
npm run lint     # eslint
```

## Project structure

```
public/            static assets served at the site root
  favicon.svg        "SR" monogram favicon
  og-image.png       1200x630 social preview card
  profile-photo.png  hero portrait
  SUBHAM-ROY-RESUME.pdf
  robots.txt, sitemap.xml
src/
  components/      one component per page section
  context/         theme provider + useTheme hook
  data/resume.js   all resume content lives here
```

### Updating content

Nearly all page content — roles, skills, education, certificates, contact details — is
defined in `src/data/resume.js`. Editing that single file updates the corresponding
sections; the components read from it and handle presentation only.

Job description bullets support `**bold**` markers, which are rendered as emphasised
text by the `HighlightText` helper in `src/components/ExperienceTimeline.jsx`.

## Theming

Dark mode uses Tailwind's `class` strategy. A first-time visitor gets light mode before
noon and dark mode from noon onward, based on their local clock; once they use the
toggle, that choice is saved to `localStorage` and always wins. The inline script in
`index.html` applies the theme before first paint to avoid a flash of the wrong theme.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and
publishes `dist/` to GitHub Pages. The repository's **Settings → Pages → Source** must be
set to **GitHub Actions**. The workflow can also be run manually from the Actions tab.
