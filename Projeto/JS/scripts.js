import { artistData } from './Data/artistas.js';
import { albumsData } from './Data/albums.js';
import { paradasData } from './Data/paradas.js';

// Script para popular os grids de artistas e álbuns com dados fictícios
document.addEventListener('DOMContentLoaded', () => {
  // Popula o grid de artistas
  const artistGrid = document.querySelector('.artists-grid');
  const albumsGrid = document.querySelector('.albums-grid');
  const paradasGrid = document.querySelector('.paradas-grid');

  artistData.forEach((artist) => {
    const artistCard = document.createElement('div');
    artistCard.classList.add('artist-card');

    artistCard.innerHTML = `
    <img src="${artist.Image}" alt="Imagem do ${artist.name}">
    <div>
      <h3>${artist.name}</h3>
      <p>Artista</p>
    </div>
  `;

    artistGrid.appendChild(artistCard);
  });

  albumsData.forEach((album) => {
    const albumCard = document.createElement('div');
    albumCard.classList.add('album-card');
    albumCard.innerHTML = `
      <img src="${album.Image}" alt="Capa do álbum ${album.name}">
      <div>
          <h3>${album.name}</h3>
          <p>${album.artist}</p>
      </div>
    `;
    albumsGrid.appendChild(albumCard);
  });

  paradasData.forEach((paradas) => {
    const paradasCard = document.createElement('div');
    paradasCard.classList.add('paradas-card');
    paradasCard.innerHTML = `
      <img src="${paradas.Image}" alt="Capa do álbum ${paradas.name}">
      <div>
          <h3>${paradas.name}</h3>
          <p>${paradas.description}</p>
      </div>
    `;
    paradasGrid.appendChild(paradasCard);
  });
});

// Banner de Premium
function fecharBanner() {
  document.getElementById('banner-premium').style.display = 'none';
}

window.fecharBanner = fecharBanner;

// Toggle do menu mobile
document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  const navOptions = document.getElementById('navOptions');
  const overlay = document.getElementById('sidebarOverlay');
  const btnSidebar = document.getElementById('btnToggleSidebar');
  const btnOptions = document.getElementById('btnToggleOptions');

  function abrirSidebar() {
    sidebar.classList.add('open');
    overlay.classList.add('active');
    btnSidebar.setAttribute('aria-expanded', 'true');
  }

  function fecharSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
    btnSidebar.setAttribute('aria-expanded', 'false');
  }

  function toggleSidebar() {
    if (sidebar.classList.contains('open')) {
      fecharSidebar();
    } else {
      // fecha o dropdown de opções antes de abrir a sidebar, evitando os dois abertos juntos
      navOptions.classList.remove('open');
      btnOptions.setAttribute('aria-expanded', 'false');
      abrirSidebar();
    }
  }

  function toggleNavOptions() {
    const vaiAbrir = !navOptions.classList.contains('open');
    navOptions.classList.toggle('open', vaiAbrir);
    btnOptions.setAttribute('aria-expanded', String(vaiAbrir));
    if (vaiAbrir) {
      // fecha a sidebar antes de abrir as opções, evitando os dois abertos juntos
      fecharSidebar();
    }
  }

  btnSidebar.addEventListener('click', toggleSidebar);
  btnOptions.addEventListener('click', toggleNavOptions);

  // Clicar na camada escura fecha a sidebar (comportamento comum de "gaveta" mobile)
  overlay.addEventListener('click', fecharSidebar);

  // Tecla ESC fecha qualquer um dos dois menus, se estiverem abertos
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      fecharSidebar();
      navOptions.classList.remove('open');
      btnOptions.setAttribute('aria-expanded', 'false');
    }
  });
});

// Função para mover o carrossel
function moverCarrossel(botao, direcao) {
  const container = botao.parentElement;
  const carrossel = container.querySelector('.carrossel-track');

  const primeiroCard = carrossel.firstElementChild;
  const larguraCard = primeiroCard
    ? primeiroCard.getBoundingClientRect().width
    : 500;
  const gap = parseFloat(getComputedStyle(carrossel).gap) || 0;
  const distancia = larguraCard + gap;

  carrossel.scrollBy({
    left: direcao * distancia,
    behavior: 'smooth',
  });

  setTimeout(() => atualizarBotoesCarrossel(container), 300);
}

window.moverCarrossel = moverCarrossel;

function atualizarBotoesCarrossel(container) {
  const carrossel = container.querySelector('.carrossel-track');
  const botaoAnterior = container.querySelector('.anterior');
  const botaoProximo = container.querySelector('.proximo');

  const chegouNoInicio = carrossel.scrollLeft <= 0;
  const chegouNoFim =
    carrossel.scrollLeft + carrossel.clientWidth >= carrossel.scrollWidth - 1;

  botaoAnterior.disabled = chegouNoInicio;
  botaoProximo.disabled = chegouNoFim;
}

window.addEventListener('load', () => {
  document.querySelectorAll('.carrossel').forEach((container) => {
    atualizarBotoesCarrossel(container);
  });
});
