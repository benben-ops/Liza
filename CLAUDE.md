# Project Notes

## Git Push
Git push cez lokálny proxy opakovane zlyháva (HTTP 503). Vždy používaj GitHub MCP API (mcp__github__push_files) namiesto git push.

## Publish Branch
GitHub Pages servuje branch **`master`**. VŽDY push do `master`, nikdy nie `main`.

Vetvy v tomto repo:
- `master` — GitHub Pages zdroj (obsah viditeľný na benben-ops.github.io/Liza/)
- `main` — nepoužíva sa pre publish
- `claude/*` — dočasné Claude pracovné vetvy

## Publish Workflow
Používaj `liza-publish.py` (Hormuz) alebo `liza-publish-universal.py` (akákoľvek udalosť) z `benben-ops/liza-core`.
Skripty pushujú automaticky do `master` + verifikujú po push.
