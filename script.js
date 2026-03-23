// Tema dark/light
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if (document.body.classList.contains('dark')) {
    themeIcon.classList.replace('fa-moon', 'fa-sun');
  } else {
    themeIcon.classList.replace('fa-sun', 'fa-moon');
  }
});

// Menu mobile
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');

mobileBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  if (mobileMenu.classList.contains('active')) {
    menuIcon.classList.replace('fa-bars', 'fa-times');
  } else {
    menuIcon.classList.replace('fa-times', 'fa-bars');
  }
});

// Modal
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.getElementById('close-modal');

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const modalType = card.getAttribute('data-modal');
    
    let content = '';
    
    if (modalType === '1') {
      content = `
        <h2>Educação Infantil</h2>
        <p>Espaço lúdico, seguro e cheio de amor. Aprendizado através do brincar com valores cristãos desde o berçário até o Pré-V.</p>
      `;
    } else if (modalType === '2') {
      content = `
        <h2>Ensino Fundamental</h2>
        <p>Base sólida com robótica, inglês desde cedo, esportes, artes e formação humana completa (1º ao 9º ano).</p>
      `;
    } else if (modalType === '3') {
      content = `
        <h2>Ensino Médio</h2>
        <p>Preparação intensiva para ENEM, vestibulares e vida universitária com foco em valores e excelência acadêmica.</p>
      `;
    }
    
    modalBody.innerHTML = content;
    modal.style.display = 'flex';
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Galeria simples (imagens estáticas)
const gallery = document.getElementById('gallery');
const galleryImages = [
  'https://picsum.photos/id/1015/600/400',
  'https://picsum.photos/id/201/600/400',
  'https://picsum.photos/id/237/600/400',
  'https://picsum.photos/id/29/600/400',
  'https://picsum.photos/id/180/600/400',
];

gallery.innerHTML = galleryImages.map(src => `<img src="${src}" alt="Infraestrutura">`).join('');

// Formulário fake
document.getElementById('form-matricula').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('✅ Solicitação de matrícula enviada com sucesso!\nNossa equipe entrará em contato em breve.');
});

// Smooth scroll para links âncora
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    // Fecha menu mobile se aberto
    mobileMenu.classList.remove('active');
    menuIcon.classList.replace('fa-times', 'fa-bars');
  });
});

console.log("Site Colégio São Cristóvão carregado com sucesso!");
