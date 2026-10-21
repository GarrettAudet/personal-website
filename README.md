# Personal Website

My personal website brings together my background in software development, applied research, and business. This repository contains the React implementation and styling for the site.

## Stack

- React 18 and React Router
- CSS, GSAP, and React Spring for styling and animation
- `react-scripts` for development and production builds
- `gh-pages` for publishing the static build

## Local development

Use Node.js 24.19.0 (recorded in `.nvmrc`) and npm, then run:

```sh
git clone https://github.com/GarrettAudet/PersonalWebsite.git
cd PersonalWebsite
npm ci
npm start
```

Use the local URL printed by the development server. With nvm installed, run `nvm use` before installing dependencies.

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
npm run check:pages
npm test -- --watchAll=false --runInBand
```

`npm run build` generates the static site in `build/`. `check:pages` verifies that the source and built site contain the exact `CNAME` filename with `garrettaudet.com`. The tests exercise the actual landing page, Experience navigation, and direct Contact route. They do not verify visual animation or external services.

For continuous integration, set `CI=true` before these commands. In PowerShell use `$env:CI = 'true'`; in a POSIX shell prefix the build/test command with `CI=true`. Create React App treats build warnings as errors in CI; resolve warnings before treating a strict CI build as passing.

## Deployment

The scripts in [`package.json`](package.json) are configured for GitHub Pages:

```sh
npm run deploy
```

The `predeploy` script builds the site, then `gh-pages -d build` publishes the output. Run this only when ready to publish and with permission to push to the deployment repository.

The configured `homepage` is `https://www.garrettaudet.com`; the Pages custom domain and `public/CNAME` use `garrettaudet.com`. Preserve the existing apex/www setup when publishing. Pages publishes from the `gh-pages` branch root. Confirm the repository's Pages settings and custom-domain configuration before deploying; the configuration alone does not verify that the site is currently live.
