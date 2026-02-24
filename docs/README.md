# Migdal Design System

This project is a React + Next.js design system built with Storybook.

## Stack

- React + TypeScript
- Tailwind CSS
- Storybook
- Design Tokens (CSS Variables)

---

## Running the Project

### Run Next.js app
npm run dev

### Run Storybook
npm run storybook

---

## Project Structure

src/
  components/      → UI components
  app/globals.css  → Design tokens & fonts
  .storybook/      → Storybook config
  public/Font      → Custom Migdal fonts

---

## How to Add a New Component

1. Create component inside `src/components`
2. Create a matching `ComponentName.stories.tsx`
3. Add variants as stories
4. Verify design in Storybook

---

## Typography & Fonts

Custom Migdal fonts are loaded via `@font-face`  
Font family: `Migdal`

---

## Design System Philosophy

Components must:
- Use design tokens only
- Avoid hard-coded values
- Be reusable and variant-based
- Be validated in Storybook before usage
