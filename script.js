// =============================================
//         FUNÇÕES DA TELA DE LOGIN
// =============================================

function showLoginPage(pageId) {
  document.querySelectorAll('.login-page').forEach(page => {
    page.classList.remove('visible');
    setTimeout(() => { page.style.display = 'none'; }, 600);
  });

  const target = document.getElementById('login-' + pageId);
  if (target) {
    target.style.display = 'block';
    setTimeout(() => { target.classList.add('visible'); }, 50);
  }
}

function simulateLogin(type) {
  const cgmId = type === 'student' ? 'student-cgm' : 'resp-cgm';
  const phoneId = type === 'student' ? 'student-phone' : 'resp-phone';

  const cgmInput = document.getElementById(cgmId);
  const phoneInput = document.getElementById(phoneId);

  if (!cgmInput || !phoneInput) {
    alert('Erro interno: campos não encontrados.');
    return;
  }

  const cgm = cgmInput.value.trim();
  const phone = phoneInput.value.trim();

  if (!cgm || !phone) {
    alert('Por favor, preencha CGM/CPF e Celular.');
    return;
  }

  alert(`Código enviado para ${phone}!\n\n(Em produção, seria um SMS real)`);

  setTimeout(() => {
    const loginScreen = document.getElementById('login-screen');
    const mainContent = document.getElementById('main-content');

    if (loginScreen && mainContent) {
      loginScreen.style.display = 'none';
      mainContent.classList.remove('hidden');
      mainContent.style.display = 'block';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, 1500);
}

// =============================================
//         CÓDIGO ORIGINAL DO SITE
// =============================================

// Tema dark/light
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
if (themeToggle && themeIcon) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
      themeIcon.classList.replace('fa-moon', 'fa-sun');
    } else {
      themeIcon.classList.replace('fa-sun', 'fa-moon');
    }
  });
}

// Menu mobile
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
if (mobileBtn && mobileMenu && menuIcon) {
  mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    if (mobileMenu.classList.contains('active')) {
      menuIcon.classList.replace('fa-bars', 'fa-times');
    } else {
      menuIcon.classList.replace('fa-times', 'fa-bars');
    }
  });
}

// Modal dos cards
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.getElementById('close-modal');
const cards = document.querySelectorAll('.card');

if (modal && modalBody && closeModal) {
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const modalType = card.getAttribute('data-modal');
      let content = '';

      if (modalType === '1') content = `<h2>Educação Infantil</h2><p>Espaço lúdico...</p>`;
      else if (modalType === '2') content = `<h2>Ensino Fundamental</h2><p>Base sólida...</p>`;
      else if (modalType === '3') content = `<h2>Ensino Médio</h2><p>Preparação intensiva...</p>`;

      modalBody.innerHTML = content;
      modal.style.display = 'flex';
    });
  });

  closeModal.addEventListener('click', () => { modal.style.display = 'none'; });
  modal.addEventListener('click', e => { if (e.target === modal) modal.style.display = 'none'; });
}

// Galeria
const gallery = document.getElementById('gallery');
if (gallery) {
  const images = [
    'https://picsum.photos/id/1015/600/400',
    'https://picsum.photos/id/201/600/400',
    'https://picsum.photos/id/237/600/400',
    'https://picsum.photos/id/29/600/400',
    'https://picsum.photos/id/180/600/400'
  ];
  gallery.innerHTML = images.map(src => `<img src="${src}" alt="Infraestrutura">`).join('');
}

// Form matrícula
const formMatricula = document.getElementById('form-matricula');
if (formMatricula) {
  formMatricula.addEventListener('submit', e => {
    e.preventDefault();
    alert('✅ Solicitação de matrícula enviada!');
  });
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
    if (mobileMenu) {
      mobileMenu.classList.remove('active');
      if (menuIcon) menuIcon.classList.replace('fa-times', 'fa-bars');
    }
  });
});

// Inicialização segura
document.addEventListener('DOMContentLoaded', () => {
  console.log("Site carregado");

  const loginScreen = document.getElementById('login-screen');
  const mainContent = document.getElementById('main-content');

  if (loginScreen && mainContent) {
    loginScreen.style.display = 'flex';
    mainContent.style.display = 'none';
    showLoginPage('home');
    console.log("Login exibido corretamente");
  } else {
    console.error("Elementos login ou main não encontrados");
  }
});
