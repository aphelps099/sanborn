# SANBORN DESIGN

**Simple. Sophisticated. Construction.**

Single-page website for Sanborn Design — architecture-trained construction in Humboldt County.

---

## Design Approach

**Swiss Minimalist Aesthetic**
- Clean typography (Satoshi + General Sans from Fontshare)
- Subtle animations and scroll reveals
- Minimal color palette (fog white, redwood, charcoal)
- Single-page scrolling experience

**Key Features:**
- Fixed navigation with scroll state
- Intersection Observer scroll reveals
- Smooth anchor scrolling
- Responsive grid layouts
- Inline SVG logo with animation

---

## Structure

Single HTML file (`index.html`) with all styles and scripts inline:

**Sections:**
1. **Hero** - Full viewport with tagline
2. **Work** - 3 featured project cards
3. **Quote** - Client testimonial
4. **Approach** - Sticky sidebar with philosophy items
5. **Contact** - Dark section with contact details
6. **Footer** - Minimal with logo and copyright

---

## Typography

- **Satoshi** (700/900) - Headlines and emphasis
- **General Sans** (400/500/600) - Body text and labels

From Fontshare API (already loaded in `<head>`)

---

## Color Palette

```css
--fog-white: #F7F6F3      (background)
--ferndale-cream: #EDE8DF  (alt background)
--black: #0D0D0D           (dark sections)
--charcoal: #1A1A1A        (text)
--concrete: #6B6B6B        (muted text)
--soft-line: #E0DCD4       (borders)
--redwood: #8B4513         (accent - currently unused)
```

---

## How to Use

1. **Open directly:** Double-click `index.html` in browser
2. **Local server (optional):**
   ```bash
   python3 -m http.server 8000
   ```
   Then visit `http://localhost:8000`

All paths are relative (hash anchors for nav), so it works without a server.

---

## Customization

### Update Content

Edit the HTML directly:

**Hero tagline:** Line ~720
**Projects:** Lines ~739-768
**Quote:** Line ~774
**Approach items:** Lines ~786-806
**Contact info:** Lines ~818-833

### Update Colors

Edit CSS variables in `<style>` block (lines ~9-17)

### Update Logo

Replace SVG paths in navigation (~692-704) and footer (~840-851)

---

## Features

**Animations:**
- Logo fade-in on load (staggered SVG elements)
- Scroll indicator floating animation
- Project cards reveal on scroll
- Quote reveal on scroll
- Approach items reveal on scroll

**Interactions:**
- Nav changes background on scroll
- Logo color changes with nav state
- Project cards subtle hover overlay
- Smooth anchor scrolling
- Mobile menu toggle (< 600px)

---

## Responsive Breakpoints

- **> 1024px:** Full desktop layout
- **768px - 1024px:** Tablet - approach grid switches to single column
- **< 768px:** Mobile - projects grid single column, reduced padding
- **< 600px:** Small mobile - nav links hidden, hamburger menu shown

---

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid
- CSS Custom Properties
- Intersection Observer API
- Smooth scrolling

---

## Contact Information

**Sanborn Design**
James Sanborn
CA General B. Contractor #1087525

Email: James@sanborndesign.com
Phone: 707 953 9567
Location: Ferndale, California

---

## Status

✅ Site structure complete
⚠️ Needs real photography for project cards
⚠️ Needs real hero background image

Currently using gradient placeholders for projects and solid black for hero.

---

**Last Updated:** February 2025
**Design:** Single-page Swiss minimalist
