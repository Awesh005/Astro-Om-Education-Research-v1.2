# Astro OM Education & Research - Run Instructions

The project has been prepared for production.

## Prerequisites
- Node.js (v20+ recommended)
- The dependencies have already been installed.

## Development Mode
To run the live development server:
```bash
npm run dev
```
*(Note: If you run into issues on Windows with `npm run dev`, you can bypass it by running `node ./node_modules/vite/bin/vite.js` directly).*

## Production Mode
To build the application for production and run it locally, follow these steps:

1. **Build the Application:**
   This creates an optimized production build in the `dist` folder.
   ```bash
   node ./node_modules/vite/bin/vite.js build
   ```

2. **Preview the Production Build:**
   This starts a local web server that serves the `dist` folder, allowing you to test the production build before actually deploying it.
   ```bash
   node ./node_modules/vite/bin/vite.js preview
   ```
   *The server will typically start at `http://localhost:4173`.*

## Deployment
For actual online deployment (like Vercel, Netlify, or an Nginx server), simply run the build command (step 1 above) and serve the `dist` folder.
