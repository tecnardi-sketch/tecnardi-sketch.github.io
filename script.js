(function () {
  const footer = document.querySelector('.site-footer');
  if (!footer) {
    return;
  }

  const pageName = (location.pathname || '/index.html').replace(/\/+$/, '') || '/index.html';
  const pageKey = pageName === '/index.html' ? 'index.html' : pageName.replace(/^\//, '');
  const counter = document.createElement('div');
  counter.className = 'visit-counter';
  counter.setAttribute('aria-live', 'polite');
  counter.textContent = 'Acessos: carregando...';
  footer.appendChild(counter);

  const endpoint = 'https://api.countapi.xyz/hit/' + encodeURIComponent('tecnardi-sketch.github.io') + '/' + encodeURIComponent(pageKey) + '?strict=false';

  fetch(endpoint)
    .then(function (response) {
      if (!response.ok) {
        throw new Error('Erro no contador');
      }
      return response.json();
    })
    .then(function (data) {
      const total = Number(data && data.value ? data.value : 0);
      counter.innerHTML = 'Acessos: <strong>' + total.toLocaleString('pt-BR') + '</strong>';
    })
    .catch(function () {
      counter.innerHTML = 'Acessos: <strong>0</strong>';
    });
})();
