(function () {
  const footer = document.querySelector('.site-footer');
  if (!footer) {
    return;
  }

  const pageName = (location.pathname || '/index.html').replace(/\/+$/, '') || '/index.html';
  const pageKey = pageName === '/index.html' ? 'index.html' : pageName.replace(/^\//, '');
  const storageKey = 'tecnardi_visit_' + pageKey;

  function readCount() {
    try {
      const raw = localStorage.getItem(storageKey);
      const value = Number(raw || 0);
      return Number.isFinite(value) && value >= 0 ? value : 0;
    } catch (error) {
      return 0;
    }
  }

  function writeCount(value) {
    try {
      localStorage.setItem(storageKey, String(value));
    } catch (error) {
      // Ignora falhas de armazenamento em navegadores restritivos.
    }
  }

  const counter = footer.querySelector('.visit-counter') || document.createElement('div');
  counter.className = 'visit-counter';
  counter.setAttribute('aria-live', 'polite');
  footer.appendChild(counter);

  const nextCount = readCount() + 1;
  writeCount(nextCount);
  counter.innerHTML = 'Acessos: <strong>' + nextCount.toLocaleString('pt-BR') + '</strong>';
})();
