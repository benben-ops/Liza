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
    if (html) e.innerHTML = html;
    return e;
  }

  function buildNav(meta, filename) {
    var nav = el('div');
    nav.id = 'nav-component';

    var lang = meta.lang;
    var pairFile = meta.pair;

    // Language switcher
    var langWrap = el('span');

    if (lang === 'sk') {
      var skSpan = el('span', 'nav-lang-active', 'SK');
      var sep = el('span', 'nav-sep', '/');
      var enLink = el('a', 'nav-lang-link', 'EN');
      enLink.href = pairFile;
      langWrap.appendChild(skSpan);
      langWrap.appendChild(sep);
      langWrap.appendChild(enLink);
    } else {
      var skLink = el('a', 'nav-lang-link', 'SK');
      skLink.href = pairFile;
      var sep2 = el('span', 'nav-sep', '/');
      var enSpan = el('span', 'nav-lang-active', 'EN');
      langWrap.appendChild(skLink);
      langWrap.appendChild(sep2);
      langWrap.appendChild(enSpan);
    }

    nav.appendChild(langWrap);

    // Divider
    nav.appendChild(el('span', 'nav-divider'));

    // Second link: projekt or ← Index
    if (meta.type === 'analysis') {
      var projektHref = lang === 'sk' ? meta.projektSk : meta.projektEn;
      var projektLabel = lang === 'sk' ? 'Horizont udalostí' : 'Event Horizon';
      var projektLink = el('a', 'nav-projekt');
      projektLink.href = projektHref;
      projektLink.innerHTML = '<span class="nav-projekt-name">' + projektLabel + '</span>';
      nav.appendChild(projektLink);
    } else {
      // projekt page — show ← Index
      var indexLink = el('a', 'nav-projekt');
      indexLink.href = 'index.html';
      indexLink.innerHTML = lang === 'sk' ? '← Index' : '← Index';
      nav.appendChild(indexLink);
    }

    return nav;
  }

  function init() {
    var filename = getFilename();
    var meta = PAGE_MAP[filename];
    if (!meta) return; // unknown page, do nothing

    var navEl = buildNav(meta, filename);
    document.body.insertBefore(navEl, document.body.firstChild);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
