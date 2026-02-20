# Kleinpeter's Home Improvement & Home Maintenance, LLC

Website for Kleinpeter's Home Improvement — Louisiana home improvement contractor (gutters, patios, pergolas, screened enclosures, decks, fence, paint, pressure washing).

**Repo:** [github.com/zachjon51699/kleinpeterhomeimprovement](https://github.com/zachjon51699/kleinpeterhomeimprovement)

## Connect this folder to your new repo

From the project folder in Terminal, run:

```bash
git remote set-url origin https://github.com/zachjon51699/kleinpeterhomeimprovement.git
git remote -v
```

Then commit any uncommitted changes and push:

```bash
git add -A
git commit -m "Kleinpeter site: Netlify forms, SEO, gallery, locations"
git push -u origin main
```

(Use your existing branch name if it’s not `main`.)

## Run locally

```bash
npm install
npm run dev
```

## Deploy (Netlify)

1. Connect the repo **zachjon51699/kleinpeterhomeimprovement** to a new Netlify site.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. In Netlify → Forms, add an email notification to your Gmail for the **contact** form.

## Tech

- React + TypeScript + Vite
- Tailwind CSS
- Netlify Forms (contact form)
- React Router
