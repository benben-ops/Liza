# Style Guide — Konzistencia článkov s hormuz-den-30.html

Referenčný dokument: všetky zmeny potrebné aby nový článok (den-33) vizuálne zodpovedal vzoru (den-30).

---

## 1. Header (.hdr)

| Vlastnosť | den-30 (správne) | den-33 (pôvodne) |
|---|---|---|
| pozadie | žiadne (beige stránky) | `background:#1a1a1a` tmavý box |
| border | `border-left:3px solid #E24B4A` | žiadny |
| border-radius | žiadny | `border-radius:12px` |
| farba textu | `color:#1a1a1a` (dedená) | `color:#f5f4f0` biely |
| h1 font-size | `18px` | `20px` |
| h1 font-weight | `500` | `600` |
| .sub farba | `color:#666` | `color:#aaa` |

**Oprava:**
```css
/* SPRÁVNE */
.hdr{border-left:3px solid #E24B4A;padding:.5rem 0 .5rem 1rem;margin-bottom:.75rem}
.hdr h1{font-size:18px;font-weight:500}
.hdr .sub{font-size:12px;color:#666;margin-top:3px}
```

---

## 2. Badges (.badge, .b-red, .b-amb, .b-grn, .b-blu)

| Vlastnosť | den-30 (správne) | den-33 (pôvodne) |
|---|---|---|
| padding | `2px 8px` | `3px 10px` |
| border-radius | `4px` | `20px` (pill) |
| .b-red | `background:#fcebeb; color:#a32d2d` pastel | `background:#a32d2d; color:#fff` tmavý |
| .b-amb | `background:#faeeda; color:#854f0b` pastel | `background:#ba7517; color:#fff` tmavý |
| .b-grn | `background:#eaf3de; color:#3b6d11` pastel | `background:#2d6e2d; color:#fff` tmavý |
| .b-blu | `background:#e6f1fb; color:#185fa5` pastel | `background:#1a4a7a; color:#fff` tmavý |

**Pravidlo:** Badges sú vždy svetlé/pastelové pozadie s tmavým textom. Nikdy nie tmavé vyplnené.

---

## 3. Tabs (.tabs, .tab)

| Vlastnosť | den-30 (správne) | den-33 (pôvodne) |
|---|---|---|
| .tabs pozadie | `background:#fff` biely panel | žiadne |
| .tabs border | `border-bottom:1px solid #ddd` | žiadny |
| .tabs border-radius | `border-radius:8px 8px 0 0` | žiadny |
| .tabs padding | `padding:.5rem .5rem 0` | žiadny |
| .tab pozadie | `background:none` priehľadné | `background:#e0dfd8` šedé pill |
| .tab border-radius | žiadny | `border-radius:8px` |
| .tab active štýl | `border-bottom-color:#E24B4A` červený underline | `background:#1a1a1a; color:#fff` tmavý fill |
| .tab hover | žiadny explicitný | `background:#ccc` |
| .tab font-weight | normálne, `.active` = `500` | `500` vždy |
| .tab transition | žiadny | `transition:all .15s` |

**Oprava:**
```css
/* SPRÁVNE */
.tabs{display:flex;gap:3px;border-bottom:1px solid #ddd;margin-bottom:1rem;flex-wrap:wrap;background:#fff;padding:.5rem .5rem 0;border-radius:8px 8px 0 0}
.tab{padding:5px 10px;font-size:12px;cursor:pointer;border:none;background:none;color:#666;border-bottom:2px solid transparent;margin-bottom:-1px}
.tab.active{color:#1a1a1a;border-bottom-color:#E24B4A;font-weight:500}
```

---

## 4. Cards (.card, .card-hdr, .card-body)

| Vlastnosť | den-30 (správne) | den-33 (pôvodne) |
|---|---|---|
| .card-hdr pozadie | `background:#f5f4f0` | žiadne |
| .card-hdr user-select | `user-select:none` | žiadne |
| .card-hdr align-items | vrátane `card-hdr-left` wrapperu | priamo span |
| .card-body border-top | žiadny | `border-top:1px solid #f0efe9` |
| margin-bottom | `.85rem` | `.75rem` |

**Oprava:**
```css
/* SPRÁVNE */
.card{border:1px solid #e0dfd8;border-radius:10px;background:#fff;margin-bottom:.85rem;overflow:hidden}
.card-hdr{display:flex;align-items:center;justify-content:space-between;padding:.55rem .9rem;background:#f5f4f0;cursor:pointer;user-select:none}
.card-body{padding:.7rem .9rem;display:none}
.card-body.open{display:block}
```

---

## 5. Pills (.pill, .pill-red, .pill-key, atď.)

