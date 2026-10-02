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

Run these commands from the repository root. The generated site is in `build`. The existing `npm run deploy` command publishes that build to GitHub Pages.

## Updating content

- Edit project, experience, and skill data in `src/App.jsx`.
- Update layout and responsive styles in `src/App.css`, and theme colors and fonts in `src/index.css`.
- Replace `public/Michael-Cuzzo-Resume.pdf` to update the view and download links.
- Update page metadata in `public/index.html`.

The site uses native links and expandable experience entries, keyboard focus indicators, a mobile navigation menu, and reduced-motion support. Contact links open email, LinkedIn, or GitHub directly.
