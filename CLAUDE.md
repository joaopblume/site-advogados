# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build and Run Commands
- Run local server: `python -m http.server` or `npx serve`
- Preview site: Open browser to `http://localhost:8000` or `http://localhost:3000`

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