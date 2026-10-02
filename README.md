# Michael Cuzzo — Personal Portfolio

A responsive, dark portfolio highlighting freelance projects, professional experience, technical skills, and education. Built with React and custom CSS.

## Run locally

```sh
npm ci
npm start
```

## Production build

```sh
npm run build
```

Run these commands from the repository root. The generated site is in `build`.

## GitHub Pages deployment

`.github/workflows/deploy-pages.yml` builds and deploys the site automatically on pushes to `master`. You can also run **Deploy portfolio to GitHub Pages** manually from the repository's Actions tab.

In **Settings → Pages → Build and deployment**, the source must be **GitHub Actions**. The workflow runs `npm ci` and `npm run build`, then publishes only `build/`. Publishing the repository root directly displays the README instead of building the React application.

The older `npm run deploy` command writes to a `gh-pages` branch; it is not used by this Actions deployment.

## Updating content

- Edit project, experience, and skill data in `src/App.jsx`.
- Update layout and responsive styles in `src/App.css`, and theme colors and fonts in `src/index.css`.
- Replace `public/Michael-Cuzzo-Resume.pdf` to update the view and download links.
- Update page metadata in `public/index.html`.

The site uses native links and expandable experience entries, keyboard focus indicators, a mobile navigation menu, and reduced-motion support. Contact links open email, LinkedIn, or GitHub directly.
