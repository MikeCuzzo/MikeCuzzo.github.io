# Michael Cuzzo — Personal Portfolio

A responsive, dark portfolio highlighting freelance projects, professional experience, technical skills, and education. Built with React and custom CSS.

## Run locally

```sh
cd my-site
npm ci
npm start
```

## Production build

```sh
cd my-site
npm run build
```

The generated site is in `my-site/build`. The existing `npm run deploy` command publishes that build to GitHub Pages.

## Updating content

- Edit project, experience, and skill data in `my-site/src/App.jsx`.
- Update layout and responsive styles in `my-site/src/App.css`, and theme colors and fonts in `my-site/src/index.css`.
- Replace `my-site/public/Michael-Cuzzo-Resume.pdf` to update the view and download links.
- Update page metadata in `my-site/public/index.html`.

The site uses native links and expandable experience entries, keyboard focus indicators, a mobile navigation menu, and reduced-motion support. Contact links open email, LinkedIn, or GitHub directly.
