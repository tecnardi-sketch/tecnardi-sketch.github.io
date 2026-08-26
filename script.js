(function () {
  const PAGE_KEY = 'tecnardi_visit_' + (location.pathname || 'index.html');

  function getCount() {
    try {
      const raw = localStorage.getItem(PAGE_KEY);
      const parsed = Number(raw || 0);
      return Number.isFinite(parsed) && parsed >= 0 ? parsed : 0;
    } catch (error) {
      return 0;
    }
  }

  function setCount(value) {
    try {
      localStorage.setItem(PAGE_KEY, String(value));
    } catch (error) {
      // Ignora falhas de armazenamento em navegadores restritivos.
    }
  }

  const nextCount = getCount() + 1;
  setCount(nextCount);

  const footer = document.querySelector('.site-footer');
  if (!footer) {
    return;
  }

  let counter = footer.querySelector('.visit-counter');
  if (!counter) {
    counter = document.createElement('div');
    counter.className = 'visit-counter';
    counter.setAttribute('aria-live', 'polite');
    counter.innerHTML = 'Acessos: <strong>' + nextCount.toLocaleString('pt-BR') + '</strong>';
    footer.appendChild(counter);
    return;
  }

  const strong = counter.querySelector('strong');
  if (strong) {
    strong.textContent = nextCount.toLocaleString('pt-BR');
  }
})();
