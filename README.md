# SANBORN DESIGN - Website Redesign

**Simple. Sophisticated. Construction.**

This is a sample redesign site for Sanborn Design, a Ferndale, California-based general contractor specializing in architecture-trained craftsmanship for Northern California homes.

---

## 🎯 Project Overview

### The Repositioning

**Old Positioning:** Generic contractor template ("Mom and Pop construction stop")
**New Positioning:** Designer who builds — architecture-trained craftsmanship

**Key Differentiation:**
- Trained by a retired Bay Area architect
- Design-first construction philosophy
- Material honesty and intentional choices
- Intentionally small for direct involvement

### Tagline
**"Simple. Sophisticated. Construction."**

---

## 📁 Project Structure

```
/
├── index.html                 # Homepage
├── work/
│   ├── index.html            # Project gallery
│   ├── victorian-revival/    # Sample project detail page
│   └── [other-projects]/     # Additional project directories
├── approach/
│   └── index.html            # Philosophy & process
├── about/
│   └── index.html            # James's story
├── contact/
│   └── index.html            # Contact information
├── assets/
│   ├── css/
│   │   ├── reset.css         # CSS reset
│   │   └── main.css          # Design system & components
│   ├── js/
│   │   └── main.js           # Site interactions
│   └── images/
│       ├── sanborn1.svg      # Logo (SVG)
│       ├── sanborn1@2x.png   # Logo (PNG)
│       ├── projects/         # Project images (empty - needs photography)
│       └── about/            # About page images (empty - needs photography)
├── data/
│   └── projects.json         # Project data structure
├── IMAGE-REQUIREMENTS.md     # Complete image specifications
└── README.md                 # This file
```

---

## 🎨 Design System

### Typography
- **Headings:** Cormorant Garamond (serif) - elegant, architectural
- **Body:** Inter (sans-serif) - clean, readable
- **Hierarchy:** Clear scale from hero (6rem) to tiny (0.75rem)

### Color Palette
- **Background:** `#FFFFFF` (white)
- **Background Alt:** `#F5F2ED` (cream)
- **Background Dark:** `#2A2A2A` (charcoal)
- **Text:** `#1A1A1A` (near black)
- **Text Muted:** `#666666` (gray)
- **Accent:** `#8B7355` (warm brown)

### Design Philosophy
- Documentary editorial aesthetic (Cereal Magazine, Kinfolk)
- Generous whitespace
- Natural light photography
- Minimal processing
- "Confident quiet" voice

---

## 📄 Page Breakdown

### 1. Homepage (`/`)
**Sections:**
- Hero: Full-viewport with tagline overlay
- Featured Projects: 3 project cards
- Testimonial: Pull quote on cream background
- Approach Preview: 3 core principles
- Contact: Dark section with CTA
- Footer

### 2. Work Gallery (`/work/`)
**Purpose:** Portfolio showcase
**Contents:** 8 project cards in responsive grid

### 3. Project Detail Pages (`/work/[project-slug]/`)
**Template includes:**
- Hero image
- Project info (location, year, type, scope)
- Narrative description
- Image gallery (6+ images with captions)
- Client quote (if available)
- Next project link

**Sample project completed:** Victorian Revival

### 4. Approach (`/approach/`)
**Sections:**
- 4 core principles (architecture-trained, material honesty, small by choice, built for here)
- Process timeline (consultation → design → build → completion)
- Services list

### 5. About (`/about/`)
**Content:**
- James's background and training
- Why Ferndale
- Current work philosophy
- Family context
- Credentials

### 6. Contact (`/contact/`)
**Content:**
- Contact information (email, phone, location)
- What to expect (process overview)
- Project types
- CTAs

---

## 🖼️ Image Requirements

### Current Status
- ✅ **Logo files:** 2 files in place
- ❌ **Photography:** 0 of 58+ required images

### Priority Images Needed
1. **Homepage hero** (`hero-main.jpg`) - 2400×1600px
2. **3 featured project thumbnails** - 800×1067px each
3. **James portrait** (`about-james-portrait.jpg`) - 1200×1600px - **CRITICAL**
4. **Victorian Revival gallery** - 7 images (1 hero + 6 gallery)

### Complete Specifications
See **`IMAGE-REQUIREMENTS.md`** for:
- Complete image list with dimensions
- Photography direction and style guide
- File naming conventions
- Optimization guidelines

### Visual Reference
Open **`assets/images/placeholder-generator.html`** in a browser to see a visual representation of all required images with dimensions.

---

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- A local web server (for testing, optional)
- Python (for simple local server, optional)

### Local Development

1. **Clone/download this repository**

2. **Start a local server** (optional but recommended):

   Using Python 3:
   ```bash
   python3 -m http.server 8000
   ```

   Using Python 2:
   ```bash
   python -m SimpleHTTPServer 8000
   ```

   Using Node.js (if you have `http-server` installed):
   ```bash
   npx http-server -p 8000
   ```

3. **Open in browser:**
   ```
   http://localhost:8000
   ```

4. **Or simply open `index.html`** directly in your browser (some features may not work without a server)

