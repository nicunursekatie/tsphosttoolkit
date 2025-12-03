# TSP Host Onboarding Page

A standalone React app for onboarding new hosts to The Sandwich Project.

## Quick Start

```bash
# Install dependencies
npm install

# Run locally
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deploy to GitHub Pages

1. Create a new repo on GitHub (e.g., `tsp-host-onboarding`)

2. Update `vite.config.js` base path if your repo name is different:
   ```js
   base: '/your-repo-name/'
   ```

3. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/tsp-host-onboarding.git
   git push -u origin main
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

5. In GitHub repo settings → Pages → Source: select `gh-pages` branch

Your site will be live at: `https://YOUR_USERNAME.github.io/tsp-host-onboarding/`

## Structure

```
src/
├── HostOnboarding.jsx   # Main page component
├── App.jsx              # App wrapper
├── main.jsx             # Entry point
└── index.css            # Tailwind + custom styles
```

## Brand Colors

- Primary Teal: `#236383`
- Dark Teal: `#007e8c`
- Light Teal: `#47b3cb`
- Gold: `#fbad3f`
- Crimson: `#a31c41`

## Adding Interactive Features Later

The component is structured to add:
- Host login/auth (Firebase Auth)
- Count submission form (Firebase/Supabase)
- Driver schedule management
- Host calendar integration

Just extend `HostOnboarding.jsx` or create new components as needed.
