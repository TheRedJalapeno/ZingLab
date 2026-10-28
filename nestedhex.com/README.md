# NestedHex.com

Standalone Jekyll site for [nestedhex.com](https://nestedhex.com), hosted on GitHub Pages. A ZingLab LLC product.

## Structure

- `index.html` — product page (gallery, buy button, features, FAQ)
- `for/*.md` — sales pages by use case (layout `sales`; front matter drives the hero, benefits, and FAQ; `order` sets their order in lists)
- `_posts/` — guides (layout `post`); `blog/index.html` lists them
- `_includes/buy_link.html` — every Buy link. Points to the Stripe Payment Link in `_config.yml` (`buy_url`) and adds `?client_reference_id=<page>` so each Stripe payment shows the page it came from
- `_includes/buybar.html` — buy bar fixed to the bottom of every page (hide with `hide_buybar: true`)
- `_includes/buy_box.html` — in-page purchase block used on every page
- `assets/style.css` — all styles, mobile first

## Move to its own repo

```bash
cp -R nestedhex.com ~/GitHub/NestedHex
cd ~/GitHub/NestedHex
git init && git add -A && git commit -m "NestedHex.com"
git branch -M main
git remote add origin https://github.com/<you>/NestedHex.git
git push -u origin main
```

Then in the new repo: **Settings → Pages → Deploy from a branch → main / (root)**. The `CNAME` file already contains `nestedhex.com`; point the domain's DNS at GitHub Pages and tick **Enforce HTTPS** once the certificate is issued.

After moving, delete the `nestedhex.com/` folder and its `exclude` line from the ZingLab repo's `_config.yml`.

## Scheduling posts

Posts dated in the future stay hidden until a rebuild on or after their date. `.github/workflows/scheduled-publish.yml` triggers a Pages rebuild every Monday at 11:15 UTC (and on demand from the Actions tab).

## Local preview

```bash
bundle install
bundle exec jekyll serve
```