### File Paths
All paths are absolute from root (`/assets/...`, `/work/...`) which requires a local server to work properly. If opening files directly, you may need to adjust paths to relative (`./assets/...`, `./work/...`).

---

## 📋 Project Data

### Adding/Editing Projects

All project data is stored in **`data/projects.json`**. Each project includes:

```json
{
  "id": "project-slug",
  "name": "Project Name",
  "location": "City, CA",
  "year": "2024",
  "type": "Restoration|New Build|Remodel|Addition|Concrete",
  "scope": "Brief scope description",
  "squareFeet": "2,400",
  "description": "Detailed project description",
  "heroImage": "project-slug-hero.jpg",
  "thumbnail": "project-slug-thumb.jpg",
  "gallery": [
    { "image": "project-slug-01.jpg", "caption": "Image caption" }
  ],
  "clientQuote": "Optional testimonial"
}
```

### Current Projects
1. Victorian Revival (Ferndale) - Restoration - **Sample page built**
2. Concrete + Redwood (Rio Dell) - New Build
3. Kitchen Reframe (Fortuna) - Remodel
4. Hillside Foundation (Ferndale) - Concrete
5. Barn Conversion (Petrolia) - Remodel
6. Coastal Deck (Trinidad) - Addition
7. Craftsman Exterior (Eureka) - Restoration
8. Modern Addition (Arcata) - Addition

---

## ✅ Completion Checklist

### ✓ Completed
- [x] Site structure and navigation
- [x] All 6 main page templates
- [x] CSS design system
- [x] JavaScript interactions
- [x] Responsive layouts
- [x] Project data structure
- [x] Sample project detail page (Victorian Revival)
- [x] Logo files in place
- [x] Image requirements documentation
- [x] Placeholder reference system

### ⚠️ Pending (Requires Photography)
- [ ] Homepage hero image
- [ ] All project thumbnail images (8)
- [ ] Project gallery images (48+)
- [ ] James portrait for About page
- [ ] Additional project detail pages (7 remaining)

### 🎯 Launch Blockers
1. **Photography shoot required** - Minimum 58 images
2. **Content review** - Verify all copy with James
3. **Contact information** - Update phone/email with real details
4. **Domain setup** - DNS configuration for sanborndesign.com
5. **Hosting** - Deploy to production server

---

## 🎨 Design References

The site design is inspired by:
- **Cereal Magazine** - Editorial photography style
- **Kinfolk** - Quiet, sophisticated aesthetic
- **Studio KO** - Architecture photography
- **Norwegian architecture sites** - Minimal, material-focused

### Key Design Principles
- Natural light only (no flash)
- Documentary style (not staged)
- Material texture emphasis
- Environmental context (fog, redwoods, Victorians)
- Negative space for breathing room

---

## 📱 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design works on all screen sizes
- Mobile-first approach
- CSS Grid and Flexbox (IE11 not supported)

---

## 🔧 Customization

### Updating Colors
Edit CSS custom properties in **`assets/css/main.css`**:
```css
:root {
  --color-background: #FFFFFF;
  --color-text: #1A1A1A;
  /* ... etc */
}
```

### Updating Typography
Change font imports in HTML `<head>` sections and update CSS variables:
```css
:root {
  --font-serif: 'Your Serif Font', serif;
  --font-sans: 'Your Sans Font', sans-serif;
}
```

### Updating Content
- **Homepage:** Edit `index.html`
- **Project data:** Edit `data/projects.json`
- **About story:** Edit `about/index.html`
- **Contact info:** Edit `contact/index.html`

---

## 📞 Production Information

### Sanborn Design
- **Name:** James Sanborn
- **License:** CA General B. Contractor #1087525
- **Location:** Ferndale, California (Humboldt County)
- **Website:** sanborndesign.com (current)
- **Email:** [To be provided]
- **Phone:** [To be provided]

### Service Area
Humboldt County & North Coast region

---

## 📝 Next Steps

### Phase 1: Content Finalization
1. Review and approve all page copy
2. Provide real contact information
3. Confirm project details and descriptions
4. Approve testimonials for use

### Phase 2: Photography
1. Schedule half-day photo shoot
2. Capture priority images (hero, thumbnails, portrait)
3. Capture project gallery images
4. Process and optimize images
5. Replace placeholder references

### Phase 3: Technical Setup
1. Choose hosting platform (Netlify, Vercel, traditional host)
2. Configure domain DNS
3. Set up SSL certificate
4. Test all pages and links
5. Optimize performance

### Phase 4: Launch
1. Final review and approval
2. Deploy to production
3. Set up redirects from old site
4. Monitor and fix any issues
5. Announce launch

---

## 🤝 Contributing

This is a sample redesign site. For the actual implementation:
1. Gather real photography
2. Update all content with real information
3. Test thoroughly across devices
4. Deploy to production hosting

---

## 📄 License

This website design and code is proprietary to Sanborn Design.

---

## 📮 Contact

For questions about this redesign:
- Review the production brief in the project documentation
- Check `IMAGE-REQUIREMENTS.md` for photography specifications
- Open `assets/images/placeholder-generator.html` for visual reference

---

**Last Updated:** February 2025
**Status:** Sample site structure complete, awaiting photography and content finalization
