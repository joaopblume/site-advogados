# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a professional law firm website for "Lacerda e Martins Advogados Associados" specializing in labor and social security law. The site is a single-page application with carousel, service sections, team profiles, articles, and contact information.

## Build and Run Commands
- Run local server: `python -m http.server` or `npx serve`
- Preview site: Open browser to `http://localhost:8000` or `http://localhost:3000`

## Architecture
- **Static Site**: Single HTML file with external CSS and JavaScript
- **Layout Structure**: Fixed header → Carousel hero → Services → Team → Articles → Contact → Footer
- **Key Components**:
  - Image carousel with auto-advance and manual navigation
  - Responsive card-based sections for services, team, and articles
  - Fixed WhatsApp contact button
  - Mobile-responsive navigation with JavaScript toggle
  - Scroll-based animations and header transparency effects

## Core Features
- **Carousel System**: Auto-advancing slides with dot/arrow navigation in `script.js:1-40`
- **Mobile Navigation**: Dynamic hamburger menu created in `script.js:92-153` 
- **Scroll Animations**: Intersection Observer API for card animations in `script.js:68-89`
- **WhatsApp Integration**: Floating button with pre-filled message

## File Structure
- `index.html`: Main page structure with semantic sections
- `styles.css`: Component-based CSS with CSS custom properties for theming
- `script.js`: Interactive features and responsive behavior
- `images/`: Organized subdirectories for carousel and team photos

## Code Style Guidelines

### HTML
- Use semantic HTML5 elements (header, section, footer)
- Maintain proper indentation (4 spaces)
- Include comments for major sections
- Use class-based styling with BEM-like naming

### CSS
- Use descriptive class names (kebab-case)
- Follow mobile-first responsive design principles
- Organize by component/section with clear comments
- Maintain color palette: primary (#063970), accent (#1e88e5), light (#f8f9fa)
- Use CSS custom properties (CSS variables) defined in `:root`

### JavaScript
- Use ES6+ features (arrow functions, template literals)
- Follow camelCase naming convention
- Create small, single-purpose functions
- Add descriptive comments for complex logic
- Handle errors gracefully with clear user feedback

### Images
- Store in `/images` directory with appropriate subdirectories
- Optimize for web (compression, appropriate dimensions)
- Use descriptive filenames in lowercase with hyphens