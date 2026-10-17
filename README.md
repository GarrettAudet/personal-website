# Personal Website

My personal website brings together my background in software development, applied research, and business. This repository contains the React implementation and styling for the site.

## Stack

- React 18 and React Router
- CSS, GSAP, and React Spring for styling and animation
- `react-scripts` for development and production builds
- `gh-pages` for publishing the static build

## Local development

Install Node.js and npm, then run:

```sh
git clone https://github.com/GarrettAudet/PersonalWebsite.git
cd PersonalWebsite
npm install
npm start
```

Use the local URL printed by the development server. The repository does not pin a Node.js version.

## Project structure

- [`src/App.js`](src/App.js): routes for the landing and experience pages
- [`src/LandingPage/`](src/LandingPage/): landing-page components and styles
- [`src/Experience/`](src/Experience/): experience-page components and styles
- [`src/General/`](src/General/): shared site components
- [`src/Img/`](src/Img/): image assets imported by the application
- [`public/`](public/): HTML entry point, fonts, images, and other static files
- `build/`: production build output

## Build and test scripts

```sh
npm run build
npm test
```

`npm run build` generates the static site in `build/`. `npm test` starts the existing test runner; the current `src/App.test.js` still contains the starter “learn react” assertion and needs updating before it can serve as meaningful site coverage.

## Deployment

The scripts in [`package.json`](package.json) are configured for GitHub Pages:

```sh
npm run deploy
```

The `predeploy` script builds the site, then `gh-pages -d build` publishes the output. Run this only when ready to publish and with permission to push to the deployment repository.

The configured `homepage` is `https://www.garrettaudet.com`. Confirm the repository's Pages settings and custom-domain configuration before deploying; the configuration alone does not verify that the site is currently live.
