(function () {
  'use strict';

  var PAGE_MAP = {
    'hormuz-sk.html': {
      lang: 'sk',
      pair: 'hormuz-den-30-en.html',
      type: 'analysis',
      projektSk: 'horizont-udalosti.html',
      projektEn: 'event-horizon.html'
    },
    'hormuz-den-30-en.html': {
      lang: 'en',
      pair: 'hormuz-sk.html',
      type: 'analysis',
      projektSk: 'horizont-udalosti.html',
      projektEn: 'event-horizon.html'
    },
    'horizont-udalosti.html': {
      lang: 'sk',
      pair: 'event-horizon.html',
      type: 'projekt'
    },
    'event-horizon.html': {
      lang: 'en',
      pair: 'horizont-udalosti.html',
      type: 'projekt'
    }
  };

  function getFilename() {
    var parts = window.location.pathname.split('/');
    var name = parts[parts.length - 1];
    return name || 'index.html';
  }

  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }

  function buildNav(meta) {
    var nav = el('div');
    nav.id = 'nav-component';

    var lang = meta.lang;

    // Language switcher (left side)
    var langWrap = el('span');
    if (lang === 'sk') {
      langWrap.appendChild(el('span', 'nav-lang-active', 'SK'));
      langWrap.appendChild(el('span', 'nav-sep', '\u00a0/\u00a0'));
      var enLink = el('a', 'nav-lang-link', 'EN');
      enLink.href = meta.pair;
      langWrap.appendChild(enLink);
    } else {
      var skLink = el('a', 'nav-lang-link', 'SK');
      skLink.href = meta.pair;
      langWrap.appendChild(skLink);
      langWrap.appendChild(el('span', 'nav-sep', '\u00a0/\u00a0'));
      langWrap.appendChild(el('span', 'nav-lang-active', 'EN'));
    }
    nav.appendChild(langWrap);

    // Spacer pushes right link to the right
    var spacer = el('span');
    spacer.style.flex = '1';
    nav.appendChild(spacer);

    // Divider
    nav.appendChild(el('span', 'nav-divider'));

    // Right link: projekt or ← Index
    if (meta.type === 'analysis') {
      var projektHref = lang === 'sk' ? meta.projektSk : meta.projektEn;
      var projektLabel = lang === 'sk' ? 'Horizont udalostí' : 'Event Horizon';
      var projektLink = el('a', 'nav-projekt', projektLabel);
      projektLink.href = projektHref;
      nav.appendChild(projektLink);
    } else {
      var indexLink = el('a', 'nav-projekt', '\u2190 Index');
      indexLink.href = 'index.html';
      nav.appendChild(indexLink);
    }

    return nav;
  }

  function init() {
    var filename = getFilename();
    var meta = PAGE_MAP[filename];
    if (!meta) return;

    var navEl = buildNav(meta);
    document.body.insertBefore(navEl, document.body.firstChild);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
