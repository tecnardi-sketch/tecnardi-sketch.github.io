const modules = {
  eletronica: {
    title: 'Eletrônica',
    description: 'Teoria e prática em projetos, montagem de circuitos e uso de ferramentas.',
    page: 'pages/eletronica.html',
    items: [
      {
        title: 'Introdução à Eletrônica Prática',
        summary: 'Aprenda os conceitos básicos e monte seu primeiro circuito com explicações claras.',
        details: '<p>Conteúdo com vídeo, texto e imagens que explicam resistores, LEDs, fontes e montagem simples.</p><ul><li>Bloco 1: componentes essenciais</li><li>Bloco 2: esquema de montagem</li><li>Bloco 3: dicas de teste com multímetro</li></ul>'
      },
      {
        title: 'Projeto: placa de teste para iniciantes',
        summary: 'Tutorial passo a passo com esquema, lista de materiais e fotos do processo.',
        details: '<p>Crie uma placa de teste para aprender soldagem, circuito de alimentação e verificação de sinais.</p><ul><li>Lista de materiais</li><li>Montagem e soldagem</li><li>Teste e ajustes finais</li></ul>'
      },
      {
        title: 'Entendendo circuitos com multímetro',
        summary: 'Guia técnico para medições reais, uso correto e interpretação de resultados.',
        details: '<p>Saiba como medir tensão, corrente e continuidade em circuitos eletrônicos com confiança.</p><ul><li>Como configurar o multímetro</li><li>Medidas em circuitos DC</li><li>Conselhos de segurança</li></ul>'
      }
    ]
  },
  arcade: {
    title: 'Arcade',
    description: 'Instalação de sistemas multijogos e personalização de controles.',
    page: 'pages/arcade.html',
    items: [
      {
        title: 'Instalação de sistema multijogos',
        summary: 'Configure emuladores, organize ROMs e crie uma biblioteca de jogos.',
        details: '<p>Configuração de software e opções de emulação para arcade e coleção multi-jogos.</p><ul><li>Windows XP SP3 Lite Otimizado</li><li>Plataforma Maximus Arcade</li><li>Link do tutorial para instalar e configurar</li></ul>'
      }
    ]
  }
};

const modulePanel = document.getElementById('modulePanel');
const moduleTitle = document.getElementById('moduleTitle');
const moduleDescription = document.getElementById('moduleDescription');
const modulePageLink = document.getElementById('modulePageLink');
const contentItems = document.getElementById('contentItems');
const contentPreview = document.getElementById('contentPreview');
const closeModule = document.getElementById('closeModule');

const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('click', () => {
    const key = card.dataset.module;
    openModule(key);
  });
});

closeModule.addEventListener('click', () => {
  modulePanel.classList.add('hidden');
  contentPreview.innerHTML = '<h3>Selecione um conteúdo</h3><p>Os itens podem ser vídeo-aulas, tutoriais, galerias, links e textos completos.</p>';
});

function openModule(key) {
  const module = modules[key];
  if (!module) return;
  moduleTitle.textContent = module.title;
  moduleDescription.textContent = module.description;
  if (module.page) {
    modulePageLink.href = module.page;
    modulePageLink.classList.remove('hidden');
  } else {
    modulePageLink.classList.add('hidden');
  }
  contentItems.innerHTML = '';

  module.items.forEach((item, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = item.title;
    button.addEventListener('click', () => {
      selectContent(module, index, button);
    });
    const li = document.createElement('li');
    li.appendChild(button);
    contentItems.appendChild(li);
  });

  modulePanel.classList.remove('hidden');
}

function selectContent(module, index, button) {
  const item = module.items[index];
  document.querySelectorAll('.content-list button').forEach(btn => {
    btn.classList.remove('active');
  });
  button.classList.add('active');
  contentPreview.innerHTML = `
    <h3>${item.title}</h3>
    <p>${item.summary}</p>
    ${item.details}
  `;
  contentPreview.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