| Vlastnosť | den-30 (správne) | den-33 (pôvodne) |
|---|---|---|
| .pill border | `border:1px solid #ddd` | žiadny |
| .pill padding | `2px 7px` | `2px 8px` |
| .pill-key | `background:#faeeda; color:#854f0b` amber | `background:#1a1a1a; color:#fff` čierny |
| farebné varianty | majú `border-color:transparent` | žiadny border |

**Pravidlo:** `.pill-key` je amber/žltý, nie čierny. Všetky pills majú base `border:1px solid #ddd` a farebné varianty ho prepíšu na `transparent`.

**Oprava:**
```css
/* SPRÁVNE */
.pill{display:inline-block;font-size:11px;padding:2px 7px;border-radius:10px;margin:2px;border:1px solid #ddd;color:#555}
.pill-red{background:#fcebeb;color:#a32d2d;border-color:transparent}
.pill-key{font-weight:500;background:#faeeda;color:#854f0b;border-color:transparent}
```

---

## 6. Timeline tabuľka (.tl-table th)

| Vlastnosť | den-30 štýl (správne) | den-33 (pôvodne) |
|---|---|---|
| th pozadie | `background:#f5f4f0` svetlé | `background:#1a1a1a` tmavé |
| th farba | `color:#1a1a1a` tmavý text | `color:#fff` biely text |
| th font-size | `11px` | dedené z tabuľky |
| th border | `border:1px solid #e0dfd8` | žiadny |
| td line-height | `1.5` | `1.4` |

**Oprava:**
```css
/* SPRÁVNE */
.tl-table th{background:#f5f4f0;color:#1a1a1a;padding:6px 10px;text-align:center;font-weight:500;font-size:11px;border:1px solid #e0dfd8}
.tl-table td{padding:8px 10px;border:1px solid #e0dfd8;vertical-align:top;line-height:1.5;font-size:12px;color:#444}
```

---

## 7. Tag common + wildcard

| Vlastnosť | den-30 (správne) | den-33 (pôvodne) |
|---|---|---|
| .tag-common padding | `2px 7px` | `3px 9px` |
| .tag-common margin | `2px` | `3px` |
| .tag-wildcard display | chýbal `display:inline-block` | dedené (nefunkčné) |

**Oprava:**
```css
.tag-common{display:inline-block;font-size:11px;padding:2px 7px;border-radius:10px;margin:2px;background:#eaf3de;color:#3b6d11}
.tag-wildcard{display:inline-block;font-size:11px;padding:2px 7px;border-radius:10px;margin:2px;background:#faeeda;color:#854f0b;font-weight:500}
```

---

## 8. Layout (.wrap)

| Vlastnosť | den-30 (správne) | den-33 (pôvodne) |
|---|---|---|
| max-width | `900px` | `960px` |
| padding | `padding:0 0 3rem` | žiadny bottom padding |

---

## 9. Ďalšie drobnosti

| Vlastnosť | den-30 (správne) | den-33 (pôvodne) |
|---|---|---|
| .ks-lbl margin | `margin-bottom:2px` | `margin:.5rem 0 2px` (extra top) |
| .imp-val min-width | `70px` | `80px` |
| .src-card pozadie | `background:#f5f4f0` | `background:#fff` |
| .src-card border-radius | `8px` | `10px` |
| CSS formát | minifikované (bez medzier) | čitateľné (s medzerami) |

---

## 10. Časové línie — HTML štruktúra (najzásadnejší rozdiel)

**Toto bol najväčší štrukturálny problém** — den-33 používal `<table>`, den-30 používa kartový layout.

| Vlastnosť | den-30 (správne) | den-33 (pôvodne) |
|---|---|---|
| HTML štruktúra | `tl-card` → `tl-hdr` + `tl-body` → `tl-row` | `<table class="tl-table">` s `<thead>` + `<tbody>` |
| Počet stĺpcov | 2 (label 76px + text 1fr) vertikálny grid | 6 stĺpcov horizontálna tabuľka |
| min-width | žiadny | `min-width:700px` |
| Mobile | plne responzívne, bez scrollu | vyžaduje horizontálny scroll |
| Wrapper | žiadny | `<div class="tl-wrap">` s `overflow-x:auto` |
| Línia vizuál | farebný `tl-hdr` s emoji a textom | bunka `<td>` s `tl-lbl` |
| Časový label | `.tt` badge (`tt-p`, `tt-n`, `tt-f`) | stĺpce tabuľky |

**Dôsledok na mobile:** Tabuľka so 6 stĺpcami a `min-width:700px` sa na mobile (320–414px) nedá čítať bez horizontálneho scrollu. Kartový layout den-30 funguje vertikálne — každá línia je samostatná karta, každý časový bod je riadok s malým labelom (76px) a textom.

