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

  const artistGrid = document.querySelector('.artists-grid');
  const albumsGrid = document.querySelector('.albums-grid');

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
});
