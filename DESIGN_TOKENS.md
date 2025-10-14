# Southern Skies Dermatology - Design Tokens

This document contains all design specifications for recreating the website in Figma.

## Color Palette

### Primary Colors
```
Primary (Dark Blue): #1e3a8a
- Used for: Headers, main navigation, buttons, links
- RGB: rgb(30, 58, 138)
- Figma: Create color style "Primary"

Secondary (Yellow/Gold): #fbbf24
- Used for: CTA buttons, accents, highlights
- RGB: rgb(251, 191, 36)
- Figma: Create color style "Secondary"
```

### Neutral Colors
```
White: #ffffff
Black: #000000

Gray Scale:
- gray-50:  #f9fafb (lightest backgrounds)
- gray-100: #f3f4f6 (card backgrounds)
- gray-200: #e5e7eb (borders)
- gray-300: #d1d5db
- gray-400: #9ca3af
- gray-500: #6b7280
- gray-600: #4b5563 (secondary text)
- gray-700: #374151 (body text)
- gray-800: #1f2937
- gray-900: #111827 (headings)
```

### Gradient Colors
```
Blue Gradient (Hero sections):
- from-primary: #1e3a8a
- via-blue-700: #1d4ed8
- to-blue-800: #1e40af

Usage: Linear gradient 45° angle
```

## Typography

### Font Family
```
Primary Font: System Font Stack
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif

Figma equivalent: Use "Inter" or "SF Pro" for similar look
```

### Font Sizes
```
text-xs:   12px / 0.75rem    (tags, labels)
text-sm:   14px / 0.875rem   (secondary text)
text-base: 16px / 1rem       (body text)
text-lg:   18px / 1.125rem   (large body)
text-xl:   20px / 1.25rem    (subheadings)
text-2xl:  24px / 1.5rem     (section titles)
text-3xl:  30px / 1.875rem   (page headings)
text-4xl:  36px / 2.25rem    (major headings)
text-5xl:  48px / 3rem       (hero headings)
text-6xl:  60px / 3.75rem    (large hero)
text-7xl:  72px / 4.5rem     (XL hero)
```

### Font Weights
```
font-normal:  400 (body text)
font-medium:  500 (navigation, buttons)
font-semibold: 600 (emphasis)
font-bold:    700 (headings, CTA)
```

### Line Heights
```
leading-tight:   1.25  (headings)
leading-snug:    1.375 (subheadings)
leading-normal:  1.5   (body text)
leading-relaxed: 1.625 (large paragraphs)
```

## Spacing System

Based on 4px base unit (Tailwind default):

```
1:  4px   (0.25rem)
2:  8px   (0.5rem)
3:  12px  (0.75rem)
4:  16px  (1rem)
5:  20px  (1.25rem)
6:  24px  (1.5rem)
8:  32px  (2rem)
10: 40px  (2.5rem)
12: 48px  (3rem)
16: 64px  (4rem)
20: 80px  (5rem)
24: 96px  (6rem)
32: 128px (8rem)
```

### Common Spacing Patterns
```
Card padding: 24px (p-6)
Section padding vertical: 80px (py-20)
Section padding horizontal: 24px (px-6)
Button padding: 24px horizontal, 16px vertical (px-6 py-4)
Grid gap: 32px (gap-8)
```

## Layout System

### Container Widths
```
max-w-7xl: 1280px (main content container)
max-w-4xl: 896px  (text-heavy content)
max-w-3xl: 768px  (narrow content)
max-w-2xl: 672px  (very narrow)
```

### Breakpoints
```
sm:  640px  (mobile landscape)
md:  768px  (tablet)
lg:  1024px (desktop)
xl:  1280px (large desktop)
2xl: 1536px (extra large)
```

### Grid System
```
Desktop: 3 columns (grid-cols-3)
Tablet:  2 columns (auto-adjust)
Mobile:  1 column (stack)

Gap: 32px (gap-8)
```

## Components

### Header
```
Height: auto
Background: #ffffff
Border bottom: 1px solid #e5e7eb
Position: sticky, top: 0
Z-index: 50
Shadow: 0 1px 3px rgba(0,0,0,0.1)

Logo:
- Width: 250px
- Height: 60px (auto-scale)
- Priority loading

Navigation Links:
- Font size: 16px (text-base)
- Font weight: 500 (font-medium)
- Color: #374151 (gray-700)
- Hover color: #1e3a8a (primary)
- Spacing: 24px gap (space-x-6)
```

### Buttons

#### Primary Button (CTA)
```
Background: #fbbf24 (secondary)
Text color: #1e3a8a (primary)
Padding: 32px horizontal, 16px vertical
Border radius: 8px
Font weight: 700 (bold)
Font size: 18px (text-lg)
Hover: opacity 90%
Transition: all 200ms
Shadow: 0 20px 25px rgba(0,0,0,0.15)
```

#### Secondary Button (Outlined)
```
Background: transparent
Border: 2px solid #ffffff
Text color: #ffffff
Padding: 32px horizontal, 16px vertical
Border radius: 8px
Font weight: 700 (bold)
Font size: 18px (text-lg)
Hover: background rgba(255,255,255,0.1)
```

### Cards
```
Background: #ffffff
Border: 1px solid #e5e7eb
Border radius: 12px
Padding: 24px
Shadow: 0 1px 3px rgba(0,0,0,0.1)
Hover shadow: 0 25px 50px rgba(0,0,0,0.25)
Transition: all 300ms
Hover: transform translateY(-8px)
```

