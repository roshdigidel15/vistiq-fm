# Vistiq Spa Website

A beautiful, fully responsive luxury spa and wellness website built with React, TypeScript, and Vite.

## Features

- **Fully Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, elegant design with smooth animations
- **Component-Based Architecture** - Modular and maintainable code structure
- **TypeScript** - Type-safe development
- **Mobile-First Approach** - Ensures perfect display on all screen sizes

## Sections

- Hero with navigation
- Statistics showcase
- About section
- Services listing
- Product showcase
- Philosophy & values
- Spa packages
- Blog articles
- Newsletter subscription
- Footer with links

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Build

```bash
npm run build
```

Builds the app for production to the `dist` folder.

### Preview

```bash
npm run preview
```

Preview the production build locally.

## Technology Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **CSS3** - Styling with custom properties
- **Mobile Responsive** - Breakpoints at 480px, 768px, and 968px

## Project Structure

```
vistiq-spa/
├── src/
│   ├── components/
│   │   ├── Hero.tsx/css
│   │   ├── Statistics.tsx/css
│   │   ├── About.tsx/css
│   │   ├── Services.tsx/css
│   │   ├── Products.tsx/css
│   │   ├── Philosophy.tsx/css
│   │   ├── Packages.tsx/css
│   │   ├── Blog.tsx/css
│   │   ├── Newsletter.tsx/css
│   │   └── Footer.tsx/css
│   ├── App.tsx
│   ├── App.css
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Mobile Responsiveness

The website is fully responsive with breakpoints:
- **Desktop**: > 968px
- **Tablet**: 768px - 968px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

All components adapt seamlessly to different screen sizes with:
- Flexible grid layouts
- Responsive typography
- Touch-friendly navigation
- Optimized images and spacing

## License

This project was created for Vistiq Spa.
