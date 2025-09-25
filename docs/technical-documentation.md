# Technical Documentation

## Overview
A simple, responsive personal portfolio built with **HTML, CSS, and JavaScript**.  
Sections: **About Me**, **Projects**, **Contact**.  
Interactive features: **Dark/Light theme toggle** and **Back-to-Top** button.

## Project Structure


 
## How to Run Locally
1. Download or clone the repo.  
2. Open `index.html` in a modern browser.  
_No build tools or backend required._

## Deployment
Deployed via **GitHub Pages**:  
`https://afrah-f.github.io/assignment-1/`

## HTML (index.html)
- Semantic sections: `<header>`, `<section id="about|projects|contact">`, `<footer>`.
- Project cards use `<article>` inside **Projects**.
- Internal anchor links for navigation.

## CSS (css/styles.css)
- Basic reset + typography.
- Layout: simple blocks with responsive image sizing.  
- Buttons and form styles for clarity.
- Optional dark-mode styles applied via a class on `html` or `documentElement` (toggle in JS).

## JavaScript (js/script.js)
- **Theme Toggle**: toggles a `dark-mode` class and stores preference in `localStorage`.
- **Back-to-Top**: shows a floating button after scrolling; smooth scroll to top on click.
- **Contact Form (demo)**: intercepts submit event, shows a confirmation message (no backend).

## Assets
- Images stored under `assets/images/` and referenced by relative paths in `index.html`.
- Filenames used:
  - `clubzone.png`
  - `online-gaming.png`
  - `saudi-electricity.png`

## Accessibility & Responsiveness
- Mobile-friendly viewport meta tag.
- Legible font sizes and color contrast.
- Form fields labeled and keyboard-friendly.
- Smooth scrolling (optional via CSS `scroll-behavior: smooth`).

## Future Improvements
- Add **Skills**/**Achievements** sections.
- Replace placeholder copy with more detailed project write-ups.
- Add screenshots and external links to project repos (if available).
- Consider a lightweight CSS framework or CSS Grid-based layout refinements.

