// Script para popular os grids de artistas e álbuns com dados fictícios
document.addEventListener('DOMContentLoaded', () => {
  const artistData = [
    { name: 'Henrique & Juliano', Image: './IMG/artista-henrique-juliano.jpg' },
    { name: 'Jorge & Mateus', Image: './IMG/artista-jorge-mateus.jpg' },
    { name: 'Zé Neto & Cristiano', Image: './IMG/artista-ze-neto.jpg' },
    { name: 'Gusttavo Lima', Image: './IMG/artista-gustavo-limma.jpg' },
    { name: 'Luan Santana', Image: './IMG/artista-luan-santana.jpg' },
    { name: 'Mateus & Kauan', Image: './IMG/artista-mateus-kauan.jpg' },
    { name: 'Grupo Menos é Mais', Image: './IMG/artista-menos-mais.jpg' },
  ];

  const albumsData = [
    {
      name: 'White Noise (Sleep & Relaxation Sounds)',
      artist: 'Sleepy John',
      Image: './IMG/album-white-noise.jpg',
    },
    {
      name: 'O Céu Explica Tudo (Ao Vivo)',
      artist: 'Henrique & Juliano',
      Image: './IMG/album-ceu-explica.jpg',
    },
    {
      name: 'Nada Como Um Dia Após O Outro',
      artist: "Racionais MC's",
      Image: './IMG/album-vida-loka.jpg',
    },
    {
      name: 'HIT ME HARD AND SOFT',
      artist: 'Billie Eilish',
      Image: './IMG/album-hit-me.jpg',
    },
    {
      name: 'Caju',
      artist: 'Liniker',
      Image: './IMG/album-caju.jpg',
    },
    {
      name: 'Escândalo Íntimo',
      artist: 'Luísa Sonza',
      Image: './IMG/album-escandalo.jpg',
    },
    {
      name: 'Churrasquinho',
      artist: 'Grupo Menos é Mais',
      Image: './IMG/album-churrasquinho.jpg',
    },
  ];

  const paradasData = [
    {
      name: 'Funk Viral',
      description: 'ginga y balança',
      Image: './IMG/album-funk-viral.jpg',
    },
    {
      name: 'Paredão Explode',
      description:
        'Os hits do forró, arrocha, pagodão e muito mais! Foto: Wesley Safadão',
      Image: './IMG/album-paredao-explode.jpg',
    },
    {
      name: 'Pagodeira',
      description: 'Os hits e os próximos clássicos do pagode!',
      Image: './IMG/album-pagodeira.jpg',
    },
    {
      name: 'Praiana',
      description: 'Um pouco de reggae pra acompanhar a brisa do mar.',
      Image: './IMG/album-praiana.jpg',
    },
    {
      name: 'Top 50 - Brasil',
      description:
        'Brasil: seu relatório diário das faixas mais tocadas no momento.',
      Image: './IMG/album-top-50-brazil.jpg',
    },
    {
      name: 'Top 50 - Global',
      description: 'Faixas mais tocadas no momento.',
      Image: './IMG/album-top-50-global.jpg',
    },
    {
      name: 'Top Brasil',
      description: 'Os maiores hits do país. O que tá bombando tá aqui.',
      Image: './IMG/album-top-brasil.jpg',
    },
  ];

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
