# UofT Alt Protein Project — Website

The website for the University of Toronto Alt Protein Project, built with React, Vite, and Tailwind CSS. It is deployed on Vercel.

- **Live site:** [uoftaltprotein.ca](https://uoftaltprotein.ca)
- **Contact:** [newsletter@uoftaltprotein.ca](mailto:newsletter@uoftaltprotein.ca)

## Tech stack

- [React 19](https://react.dev/) and [React Router 7](https://reactrouter.com/) for client-side routing
- [Vite 8](https://vite.dev/) for the dev server and builds
- [Tailwind CSS 4](https://tailwindcss.com/), through the `@tailwindcss/vite` plugin
- [Vercel Analytics](https://vercel.com/docs/analytics)
- ESLint and Prettier for linting and formatting

## Getting started

You need [Node.js](https://nodejs.org/) installed. Then run:

```bash
cd website
npm install
npm run dev
```

The dev server prints a local URL (usually http://localhost:5173).

## Scripts

| Command           | What it does                              |
| ----------------- | ----------------------------------------- |
| `npm run dev`     | Starts the dev server with hot reload     |
| `npm run build`   | Builds the production site into `dist/`   |
| `npm run preview` | Serves the production build locally       |
| `npm run lint`    | Runs ESLint                               |

## Project structure

```
website/
├── public/              Static files served as-is (favicon)
├── src/
│   ├── assets/          Images and logos
│   ├── components/      Shared layout (Navbar, Footer)
│   ├── pages/           One file per route
│   ├── App.jsx          Route definitions and page layout
│   ├── main.jsx         App entry point
│   └── index.css        Tailwind import and theme tokens
├── vercel.json          SPA rewrite so routes work on refresh
└── vite.config.js
```

## Pages

| Route       | File                     |
| ----------- | ------------------------ |
| `/`         | `src/pages/Home.jsx`     |
| `/Events`   | `src/pages/Events.jsx`   |
| `/CAPS`     | `src/pages/CAPS.jsx`     |
| `/WhoAreWe` | `src/pages/WhoAreWe.jsx` |
| `/TheTeam`  | `src/pages/TheTeam.jsx`  |
| `/JoinUs`   | `src/pages/JoinUs.jsx`   |

### Adding a page

1. Create the component in `src/pages/`.
2. Add a `<Route>` for it in `src/App.jsx`.
3. Add it to the `pages` array in `src/components/Navbar.jsx` so it shows up in the navbar.

## Styling

Colours and fonts are defined as Tailwind theme tokens in `src/index.css` (for example `bg-app-gradient`, `text-seaweed`, `bg-ocean`). Use these tokens rather than hard-coding hex values.

The navbar is responsive. On screens 1024px and wider (Tailwind's `lg` breakpoint) the links sit in a single row. Below that they collapse into a hamburger menu.

## Code style

Prettier is configured to use single quotes and no semicolons (see `.prettierrc`). Run `npm run lint` before committing.

## Deployment

The site deploys on Vercel and is served at [uoftaltprotein.ca](https://uoftaltprotein.ca). `vercel.json` sends every path to `index.html` so React Router can handle routes like `/Events` when the page is opened or refreshed directly.
