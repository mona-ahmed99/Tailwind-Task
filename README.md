# Tailwind Dashboard

A responsive React dashboard built with Vite and Tailwind CSS.

## Theme approach

Colors are defined as CSS variables in `src/index.css` (`:root` and `.dark`) and mapped to semantic Tailwind tokens in `tailwind.config.js`. Dark mode uses the `class` strategy; the `useTheme` hook toggles the class and persists the choice in `localStorage`.

## Component strategy

Tailwind `@layer components` define reusable styles (`btn`, `card`, `input`, `badge`). React components compose the dashboard layout and use those classes. Custom utilities (`center-flex`, `text-muted`, `stack-sm`) keep markup concise.

## Run

```bash
npm install
npm run dev
```

Use `npm run build` for production and `npm run preview` to preview the build.
