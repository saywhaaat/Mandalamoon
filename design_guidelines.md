# Creative Agency Portfolio - Design Guidelines

## Design Approach

**Reference-Based Strategy**: Drawing inspiration from high-end creative portfolio sites (The Mandala Moon's immersive imagery + Jo Malley Creative's clean grid presentation), combined with modern photography portfolio aesthetics (Unsplash, Behance). This approach prioritizes visual storytelling, immersive experiences, and artistic presentation over standardized design systems.

**Core Principles**:
- Imagery leads, text supports
- Breathing room enhances impact
- Minimal UI lets work shine
- Smooth, purposeful interactions

---

## Typography System

**Headline Font**: Modern serif or artistic sans-serif (Google Fonts: Playfair Display, Cormorant Garamond, or Montserrat)
- Hero headline: `text-5xl md:text-7xl lg:text-8xl font-light tracking-tight`
- Section headers: `text-4xl md:text-6xl font-light`
- Card titles: `text-2xl md:text-3xl font-normal`

**Body Font**: Clean sans-serif (Google Fonts: Inter, Work Sans, or DM Sans)
- Body text: `text-base md:text-lg leading-relaxed`
- Navigation: `text-sm md:text-base font-medium tracking-wide uppercase`
- Captions: `text-sm text-opacity-80`

**Hierarchy**: Extreme scale contrast between headlines and body, generous line-height (1.6-1.8), wide letter-spacing for uppercase elements.

---

## Layout System

**Spacing Primitives**: Use Tailwind units `p-4, p-8, p-12, p-16, p-20, p-24` for consistent rhythm
- Mobile: `py-12 px-4`
- Desktop sections: `py-20 md:py-32 px-8 md:px-16`
- Tight spacing within cards: `p-4 md:p-6`
- Hero padding: `py-32 md:py-48 lg:py-64`

**Container Strategy**:
- Full-width sections: `w-full` with inner `max-w-7xl mx-auto`
- Content blocks: `max-w-6xl mx-auto`
- Text content: `max-w-3xl mx-auto`

**Grid Systems**:
- Portfolio masonry: 1 column mobile, 2 columns tablet (`md:grid-cols-2`), 3 columns desktop (`lg:grid-cols-3`)
- Feature sections: 1-2 column layouts max
- Gaps: `gap-4 md:gap-6 lg:gap-8` for tight grids, `gap-8 md:gap-12` for feature layouts

---

## Component Library

### Navigation
**Header**: Fixed/sticky minimal nav, transparent over hero with backdrop blur
- Logo left, menu items right (`flex justify-between items-center`)
- Nav links: `space-x-8`, hover underline effect
- Mobile: Hamburger menu with full-screen overlay

### Hero Section
**Full-Width Immersive Hero**:
- Background: Large, high-quality photography/artwork covering full viewport height (`min-h-screen`)
- Overlay: Subtle gradient overlay for text readability (`bg-gradient-to-b from-black/30 to-black/60`)
- Content: Centered text overlay with artistic headline, subtitle, single CTA
- CTA button: Blurred glass-morphism background (`backdrop-blur-md bg-white/20 border border-white/30`)
- Position: `flex items-center justify-center min-h-screen text-center`

### Portfolio Grid
**Filterable Masonry Layout**:
- Filter buttons: Pill-style tabs above grid (`inline-flex gap-2 mb-8`)
- Grid: Masonry-style with varied image heights
- Image cards: Hover state reveals project title and category overlay (`group relative overflow-hidden`)
- Hover effect: Gentle zoom on image (`group-hover:scale-105 transition-transform duration-700`)
- Overlay: Dark gradient from bottom with text (`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100`)

**Lightbox/Modal**:
- Full-screen modal for viewing images/videos
- Dark background (`bg-black/95`)
- Close button top-right
- Navigation arrows for gallery browsing
- Video embeds: 16:9 aspect ratio container

### About Section
**Storytelling Layout**:
- Split layout: Text left, image/artwork right (alternating on desktop)
- Artist bio cards: Image, name, role, short bio
- Grid of 2-3 bios: `grid md:grid-cols-2 lg:grid-cols-3 gap-12`

### Contact Section
**Minimal Form Design**:
- Single column form: `max-w-2xl mx-auto`
- Inputs: Full-width, minimal borders, bottom border only (`border-b border-opacity-30`)
- Large input fields: `p-4 text-lg`
- Submit button: Primary CTA style with blur effect if over image
- Side info: Contact details, social links, location (if 2-column layout)

### Footer
**Minimal Footer**:
- Logo/name, social icons, copyright
- Single row layout: `flex justify-between items-center`
- Small text: `text-sm opacity-60`

---

## Animation Guidelines

**Use Sparingly - Quality Over Quantity**:
- Scroll-triggered fade-ins: Elements fade and slide up on enter viewport
- Filter transitions: Smooth cross-fade between portfolio categories (300ms)
- Image hover: Subtle zoom (scale-105, 700ms duration)
- Navigation: Smooth scroll behavior for anchor links
- Page transitions: Optional fade between sections

**No Animations For**:
- Text content loading
- Background changes
- Excessive parallax effects
- Continuous looping animations

---

## Images

**Hero Section**:
- **Large hero image**: Full-width, high-quality artistic photograph or painting showcasing agency's aesthetic
- Format: Landscape orientation, minimum 1920x1080px
- Treatment: Subtle dark overlay for text legibility

**Portfolio Grid**:
- **Varied portfolio images**: Mix of photography (portraits, landscapes), video thumbnails with play icons, and artwork samples
- Aspect ratios: Mix of portrait (3:4), landscape (16:9), and square (1:1) for visual interest
- Quality: High-resolution, professionally shot/rendered

**About Section**:
- **Team/artist photos**: Professional headshots or creative environmental portraits
- Format: Square or portrait orientation
- Style: Consistent treatment (color vs B&W, studio vs natural light)

**Where to Place**:
- Hero: Background image with text overlay
- Portfolio: Grid of project thumbnails (30-50 images for comprehensive portfolio feel)
- About: Team member photos in bio cards, optional large atmospheric image
- Contact: Optional background image with blur/overlay for visual interest

---

## Responsive Behavior

**Breakpoints**:
- Mobile: Base styles (< 768px)
- Tablet: `md:` prefix (768px - 1024px)
- Desktop: `lg:` prefix (1024px+)

**Key Adjustments**:
- Typography: Scale down 1-2 sizes on mobile
- Grid: Stack to single column on mobile, 2 columns tablet, 3 desktop
- Navigation: Hamburger menu below `md:` breakpoint
- Hero height: `min-h-[60vh]` mobile, `min-h-screen` desktop
- Spacing: Reduce padding by 50% on mobile

---

## Special Considerations

**Video Integration**:
- Portfolio videos: Thumbnail with play icon overlay, opens in lightbox modal
- Hero video (optional): Autoplay muted background video alternative to image
- Embedded players: YouTube/Vimeo embeds in 16:9 container

**Performance**:
- Lazy load images below fold
- Optimize hero image (WebP format, compressed)
- Limit initial portfolio items (12-15), load more on scroll or button

**Accessibility**:
- Image alt text for all portfolio work
- Keyboard navigation for filters and lightbox
- Focus states on interactive elements
- Sufficient contrast on text overlays