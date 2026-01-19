# Dewan Restaurant - Design Guidelines

## Design Approach: Reference-Based (Hospitality + E-commerce)

**Primary Inspiration**: Airbnb (clean, image-forward), Uber Eats (food presentation), Mediterranean hospitality websites  
**Rationale**: Restaurant websites require strong visual storytelling through food photography, warm hospitality feel, and clear conversion paths (order/book). Drawing from hospitality leaders ensures trust and appetite appeal.

**Core Principles**:
- Food photography drives engagement - images are heroes
- Warm, inviting atmosphere through layout and spacing
- Clear conversion paths (Order, Book, Call)
- Mobile-first for on-the-go diners

---

## Typography

**Font Families** (Google Fonts):
- **Headings**: Playfair Display (elegant, sophisticated) or Cormorant Garamond (refined)
- **Body**: Inter (clean, readable) or Lato (friendly, professional)
- **Accent/Menu Items**: Nunito (warm, approachable)

**Type Scale**:
- Hero Headline: `text-5xl md:text-6xl lg:text-7xl font-bold`
- Section Headings: `text-3xl md:text-4xl font-semibold`
- Subsection/Card Titles: `text-xl md:text-2xl font-medium`
- Body Text: `text-base md:text-lg leading-relaxed`
- Small Text (hours, captions): `text-sm`

---

## Layout System

**Spacing Primitives**: Consistent use of Tailwind units: `2, 4, 6, 8, 12, 16, 20, 24, 32`

**Section Padding**: `py-16 md:py-24 lg:py-32` for major sections  
**Container**: `max-w-7xl mx-auto px-4 md:px-6 lg:px-8`  
**Card Spacing**: `gap-6 md:gap-8`  
**Element Spacing**: `space-y-4 md:space-y-6` for vertical rhythm

**Grid Patterns**:
- Menu Items: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Gallery: `grid-cols-2 md:grid-cols-3 lg:grid-cols-4` (masonry-style)
- Reviews: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

---

## Component Library

### Navigation
- **Desktop**: Horizontal menu with logo left, links center, "Order Online" CTA right
- **Mobile**: Hamburger menu with full-screen overlay
- Sticky on scroll with subtle shadow
- Height: `h-20 md:h-24`

### Hero Section
- **Full-width background image** of signature Turkish dishes (Adana Kebab or Mixed Grill)
- Overlay gradient for text readability
- Centered content with `max-w-4xl`
- Headline + subtext + button group (View Menu, Book Table, Order Online)
- Badge row below (rating, delivery options) with backdrop blur

### Buttons
- **Primary CTA**: Rounded `rounded-lg`, generous padding `px-8 py-4`, bold text
- **Secondary**: Outlined version with border
- **Hero Buttons**: Backdrop blur `backdrop-blur-md` with semi-transparent background
- Hover: Subtle scale `hover:scale-105 transition-transform`

### Cards (Menu Items, Reviews)
- **Structure**: Image (if applicable) + title + description + price/metadata
- Rounded corners `rounded-xl`
- Subtle shadow `shadow-md hover:shadow-xl`
- Padding: `p-6`
- Hover: Lift effect with transform

### Menu Section
- **Category Headers**: Decorative border accent, larger text
- **Menu Items**: Grid layout with item name, description, price
- Popular items: Badge indicator (⭐ Popular)
- Download PDF button: Outlined style

### Gallery
- **Masonry/Grid Layout**: Mixed aspect ratios for visual interest
- Hover: Slight zoom on images `hover:scale-105`
- Lightbox functionality for full-view
- Captions overlay on hover with backdrop blur

### Reviews
- **Card Style**: White background, rounded, shadow
- Star rating at top (⭐⭐⭐⭐⭐)
- Review text: Italicized, comfortable line-height
- Reviewer info: Small text, timestamp
- 3-column grid (desktop), 1-column (mobile)

### Contact/Location
- **Two-Column Layout**: Left = contact info + CTAs, Right = Google Maps embed
- Map: `rounded-xl overflow-hidden` with `h-96`
- Action buttons: Call, Directions, Order stacked vertically with icons

### Footer
- **Three-Column Layout**: Quick Links | Contact Info | Social
- Simple, clean design with subtle top border
- Copyright centered below columns
- Adequate padding `py-12`

---

## Images

### Required Images:
1. **Hero Background**: Large, appetizing shot of Turkish mixed grill or signature dish (full-bleed, 1920x1080+)
2. **About Section**: Interior shot showing warm décor and seating area (landscape, 800x600)
3. **Gallery Grid** (8-12 images):
   - Lahmajun close-up
   - Adana Kebab on plate
   - Turkish tea pot service
   - Baklava platter
   - Mixed grill spread
   - Restaurant interior (2-3 angles)
   - Table setting with Mediterranean touches
4. **Menu Category Icons** (optional): Simple line icons for each category

**Image Treatment**: 
- All food photos: Warm, natural lighting
- Maintain consistent color grading (warm tones, slight saturation boost)
- Use `object-cover` for consistency
- Lazy loading for performance

---

## Responsive Behavior

**Breakpoints**:
- Mobile: Base styles (< 768px)
- Tablet: `md:` prefix (768px - 1024px)
- Desktop: `lg:` prefix (1024px+)

**Mobile Optimizations**:
- Hero text: Smaller scale, tighter spacing
- Navigation: Full-screen menu overlay
- Grid layouts: Single column
- Contact section: Stack vertically
- Reduce padding to `py-12` on mobile

---

## Micro-interactions

**Sparingly Used**:
- Button hover: Subtle scale
- Card hover: Shadow increase + lift
- Image hover: Slight zoom
- Scroll reveal: Fade-in for sections (subtle, fast)
- Smooth scroll for anchor links

**No**: Complex animations, parallax effects, heavy JavaScript transitions

---

## Additional Notes

- **SEO Structure**: Semantic HTML5 (`<header>`, `<nav>`, `<section>`, `<article>`)
- **Performance**: Optimized images (WebP format), lazy loading, minimal dependencies
- **Accessibility**: Proper heading hierarchy, alt text for all images, sufficient contrast, keyboard navigation
- **Conversion Focus**: Prominent CTAs above fold, clear paths to Order/Book/Call throughout