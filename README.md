# hire-ed.consulting

A single-page site for Ed Flaherty's independent CRM & enrollment technology consulting practice.

**Files**
- `index.html` — all page content
- `styles.css` — design system (the "ledger" look: brass spine rule, marginal tab labels, hairline dividers)
- `script.js` — footer year + a one-time stat count-up animation (skips itself for reduced-motion users)
- `CNAME` — tells GitHub Pages which custom domain to serve

## Deploy to GitHub Pages

1. Create a new GitHub repo (public), e.g. `hire-ed-consulting`.
2. Add these four files to the repo root and push to the `main` branch.
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`. Save.
5. Under **Custom domain**, enter `hire-ed.consulting` and save. GitHub will start provisioning HTTPS (can take a few minutes to a few hours).

## Point your domain at GitHub Pages

At your domain registrar (wherever you bought hire-ed.consulting), set:

**If using the apex domain (`hire-ed.consulting`) — add these 4 A records:**
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**If you also want `www.hire-ed.consulting` to work — add a CNAME record:**
```
www  →  <your-github-username>.github.io
```

The `CNAME` file already in this repo (containing `hire-ed.consulting`) is what tells GitHub which domain to associate — you don't need to edit it unless your domain changes.

Once DNS propagates, check the box for **Enforce HTTPS** back in Settings → Pages.

## Editing the content later

Everything is plain HTML/CSS — no build step. Open `index.html` in any editor, find the section you want to change (`<section id="services">`, `<section id="track-record">`, etc.), and edit the text directly. To change colors or fonts, edit the `:root` variables at the top of `styles.css`.
