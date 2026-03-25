# posts

Personal site for writing and portfolio — hosted on GitHub Pages.

## Structure

```
index.html          # Home page — lists all posts dynamically from posts.json
posts.json          # Auto-generated index of all posts (title, date, category)
gen-posts.sh        # Script to regenerate posts.json
inject-ga.sh        # Script to inject Google Analytics into all HTML files

science/            # Posts in the Science category
portfolio/          # Profile and portfolio page

.githooks/          # Git hooks (active via core.hooksPath)
  pre-push          # Auto-injects GA and commits before every push
.github/workflows/
  deploy.yml        # CI/CD: regenerates posts.json and deploys to GitHub Pages
```

## Adding a new post

1. Create an HTML file inside a category subfolder (the folder name becomes the category):
   ```
   science/my-new-post.html
   ```
2. Give it a `<title>` tag — this is used as the post title on the index.
3. Commit and push. The deploy workflow regenerates `posts.json` automatically.

The post date is set to the date of the **first git commit** for that file and never changes on edit.

## Running locally

Open `index.html` directly in a browser, or serve the folder with any static server:

```bash
python3 -m http.server
```

Then visit `http://localhost:8000`.

## Scripts

### `gen-posts.sh`
Scans all HTML files (excluding `index.html`) up to two levels deep, reads each file's git creation date and `<title>`, and writes `posts.json`. Run this manually if you need to update the index without pushing.

```bash
bash gen-posts.sh
```

### `inject-ga.sh`
Injects the Google Analytics snippet (`G-WND1ZWTYSM`) before `</head>` in every HTML file that doesn't already have it. Idempotent — safe to run multiple times.

```bash
bash inject-ga.sh
```

This also runs automatically via the pre-push hook.

## Git hooks

Hooks live in `.githooks/` and are activated via:

```bash
git config core.hooksPath .githooks
```

> If you clone this repo on a new machine, run the command above once to activate the hooks.

**`pre-push`** — Before every push, injects Google Analytics into any HTML files missing it and auto-commits the changes.

## Deployment

Pushes to `main` trigger the GitHub Actions workflow which:
1. Runs `gen-posts.sh` to rebuild `posts.json`
2. Deploys the site to GitHub Pages
