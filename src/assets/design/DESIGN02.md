---
name: Technical Minimalism
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#3d494d'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#6d797d'
  outline-variant: '#bcc8cd'
  surface-tint: '#00677c'
  primary: '#00677c'
  on-primary: '#ffffff'
  primary-container: '#61dafb'
  on-primary-container: '#005e71'
  inverse-primary: '#5cd5f6'
  secondary: '#575e70'
  on-secondary: '#ffffff'
  secondary-container: '#d9dff5'
  on-secondary-container: '#5c6274'
  tertiary: '#7e5700'
  on-tertiary: '#ffffff'
  tertiary-container: '#ffc051'
  on-tertiary-container: '#734e00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b1ecff'
  primary-fixed-dim: '#5cd5f6'
  on-primary-fixed: '#001f27'
  on-primary-fixed-variant: '#004e5e'
  secondary-fixed: '#dce2f7'
  secondary-fixed-dim: '#c0c6db'
  on-secondary-fixed: '#141b2b'
  on-secondary-fixed-variant: '#404758'
  tertiary-fixed: '#ffdeac'
  tertiary-fixed-dim: '#fabc4d'
  on-tertiary-fixed: '#281900'
  on-tertiary-fixed-variant: '#604100'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  headline-xl:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.25'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  body-sm:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: '1.4'
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.6'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style

This design system is built upon the principles of **Technical Minimalism**. It is designed for high-performance interfaces where precision, clarity, and developer-centric aesthetics are paramount. The target audience includes engineers, data scientists, and power users who value speed and functional density over decorative flourishes.

The UI evokes a sense of focused calm through a restricted color palette, generous negative space, and sharp typographic hierarchy. It draws inspiration from modern IDEs and technical documentation, utilizing a "system-first" approach that prioritizes content legibility and logical flow. The emotional response should be one of reliability, intellectual rigor, and professional efficiency.

## Colors

The palette is anchored by a signature blue accent used exclusively for primary actions, progress indicators, and interactive highlights. This design system employs a semantic approach to color, ensuring accessibility and consistency across themes.

- **Primary Accent:** Used sparingly to draw attention to the most important "North Star" actions.
- **Surface Strategy:** Employs an off-white canvas in light mode to reduce eye strain, transitioning to deep blacks and charcoals in dark mode. 
- **Contrast:** High-contrast text ensures peak legibility. Neutral scales are used to create structural hierarchy without introducing visual noise.

## Typography

Typography is the core of this design system's identity. We utilize **Geist** for all UI elements and body copy due to its exceptional clarity and modern, technical proportions. **JetBrains Mono** is reserved for labels, metadata, and technical data points, signaling to the user that this information is precise and structured.

Headlines use tighter letter spacing and heavier weights to create impact, while body copy is optimized for long-form reading with comfortable line heights. On mobile, `headline-xl` and `headline-lg` should scale down by 20% to maintain visual balance.

## Layout & Spacing

This design system follows a rigid **8px grid system** (with a 4px half-step for fine details). The layout is primarily a **fixed-width grid** on desktop (1280px max-width) to ensure content density remains manageable, transitioning to a **fluid grid** on mobile devices.

- **Desktop (1024px+):** 12-column grid, 24px gutters, 48px margins.
- **Tablet (768px-1023px):** 8-column grid, 16px gutters, 24px margins.
- **Mobile (Below 768px):** 4-column grid, 16px gutters, 16px margins.

Spacing should be applied asymmetrically to create grouping; use `lg` (24px) or `xl` (40px) to separate distinct sections, and `sm` (8px) or `xs` (4px) to associate labels with their respective input fields.

## Elevation & Depth

To maintain a "flat" technical aesthetic, depth is communicated through **tonal layers** and **low-contrast outlines** rather than heavy shadows.

1.  **Base Layer:** The `bg-canvas` serves as the primary backdrop.
2.  **Raised Layer:** Cards and containers use `bg-surface` with a `border-subtle` outline. 
3.  **Interactive Layer:** Elements that can be moved or focused (like active cards or tooltips) may use a very subtle, diffused shadow: `0 4px 12px rgba(0,0,0,0.05)` in light mode.
4.  **Overlays:** Modals use a backdrop blur (12px) to maintain context while focusing the user's attention.

In dark mode, depth is strictly defined by surface luminosity—higher elements are lighter in color.

## Shapes

The shape language is "Soft-Technical." Elements use a consistent `0.25rem` (4px) corner radius to soften the clinical nature of the grid while maintaining a sharp, professional silhouette. 

- **Small Components:** Checkboxes, buttons, and input fields use `rounded` (4px).
- **Large Containers:** Cards and modals use `rounded-lg` (8px).
- **Interactive States:** Focus rings should follow the shape of the element they surround, offset by 2px.

## Components

### Buttons
- **Primary:** Solid `#61DAFB` background with `#111827` text. No gradients.
- **Secondary:** Transparent background with `border-strong` and `text-primary`.
- **Ghost:** No border or background unless hovered. Use for low-priority actions.

### Input Fields
- Use `label-mono` for field labels. 
- Background should be `bg-surface`.
- Focus state: Border color changes to `#61DAFB` with a subtle 2px glow.

### Cards
- Use `bg-surface` with a 1px `border-subtle`.
- Padding should be uniform at `lg` (24px).
- In dark mode, card surfaces are slightly lighter than the canvas to create depth.

### Chips & Tags
- Use `jetbrainsMono` for text at `code-sm` size.
- Pill-shaped (fully rounded) for status indicators; 4px rounded for metadata tags.

### Data Lists
- Horizontal rules should use `border-subtle`.
- Zebra striping is permitted for dense data tables using `bg-surface-alt`.