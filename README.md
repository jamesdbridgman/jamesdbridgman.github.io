# The Bridgman Sentencing Website

A static website version of the Bridgman Sentencing app — no build step required.
It's plain HTML/CSS/JS, so it can be hosted directly on GitHub Pages.

## What's here

- `index.html` — page shell (password gate + banner + content mount point)
- `css/style.css` — all styling
- `js/` — app logic
  - `app.js` — gate/password logic + wires up navigation
  - `router.js` — hash-based routing (`#/calculator`, `#/theorem`, etc.)
  - `ui.js`, `store.js` — small shared helpers
  - `pages/` — one file per page (calculator, theorem, guidelines, warnings, about)
  - `data/` — your original data files (`data.js`, `utils.js`, `guidelinesData.js`, `warningsData.js`), copied over as-is
- `assets/` — icons and the landing page dog photo

## Password gate

The site currently shows a password screen before letting anyone in
(password: `EllieMay`). This is **not real security** — the check happens
in the browser, so anyone who looks at the page source can find the
password. It's just meant to keep casual visitors out while the site
isn't ready for the public. Once you're ready to launch, open
`js/app.js` and delete (or bypass) the gate logic at the top of the file.

## How to put this on GitHub Pages

1. **Create a new repository** on GitHub (e.g. `bridgman-sentencing`).
2. **Upload these files**, keeping the folder structure exactly as-is
   (easiest way: on the repo page, choose "Add file → Upload files" and
   drag the whole contents of this folder in, or use `git`:
   ```bash
   cd bridgman-website
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/bridgman-sentencing.git
   git push -u origin main
   ```
3. In the repository, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source** to "Deploy from a branch",
   branch **main**, folder **/ (root)**. Save.
5. GitHub will give you a URL like
   `https://YOUR-USERNAME.github.io/bridgman-sentencing/` — that's your
   live site. It can take a minute or two to go live after the first push.

## Adding your own domain later

When you buy a domain:
1. In **Settings → Pages**, enter your domain under "Custom domain".
2. At your domain registrar, add a `CNAME` record pointing to
   `YOUR-USERNAME.github.io` (or the `A` records GitHub's docs specify if
   you're using an apex domain like `bridgmansentencing.com`).
3. GitHub will add a `CNAME` file to your repo automatically — don't
   delete it.

## Editing content later

- **About page text**: edit `js/pages/about.js` — the `SECTIONS` array
  near the top has the Who/What/Why placeholder text.
- **Guideline judgments / authorities**: edit `js/data/guidelinesData.js`.
- **Three strikes flowchart**: edit `js/data/warningsData.js`.
- **Calculator factors, Theorem bands/constants**: edit `js/data/data.js`.

No build step — just edit and refresh the page (or push to GitHub).
