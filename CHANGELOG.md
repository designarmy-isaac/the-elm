# Changelog

## Version 1.0 (August 20, 2019)

Cleanup

- fixed NPM vulnerabilities --force
- upgraded caniuse browselist
- added `rev-all` to development dependencies and gulp
- wiped Readme and `index.html`

Removed Style Sherpa

- Uninstalled Style Sherpa
- Removed Style Sherpa from Gulpfile
- Removed Styleguide HTML from src

Edited Foundation SASS and JS pieces

- commented out unnecessary pieces in `app.scss`
- switched from `foundation.js` to foundation explicit pieces in `app.js`
- commented out unnecessary js pieces in `foundation-explicit-pieces.js`

Built out HTML templates

- added header, footer, analytics partials
- added `.no-js` to default template and `app.js`
- added Meta and Opengraph frontmatter to default template and index page
- TODO'd Google Analytics