**Správna štruktúra (den-30):**
```html
<div class="tl-card">
  <div class="tl-hdr" style="background:#FAECE7;color:#993C1D">🔴 Línia 1 — Názov</div>
  <div class="tl-body">
    <div class="tl-row"><div class="tt tt-p">MIN. T₋₂</div><div class="tl-txt">Text...</div></div>
    <div class="tl-row"><div class="tt tt-p">MIN. T₋₁</div><div class="tl-txt">Text...</div></div>
    <div class="tl-row"><div class="tt tt-n">T₀ 2.4.26</div><div class="tl-txt"><strong>REÁLNY STAV:</strong> Text...</div></div>
    <div class="tl-row"><div class="tt tt-f">BUD. T₊₁</div><div class="tl-txt">Text...</div></div>
    <div class="tl-row"><div class="tt tt-f">BUD. T₊₂</div><div class="tl-txt">Text...</div></div>
  </div>
</div>
```

**Nesprávna štruktúra (den-33 pôvodne) — NEPOUŽÍVAŤ:**
```html
<div class="tl-wrap">
<table class="tl-table">
  <thead><tr><th>Línia</th><th>T₋₂</th><th>T₋₁</th>...</tr></thead>
  <tbody><tr><td>...</td><td>...</td>...</tr></tbody>
</table>
</div>
```

**CSS pre timeline (správne):**
```css
.tl-card{border:1px solid #e0dfd8;border-radius:10px;overflow:hidden;margin-bottom:1rem;background:#fff}
.tl-hdr{padding:.55rem .9rem;font-size:13px;font-weight:500}
.tl-body{padding:.7rem .9rem}
.tl-row{display:grid;grid-template-columns:76px 1fr;gap:7px;margin-bottom:.6rem;align-items:start}
.tt{font-size:10px;font-weight:500;padding:2px 5px;border-radius:4px;text-align:center;line-height:1.3}
.tt-p{background:#f5f4f0;color:#555}
.tt-n{background:#fcebeb;color:#a32d2d}
.tt-f{background:#e6f1fb;color:#185fa5}
.tl-txt{font-size:12px;color:#444;line-height:1.5}

/* Mobile */
@media(max-width:600px){
  .tl-row{grid-template-columns:60px 1fr}
}
```

**Farby tl-hdr pre línie (inline style):**
- 🔴 Eskalácia: `background:#FAECE7;color:#993C1D`
- 🟢 Riešenie: `background:#E1F5EE;color:#085041`
- 🔵 Vnútorná zmena: `background:#E6F1FB;color:#0C447C`
- 🟣 Transformácia: `background:#EEEDFE;color:#534AB7`

**Časové labels (.tt triedy):**
- `tt-p` = minulosť (šedý) — texty: `MIN. T₋₂`, `MIN. T₋₁`
- `tt-n` = prítomnosť/T₀ (červený) — text: `T₀ [dátum]`
- `tt-f` = budúcnosť (modrý) — texty: `BUD. T₊₁`, `BUD. T₊₂`

---

## 11. Časové línie — Panel 4: Wildcards a extrapolácia

Den-30 používa triedy `tt-x` (nový bod, amber) a `tt-r` (náhodný, zelený) pre rozšírené línie. Den-33 tieto CSS triedy nemá v inline style ale používa `.tag-wildcard` badge. Obe sú akceptovateľné ale:

**Ak sa používa den-30 vzor (tl-card layout pre extrapoláciu):**
```css
.tt-x{background:#faeeda;color:#854f0b}  /* NOVÝ BOD */
.tt-r{background:#eaf3de;color:#3b6d11}  /* NÁHODNÝ */
```

---

## Zhrnutie pravidiel pre nové články

1. **Header**: `border-left:3px solid #E24B4A`, nie tmavý box
2. **Badges**: pastelové pozadie + tmavý text, `border-radius:4px`
3. **Tabs**: biely panel, červený underline active, nie pill buttony
4. **Cards**: `background:#f5f4f0` header, `user-select:none`
5. **Pills**: base border `#ddd`, farebné varianty `border-color:transparent`, key = amber
6. **Časové línie**: kartový layout (`tl-card` → `tl-row` grid), NIKDY `<table>`
7. **Tags**: `padding:2px 7px`, `margin:2px`
8. **Wrap**: `max-width:900px`, `padding:0 0 3rem`
9. **CSS**: minifikované, bez medzier
10. **Farby**: nikdy tmavé vyplnené elementy (okrem textu), vždy pastelové pozadia
11. **Mobile**: `@media(max-width:600px)` musí obsahovať `.tl-row{grid-template-columns:60px 1fr}`