### Hero Section
```
Background: Linear gradient 45° from #1e3a8a to #1e40af
Text color: #ffffff
Padding vertical: 96px (mobile), 128px (desktop)
Padding horizontal: 24px

Overlay: rgba(0,0,0,0.1)

Heading:
- Size: 48px (mobile), 72px (desktop)
- Weight: 700 (bold)
- Line height: 1.25 (leading-tight)
- Color: #ffffff

Subtext:
- Size: 20px (mobile), 24px (desktop)
- Weight: 400 (normal)
- Color: #bfdbfe (blue-100)
- Line height: 1.625 (leading-relaxed)
```

### Provider/Service Cards
```
Image height: 256px (h-64)
Image aspect: cover, center
Border radius top: 12px
Hover: Image scale 110%, duration 500ms

Content padding: 24px
Title size: 24px (text-2xl)
Title weight: 700 (bold)
Title color: #111827 (gray-900)
Title hover: #1e3a8a (primary)

Body text: 16px, #4b5563 (gray-600)
Line height: 1.625 (leading-relaxed)

Tags:
- Size: 12px (text-xs)
- Background: #eff6ff (blue-50)
- Text: #1e3a8a (primary)
- Padding: 12px horizontal, 4px vertical
- Border radius: 9999px (full)
- Gap: 8px
```

### Navigation Dropdown
```
Position: absolute
Background: #ffffff
Width: 224px (w-56) or 256px (w-64)
Shadow: 0 25px 50px rgba(0,0,0,0.25)
Border radius: 8px
Padding vertical: 8px
Initial: opacity 0, invisible
Hover parent: opacity 100, visible
Transition: 200ms
Z-index: 50

Links:
- Padding: 16px horizontal, 8px vertical
- Color: #374151 (gray-700)
- Hover background: #f9fafb (gray-50)
- Hover color: #1e3a8a (primary)
```

### Mobile Menu
```
Display: block on mobile (< 768px), hidden on desktop
Padding vertical: 16px
Space between items: 12px

Links:
- Display: block
- Color: #374151 (gray-700)
- Hover: #1e3a8a (primary)
- Font weight: 500 (medium)
- Indented items: 16px left padding
```

## Shadows

```
shadow-sm:  0 1px 2px rgba(0,0,0,0.05)
shadow:     0 1px 3px rgba(0,0,0,0.1)
shadow-md:  0 4px 6px rgba(0,0,0,0.1)
shadow-lg:  0 10px 15px rgba(0,0,0,0.1)
shadow-xl:  0 20px 25px rgba(0,0,0,0.15)
shadow-2xl: 0 25px 50px rgba(0,0,0,0.25)
```

## Border Radius

```
rounded:    4px
rounded-lg: 8px
rounded-xl: 12px
rounded-full: 9999px (pills/circles)
```

## Transitions

```
Default: all 200ms ease
Hover effects: 300ms ease
Image zoom: 500ms ease
```

## Icons & Emojis

Currently using:
- SVG icons for arrows (chevrons)
- Emoji for feature badges (🏆, 📍, 💙)
- Size: 16px (w-4 h-4) for small, 24px for medium

## Images

### Logo
- Path: /ssd-logo.png
- Width: 250px
- Height: 60px (auto)
- Format: PNG with transparency

### Provider Images
- Aspect ratio: 4:5 (portrait)
- Height: 320px (h-80)
- Object fit: cover
- Position: center

### Service Images
- Aspect ratio: 16:9 (landscape)
- Height: 256px (h-64)
- Object fit: cover

## Accessibility

```
Focus rings: 2px solid primary (#1e3a8a)
Focus offset: 2px
Minimum touch target: 44x44px
Minimum contrast ratio: 4.5:1 (text)
Alt text: Required on all images
ARIA labels: On icon-only buttons
```

## Animation Guidelines

```
Hover scale: 1.05 (scale-105)
Hover translate: -8px up (hover:-translate-y-2)
Transition timing: cubic-bezier(0.4, 0, 0.2, 1)
```

---

## How to Use This in Figma

### 1. Set Up Color Styles
- Create each color as a "Color Style" in Figma
- Name them: Primary, Secondary, Gray/50, Gray/100, etc.

### 2. Set Up Text Styles
- Create text styles for each heading level (H1-H6)
- Create styles for body, caption, button text

### 3. Set Up Spacing Grid
- Set base unit to 4px
- Use 8px grid for alignment

### 4. Create Components
- Header (with variants for mobile/desktop)
- Button (Primary/Secondary variants)
- Card (Provider/Service variants)
- Navigation Dropdown

### 5. Auto Layout
- Use Figma Auto Layout for flex containers
- Set spacing to match design tokens
- Use constraints for responsive behavior

### 6. Responsive Frames
- Desktop: 1440px width
- Tablet: 768px width
- Mobile: 375px width

---

## Quick Import Method

**Recommended: Use html.to.design Plugin**

1. Install plugin: https://www.figma.com/community/plugin/1159123024924461424/html-to-design
2. Open website: http://localhost:3000
3. Run plugin to capture live site
4. Import into Figma
5. Refine with these design tokens

**Alternative: Screenshot Method**

1. Take screenshots at each breakpoint
2. Import into Figma
3. Use as reference
4. Rebuild using these specifications
