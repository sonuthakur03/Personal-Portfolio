---
name: Developer Portfolio System
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#bcc8cd'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#879397'
  outline-variant: '#3d494d'
  surface-tint: '#5cd5f6'
  primary: '#bfefff'
  on-primary: '#003641'
  primary-container: '#61dafb'
  on-primary-container: '#005e71'
  inverse-primary: '#00677c'
  secondary: '#ffed76'
  on-secondary: '#373100'
  secondary-container: '#e7d000'
  on-secondary-container: '#635800'
  tertiary: '#e9e6e6'
  on-tertiary: '#303030'
  tertiary-container: '#cdcaca'
  on-tertiary-container: '#565555'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#b1ecff'
  primary-fixed-dim: '#5cd5f6'
  on-primary-fixed: '#001f27'
  on-primary-fixed-variant: '#004e5e'
  secondary-fixed: '#fce425'
  secondary-fixed-dim: '#dec800'
  on-secondary-fixed: '#201c00'
  on-secondary-fixed-variant: '#504700'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#474746'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  code-block:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: '0'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1200px
  gutter: 24px
  section-padding-desktop: 120px
  section-padding-mobile: 64px
---

## Brand & Style

The brand personality is **precise, innovative, and authoritative**, reflecting a deep technical mastery of JavaScript and React. It avoids unnecessary decoration in favor of structural clarity and functional elegance. The target audience includes technical recruiters, engineering managers, and open-source collaborators who value clean code and performance.

The design style is **Minimalist Tech-Forward**. It utilizes a sophisticated dark aesthetic where depth is created through tonal shifts rather than heavy shadows. The interface should feel like a premium IDE or a high-end developer tool: focused, responsive, and efficient. Visual interest is generated through high-contrast typography, ample whitespace, and subtle geometric patterns that suggest grid systems and logic.

## Colors

The palette is rooted in a **Sophisticated Dark** theme. The background uses a near-black neutral (`#0D0D0D`) to reduce eye strain and provide a canvas for vibrant accents.

- **Primary (React Blue):** Used for primary actions, active navigation states, and highlighting key technical achievements.
- **Secondary (JS Yellow):** Reserved for cautionary notes, secondary highlights, or branding elements related to the JavaScript ecosystem.
- **Neutral/Surface:** A series of deep grays (`#1A1A1A`, `#222222`) are used to define component boundaries and card surfaces.
- **Success/Warning/Error:** Standard functional colors should be desaturated to fit the dark environment, ensuring they do not clash with the vibrant primary blue.

## Typography

This design system utilizes **Geist** for all primary interface elements to convey a modern, developer-centric aesthetic. Its clean, geometric sans-serif terminals ensure legibility at all sizes.

**JetBrains Mono** is used for labels, metadata, and code snippets to reinforce the technical nature of the portfolio. 

- **Headlines:** Use tight letter-spacing and heavy weights to create a strong visual hierarchy.
- **Body Text:** Maintain a generous line-height (1.6) to ensure long-form project descriptions remain readable.
- **Data Labels:** Use all-caps with slight letter-spacing for category labels (e.g., "TECH STACK", "YEAR").

## Layout & Spacing

The layout follows a **12-column fluid grid** for desktop, transitioning to a **4-column grid** for mobile devices. 

- **Grid Logic:** Use a 24px gutter to provide breathing room between project cards and content blocks.
- **Whitespace:** Emphasize "macro-whitespace" between sections (120px+) to allow the user's eyes to rest and focus on one project at a time.
- **Safe Areas:** Maintain a minimum 24px horizontal margin on mobile to prevent content from touching the screen edges.
- **Alignment:** Use strict left-alignment for all text blocks to maintain the minimalist, structural feel.

## Elevation & Depth

In this dark-themed design system, depth is communicated through **Tonal Layers** rather than traditional shadows. 

1. **Floor (Level 0):** The main background (`#0D0D0D`).
2. **Surface (Level 1):** Cards and navigation bars use `#161616`.
3. **Overlay (Level 2):** Modals, tooltips, or active dropdowns use `#222222` with a subtle 1px border of `#333333`.

To simulate light in a tech-forward way, interactive elements (like hovered cards) should use a **Subtle Glow** effect—a low-opacity drop shadow tinted with the Primary Blue (`#61DAFB`)—rather than a black shadow. This creates a "backlit" feel reminiscent of modern hardware.

## Shapes

The shape language is **geometric and disciplined**. A "Soft" roundedness (`0.25rem`) is applied to buttons and small UI elements to prevent the UI from feeling overly aggressive or sharp. 

For larger containers like project cards, a slightly larger radius (`0.5rem`) may be used to soften the layout, but never exceeding this to maintain the professional, engineered look. Geometric patterns—such as a subtle 32px dot grid or thin 1px lines—should be used sparingly in the background to reinforce the "blueprint" aesthetic.

## Components

- **Buttons:** Primary buttons feature a solid Primary Blue background with black text for maximum contrast. Secondary buttons should be "ghost" style with a 1px border and blue text.
- **Project Cards:** Use a Level 1 surface. On hover, the border color should transition to Primary Blue and a subtle glow should appear. Images within cards should have a slight grayscale filter that saturates on hover.
- **Chips (Tech Tags):** Small, low-contrast pills using the Label-SM typography. Background: `#222222`, Text: `#A0A0A0`.
- **Navigation:** A fixed top-bar with a glassmorphic background blur (10px) and 80% opacity to maintain context while scrolling.
- **Inputs:** Dark fields with a 1px border (`#333333`). On focus, the border changes to Primary Blue and the label (in JetBrains Mono) shifts color.
- **Code Snippets:** High-contrast syntax highlighting using a custom theme that matches the React/JS primary and secondary colors. Containers should have a "Copy" button that appears on hover.