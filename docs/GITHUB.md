# Push this codebase to GitHub

This project is ready to replace or update  
[psychicgerm/mpowerminds](https://github.com/psychicgerm/mpowerminds).

## Option A — Update the existing repo

```bash
# From your machine, after downloading / cloning this project
cd mpowerminds

git remote add origin https://github.com/psychicgerm/mpowerminds.git
# If remote already exists:
# git remote set-url origin https://github.com/psychicgerm/mpowerminds.git

git push -u origin main
```

If the old repo only had a single `index.html`, prefer a clean force only if you
intentionally want to replace history:

```bash
git push -u origin main --force
```

Use `--force` carefully on a shared repo.

## Option B — New repository

1. Create a new empty repo on GitHub (e.g. `mpowerminds-variations`)
2. Point `origin` at it and push `main`

```bash
git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git
git push -u origin main
```

## After pushing

1. Import the repo in [Vercel](https://vercel.com/new)
2. Deploy with default settings (`npm run build`)
3. Set the production domain and share the gallery URL with family

## Local verification before push

```bash
npm install
npm run dev        # gallery at /
npm run build
npm run typecheck
```

## What ships

- Gallery at `/`
- Variations at `/v/heritage`, `/v/editorial`, `/v/atelier`, `/v/studio`
- Shared contact/content in `src/data/content.ts`
- Brand assets in `public/images/`
